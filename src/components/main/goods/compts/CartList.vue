<template>
  <div class="cart-list">
    <div class="cart-list-main">
      <div class="list-top" v-if="topInfo.discounts2.length>0">{{topInfo.discounts2[0].info}}</div>
      <el-container direction="vertical"
                    v-if="orderFoods.length>0"
                    ref="cartList">
        <div class="list-header">
          <span class="pocket">一号口袋</span>
          <div class="clearCart">
            <label class="el-icon-delete"></label>
            <span @click="clearCart">清空购物车</span>
          </div>
        </div>
        <el-container direction="vertical" class="cart-foods-list">
          <div class="list-content" v-for="food in orderFoods">
            <div class="foods-name-col">
              <div class="food-name">{{food.name}}</div>
              <div class="food-extra" v-if="food.description">{{food.description}}</div>
              <div class="food-extra" v-else>{{food.unit}}</div>
            </div>
            <div class="foods-price">{{food.min_price}}￥</div>
            <div class="cart-control">
              <CartControl :food="food"></CartControl>
            </div>
          </div>
        </el-container>
        <!--<div class="list-bottom">bottom</div>-->
      </el-container>
      <div class="cart-nothing" v-else>购物车为空</div>
    </div>
  </div>
</template>

<script>
  import CartControl from './CartControl'
  import BScroll from 'better-scroll'
    export default {
        name: "CartList",
      components:{
        CartControl
      },
      data(){
        return{
          cartListScroll:{},
        }
      },
      computed:{
        topInfo(){
          return this.$store.getters.getHeaderInfo;
        },
        orderFoods(){
          let foods = this.$store.getters.getOrderFoods;
          if (foods) {
            return foods;
          } else{
            return []
          }
        },
        /*clearCartFoods(){
          // this.orderFoods
        }*/
      },
      methods:{
        listScroll(){
          this.cartListScroll = new BScroll(this.$refs.cartList,{
            click:true,
          })
        },
        clearCart(){
          // this.$store.commit('setOrderFoods',[])
        }
      },
      mounted(){
        // this.listScroll()
      }
    }
</script>

<style scoped lang="less">
  .cart-list{
    position: fixed;
    bottom: 50px;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    z-index: -1;
    .cart-list-main{
      width: 100%;
      height: 60vh;
      position: absolute;
      bottom: 0;
      background: #fff;
      color: #606266;
      .list-top{
        height: 3.5vh;
        line-height: 3.5vh;
        background: #F5DFB0;
        font-size: 12px;
      }
      .list-header{
        height: 3.5vh;
        line-height: 3.5vh;
        background: #eee;
        font-size: 12px;
        border-left: 5px solid #13ce66;
        display: flex;
        justify-content: start;
        padding: 0 10px 0 5px;
        color: #303133;
        font-weight: bold;
        span.pocket{
          display: inline-block;
          flex: 1;
          text-align: left;
        }
        .clearCart{
          /*flex: 0;*/
          display: inline-block;
          line-height: 25px;
          .el-icon-delete{
          }
        }
      }
      .cart-foods-list{
        height: 53vh;
        overflow: hidden;
        padding: 10px 0;
        padding-bottom: 20px;
        .list-content{
          min-height: 50px;
          line-height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 5px 0;
          .foods-name-col,.foods-price,.cart-control{
            display: inline-block;
          }
          .foods-name-col{
            text-align: left;
            padding: 0 10px;
            line-height: normal;
            flex: 1;
            .food-name{
              font-size: 15px;
              font-weight: bold;
              overflow: hidden;
              -webkit-line-clamp:1;
              display: -webkit-box;
              -webkit-box-orient:vertical;
            }
            .food-extra{
              font-size: 12px;
              color: #909399;
            }
          }
          .foods-price{
            flex: 0 50px;
            font-size: 15px;
          }
          .cart-control{
            flex: 0 100px;
          }
        }
      }
      .cart-nothing{
        margin: 20vh 0;
        line-height: 50px;
        font-weight: bold;
        color: #ccc;
      }
    }
  }
</style>

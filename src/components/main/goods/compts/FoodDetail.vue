<template>
  <div class="foodDetail">
    <div class="foodDetail-main">
      <div class="top">
        <el-row class="operator-btn">
          <el-col :span="18" class="close">
            <a class="btn" @click="closeDetail"><span class="el-icon-close"></span></a>
          </el-col>
          <el-col :span="3">
            <a class="btn"><span class="el-icon-share"></span></a>
          </el-col>
          <el-col :span="3">
            <a class="btn"><span class="el-icon-more"></span></a>
          </el-col>
        </el-row>
        <div class="food-pic">
          <img :src="foodDetail.picture"/>
        </div>
      </div>
      <div class="goods-info">
        <h1>{{foodDetail.name}}</h1>
        <div class="goods-sale-record">
          <span>月销量 {{foodDetail.month_saled}}</span>
        </div>
        <div class="goods-order">
          <span class="food-price"><i>{{'￥'+foodDetail.min_price}}</i>{{' / '+foodDetail.unit}}</span>
          <div class="add-shopping-cart">
            <CartControl v-if="foodDetail.count>0" :food="foodDetail"></CartControl>
            <div v-else class="select-property"><span>选规格</span></div>
          </div>
        </div>
      </div>
      <div class="food-rating">
        <ul>
          <li>评论1</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import CartControl from './CartControl'
    export default {
        name: "FoodDetail",
      props:['checkOut'],
      components:{
        CartControl
      },
      data(){
        return{

        }
      },
      computed:{
        foodDetail(){
          return this.$store.getters.getDetail;
        },
        getCheckOut(){
          return this.checkOut;
        }
      },
      methods:{
        closeDetail(){
          this.$emit('closeDetail',false)
        }
      },
      watch:{
        getCheckOut:{
          handler(){
            console.log(this.foodDetail)
          }
        }
      }
    }
</script>

<style scoped lang="less">
  .foodDetail{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: rgba(0,0,0,.6);
    .foodDetail-main{
      margin: 10% auto;
      width: 80vw;
      height: 75vh;
      border-radius: 10px;
      position: relative;
      background-size: 100% 100% !important;
      background: #fff;
      padding: 15px;
      .top{
        position: relative;
        .operator-btn{
          width: 100%;
          position: absolute;
          top: 0;
          text-align: right;
          .btn{
            width: 30px;
            height: 30px;
            display: inline-block;
            line-height: 30px;
            text-align: center;
            color: #f5f5f5;
            background: rgba(0,0,0,.6);
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            span{
              display: inline-block;
              font-size: 16px;
            }
          }
          .close{
            text-align: left;
          }
        }
        .food-pic{
          img{
            width: 100%;
            height: auto;
          }
        }
      }
      .goods-info{
        flex: 1;
        text-align: left;
        *{
          margin: 5px 0;
        }
        .goods-sale-record{
          color: #C0C4CC;
          span{
            font-size: .8em;
            margin-right: 5px;
          }
        }
        h1{
          line-height: 20px;
          font-weight: bold;
          /*font-size: 14px;*/
        }
        .goods-order{
          display: flex;
          align-items: center;
          span.food-price{
            color: #C0C4CC;
            font-size: 12px;
            flex: 0 0 63px;
            i{
              color: darkred;
              font-size: 13px;
            }
          }
          .add-shopping-cart{
            flex: 1;
            text-align: right;
            .select-property{
              span{
                display: inline-block;
                width:60px;
                background: #eee;
              }
            }
          }
        }
      }

    }
  }
</style>

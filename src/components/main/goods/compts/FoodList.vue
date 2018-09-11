<template>
  <div class="goods-main" v-if="foodsData" >
    <el-container direction="vertical" class="special-column foods-list">
      <el-row class="special-item"
              v-for="item in containerData.operation_source_list"
              :key="item.pic_url">
        <img :src="item.pic_url"/>
      </el-row>
    </el-container>
    <el-container direction="vertical" class="goods-column foods-list"
                  v-for="column in foodsData" :key="column.name">
      <ul>
        <li class="column-name">
          <i>|</i><h1>{{column.name}}</h1>
        </li>
        <li class="goods-item"
            v-for="item in column.spus"
            :key="item.id" @click="showDetail(item)">
          <div class="goods-pic">
            <img :src="item.picture"/>
          </div>
          <div class="goods-info">
            <h2>{{item.name}}</h2>
            <div class="goods-sale-record">
              <span>销量{{item.month_saled}}</span>
              <span>{{item.praise_content}}</span>
            </div>
            <div class="goods-order">
              <span class="food-price"><i>{{'￥'+item.min_price}}</i>{{' / '+item.unit}}</span>
              <div class="add-shopping-cart">
                <CartControl :food="item"></CartControl>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!--<el-row class="column-name">
        <i>|</i><h1>{{column.name}}</h1>
      </el-row>
      <el-row class="goods-item"
              v-for="item in column.spus"
              :key="item.id" @click="showDetail(item)">
        <div class="goods-pic">
          <img :src="item.picture"/>
        </div>
        <div class="goods-info">
          <h2>{{item.name}}</h2>
          <div class="goods-sale-record">
            <span>销量{{item.month_saled}}</span>
            <span>{{item.praise_content}}</span>
          </div>
          <div class="goods-order">
            <span class="food-price"><i>{{'￥'+item.min_price}}</i>{{' / '+item.unit}}</span>
            <div class="add-shopping-cart">
              <CartControl :food="item"></CartControl>
            </div>
          </div>
        </div>
      </el-row>-->
    </el-container>
  </div>
</template>

<script>
  import CartControl from './CartControl'
    export default {
        name: "Foods",
      props:['foodsData','containerData'],
      components:{
        CartControl
      },
      data(){
        return {
          orderNum:0,
        }
      },
      computed:{
        orderFoods(){
          let foods = [];
          this.foodsData.forEach((foodList)=>{
            foodList.spus.forEach((food)=>{
              if (food.count>0){
                foods.push(food)
              }
            })
          });
          return foods;
        },
      },
      methods:{
        setOrderFoods(){
          this.$store.commit('setOrderFoods',this.orderFoods);
        },
        showDetail(food){
          this.$store.commit('setDetail',food);
          this.$emit('showDetail',true)
        }
      },
      watch:{
        orderFoods:{
          handler(){
            this.setOrderFoods();
          }
        },
      }
    }
</script>

<style scoped lang="less">
  @import url('../../../../icon/style.css');
  .goods-main{
    /*transform: none !important;*/
    .special-column{
      overflow: hidden;
      padding:  10px 10px 0;
      border-bottom: 1px solid #eee;
      .special-item{
        margin-bottom: 10px;
        img{
          height: auto;
          width: 100%;;
          border-radius: 4px;
        }
      }

    }
    .goods-column{
      padding: 0 10px;
      color: #303133;
      .column-name{
        height: 40px;
        line-height: 40px;
        text-align: left;
        font-size: 15px;
        i,h1{
          display: inline-block;
          margin-right: 10px;
          font-weight: bold;
        }
        i{
          color: #E6A23C;
        }
      }
      .goods-item{
        width: 100%;
        height: 100%;
        margin: 15px 0;
        display: flex;
        .goods-pic{
          text-align: left;
          flex: 0 0 80px;
          img{
            width: 80px;
            height: auto;
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
              font-size: 12px;
              margin-right: 5px;
            }
          }
          h2{
            line-height: 20px;
            font-weight: bold;
            font-size: 14px;
          }
          .goods-order{
            display: flex;
            align-items: center;
            span.food-price{
              color: #C0C4CC;
              font-size: 12px;
              flex: 0 0 70px;
              i{
                color: darkred;
                font-size: 15px;
              }
            }
            .add-shopping-cart{
              flex: 1;
            }
          }
        }

      }
    }
  }
</style>

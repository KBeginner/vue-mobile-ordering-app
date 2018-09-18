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
            <div v-else class="select-property">
              <span class="select-btn" @click="selectProperty(foodDetail)">选规格</span>
            </div>
          </div>
        </div>
      </div>
      <div class="food-rating">
        <ul>
          <li v-for="(item,index) in foodDetail.rating">
            <span><img :src="item.user_icon"/></span>
            item.like_ratio_desc
          </li>
        </ul>
      </div>
    </div>
    <div class="bg-fade" @click="closeDetail"></div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import CartControl from './CartControl'
  import BScroll from 'better-scroll'
    export default {
        name: "FoodDetail",
      props:['checkOut'],
      components:{
        CartControl,
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
        },
        selectProperty(food){
          if(!food.count){
            Vue.set(food,'count',1)
          }else{
            food.count++;
          }
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
    -webkit-transform: translateY();
    -moz-transform: translateY();
    -ms-transform: translateY();
    -o-transform: translateY();
    transform: translateY();
    .foodDetail-main{
      margin: 10% auto;
      width: 80vw;
      height: 75vh;
      border-radius: 10px;
      position: relative;
      background-size: 100% 100% !important;
      background: #fff;
      padding: 15px;
      z-index: 4;
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
            line-height: 32px;
            text-align: center;
            color: #f5f5f5;
            background: rgba(0,0,0,.5);
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
        .goods-sale-record{
          color: #C0C4CC;
          margin: 5px 0;
          span{
            font-size: .8em;
            margin-right: 5px;
          }
        }
        h1{
          line-height: 20px;
          font-weight: bold;
          margin: 5px 0;
        }
        .goods-order{
          display: flex;
          align-items: center;
          height: 40px;
          margin: 0;
          span.food-price{
            color: #C0C4CC;
            font-size: 16px;
            flex: 0 0 75px;
            i{
              color: darkred;
            }
          }
          .add-shopping-cart{
            flex: 1;
            text-align: right;
            .select-property{
              span{
                display: inline-block;
                width:70px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                background: #DCC64D ;
                border-radius: 8px;
                font-size: 14px;
                font-weight: bold;
              }
            }
          }
        }
      }

    }
    .bg-fade{
      width: 100%;
      height: 100%;
      background: transparent;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
    }
  }
</style>

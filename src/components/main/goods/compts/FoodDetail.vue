<template>
  <div class="foodDetail">
    <div class="foodDetail-main" ref="detail">
      <div class="detail-content">
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
      </div>
      <div class="food-rating">
        <el-row v-if="foodDetail.rating" class="comment-title">
          <el-col :span="18">
            <span>{{foodDetail.rating.title}}</span>
            (
            <span>{{foodDetail.rating.like_ratio_desc}}</span>
            <span class="praise-rate">{{foodDetail.rating.like_ratio}}</span>
            )
          </el-col>
          <el-col :span="5">{{foodDetail.rating.snd_title}}</el-col>
          <el-col :span="1"></el-col>
        </el-row>
        <comment-list :data="foodDetail"></comment-list>
      </div>
    </div>
    <div class="bg-fade" @click="closeDetail"></div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import CartControl from './CartControl'
  import BScroll from 'better-scroll'
  import CommentList from '../../rating/CommentList'
    export default {
        name: "FoodDetail",
      props:['checkOut'],
      components:{
        CartControl,
        CommentList
      },
      data(){
        return{
          // detailScroll:{}
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
        },
        bScroll(){
          if(this.foodDetail){
            this.$nextTick( ()=>{
              if(!this.detailScroll){
                this.detailScroll = new BScroll(this.$refs.detail,{
                  click:true
                })
              }else{
                this.detailScroll.refresh()
              }
            });
          }
        }
      },
      mounted(){
        this.bScroll();
      },
      watch:{
        getCheckOut:{
          handler(){
            console.log(this.foodDetail.name)
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
      background: #eee;
      margin: 8% auto;
      width: 80vw;
      height: 78vh;
      border-radius: 10px;
      position: relative;
      background-size: 100% 100% !important;
      z-index: 4;
      overflow: auto;
      .detail-content{
        background: #fff;
        padding: 15px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
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
      .food-rating{
        margin-top:10px ;
        background: #fff;
        height: auto;
        padding: 0 15px;
        .comment-title{
          height: 35px;
          line-height: 35px;
          font-size: 15px;
          text-align: left;
          span.praise-rate{
            color: red;
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

<template>
  <div>
    <div class="footer">
      <div class="footer-left">
        <div class="shopping-cart">
          <a @click="cartListFn">
            <span class="icon-shopping_cart"
                  :class="{'highlight':totalCount>0}"></span>
            <span class="goods-num" v-show="totalCount">{{totalCount}}</span>
          </a>
        </div>
        <div class="express-cost">
          <p class="totalPrice" v-show="totalCount">￥{{totalPrice}}</p>
          <p class="others-need">另需{{costInfo.shipping_fee_tip}}</p>
        </div>
      </div>
      <a class="footer-right"
         :class="{'highlight':totalCount>0}"
         @clic="goToBuy">
        <span v-if="totalCount">去结算</span>
        <span v-else>{{costInfo.min_price_tip}}</span>
      </a>
    </div>
    <transition name="cartList">
      <CartList v-if="cartListActivity" @closeList="closeCartList($event)"></CartList>
    </transition>
  </div>
</template>

<script>
  import CartList from './CartList'
    export default {
        name: "shopCart",
      components:{
        CartList
      },
      data(){
        return {
          totalCount:0,
          totalPrice:0,
          cartListActivity:false
        }
      },
      computed:{
        costInfo(){
          return this.$store.getters.getHeaderInfo
        },
        getOrderFoods(){
          return this.$store.getters.getOrderFoods;
        }
      },
      methods:{
        setTotalCount(){
          let count = 0;
          this.getOrderFoods.forEach((food)=>{
            count+=food.count;
          });
          this.totalCount = count;
        },
        setTotalPrice(){
          let totalPrice = 0;
          this.getOrderFoods.forEach((food)=>{
            totalPrice+=food.count*food.min_price;
          });
          this.totalPrice = totalPrice;
        },
        cartListFn(){
          if (this.totalCount>0){
            this.cartListActivity = !this.cartListActivity;
          }else{
            this.cartListActivity = false;
          }
        },
        closeCartList(val){
          this.cartListActivity = val;
        },
        goToBuy(){
          console.log('去下单')
        }
      },
      mounted(){
        this.setTotalCount()
      },
      watch:{
        getOrderFoods:{
          handler(){
            this.setTotalCount();
            this.setTotalPrice();
          }
        },
        totalCount:{
          handler(){
            if(this.totalCount<=0){
              this.cartListFn()
            }
          }
        }
      }
    }
</script>

<style scoped lang="less">
  @import url('../../../../icon/style.css');
  .footer{
    width: 100%;
    height: 50px;
    background: #303133;
    display: flex;
    .footer-left{
      flex: 1;
      text-align: left;
      display: flex;
      padding-left:10px ;
      .shopping-cart{
        flex: 0 0 60px;
        text-align: center;
        position: relative;
        .icon-shopping_cart{
          display: inline-block;
          width: 50px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          font-size: 25px;
          color: #C0C4CC;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          background: #606266;
          margin-top: -15px;
        }
        .goods-num{
          display: inline-block;
          width: 20px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          right: -5px;
          font-size: 14px;
          background: #EB2727;
          position: absolute;
          top: -20px;
          right: 5px;
        }
      }
      .express-cost{
        flex: 1;
        color: #ccc;
        font-size: 12px;
        position: relative;
        /*padding-left: 10px;*/
        .totalPrice{
          position: absolute;
          top: 10%;
          font-size: 16px;
          /*margin: 7px 0;*/
        }
        .others-need{
          position: absolute;
          top: 65%;
          font-size: 12px;
        -webkit-transform: translateY(-60%);
        -moz-transform: translateY(-60%);
        -ms-transform: translateY(-60%);
        -o-transform: translateY(-60%);
        transform: translateY(-60%);
        }
      }
    }
    .footer-right{
      flex: 0 0 110px;
      line-height: 50px;
      font-size: 13px;
      color: #ccc;
      display: block;
    }
  }
  .highlight{
    background: #F2D323 !important;
    color: #303133 !important;
    font-weight: bold;
  }
  .cartList-enter-active,.cartList-leave-active{
    transition: .5s all linear;
    transform: translateY(0);
    opacity: 1;
  }
  .cartList-enter,.cartList-leave-to{
    opacity: 0;
    transform: translateY(100%);
  }
</style>

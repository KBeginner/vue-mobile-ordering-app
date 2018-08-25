<template>
  <div>
    <div class="footer">
      <div class="footer-left">
        <div class="shopping-cart">
          <span class="icon-shopping_cart"></span>
        </div>
        <div class="express-cost">
          <span>另需{{costInfo.shipping_fee_tip}}</span>
        </div>
      </div>
      <div class="footer-right">
        <span>{{costInfo.min_price_tip}}</span>
      </div>
    </div>
    <div class="shopping-list"></div>
  </div>
</template>

<script>
    export default {
        name: "shopCart",
      computed:{
        costInfo(){
          return this.$store.getters.getHeaderInfo
        }
      },
      mounted(){
        // console.log(this.costInfo)
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
      }
      .express-cost{
        flex: 1;
        line-height: 50px;
        color: #ccc;
        font-size: 12px;
      }
    }
    .footer-right{
      flex: 0 0 110px;
      line-height: 50px;
      font-size: 13px;
      color: #ccc;
    }
  }
</style>

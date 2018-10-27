<template>
  <el-container direction="vertical" class="seller-container">
    <div class="seller-wrapper">
      <div class="info">
        <div class="address">{{getAddress}}</div>
        <div class="mobile">phone</div>
      </div>
      <div class="seller-pic" ref="picsView">
        <ul ref="picsList">
          <li v-for="(pic,index) in sellerPic" :key="index" ref="picItem">
            <img :src="pic"/>
          </li>
        </ul>
      </div>
      <div class="safe-info">
        查看食品安全档案
      </div>
    </div>
    <div class="tip-wrapper">
      <div class="delivery-service">
        配送服务：{{delivery}}
      </div>
      <div class="delivery-time">
        配送时间：{{deliveryTime}}
      </div>
    </div>
    <div class="other-wrapper">
      <el-row class="more-service">
        <el-col :span="6">
          商家服务
        </el-col>
        <el-col :span="6">
          可开发票
        </el-col>
      </el-row>
      <el-row class="discounts">
        {{discounts[0].info}}
      </el-row>
    </div>
  </el-container>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "Seller",
      data(){
          return {
            // sellerInfo:{}
          }
      },
      computed:{
        getAddress(){
          return this.$store.state.sellerInfo.address
        },
        delivery(){
          return this.$store.state.sellerInfo.app_delivery_tip
        },
        deliveryTime(){
          return this.$store.state.sellerInfo.shipping_time
        },
        discounts(){
          return this.$store.state.sellerInfo.discounts2
        },
        sellerPic(){
          return this.$store.state.sellerInfo.poi_env.thumbnails_url_list
        }
      },
      methods:{
        scrollPic(){
          this.$nextTick(()=>{
            if(sellerPic.length>0){

             }
          })
        }
      },
      mounted(){

      }
    }
</script>

<style scoped lang="less">
 .seller-container{
   width: 100vw;
   height: 100vh;
   background: #eee;
   text-align: left;
   font-size: 14px;
   font-weight: bold;
   .seller-wrapper,.tip-wrapper,.other-wrapper{
     margin-top: 10px;
     background: #fff;
     padding:10px;
   }
   .seller-wrapper{
     .info,.seller-pic,.safe-info{
       padding: 10px 0;
     }
     .info{
       display: flex;
       .address{
         flex: 1;
       }
       .mobile{
         flex: 0 55px;
       }
     }
     .seller-pic{
       ul li{
         display: inline-block;
         margin: 0 5px ;
         img{
           width: auto;
           height: 200px;
         }
       }
     }
   }
   .tip-wrapper{
     .delivery-service,.delivery-time{
       padding: 10px 0;
     }
   }
   .other-wrapper{
     .more-service,.discounts{
       padding: 10px 0;
     }
   }
 }
</style>

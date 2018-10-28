<template>
  <div class="seller-container" ref="seller">
    <div class="seller-scroll">
      <div class="seller-wrapper">
        <el-row class="info" type="flex" align="middle">
          <el-col :span="20" class="address">
            <span><img src="@/assets/seller/address.png"/></span>
            <span>{{getSellerInfo.address}}</span>
          </el-col>
          <el-col :span="4" class="mobile">
            <span><img src="@/assets/seller/line.png"/></span>
            <a><img src="@/assets/seller/phone.png"/></a>
          </el-col>
        </el-row>
        <div class="seller-pic" ref="picsView">
          <ul class="liView" ref="picsList">
            <li v-for="(pic,index) in getSellerInfo.poi_env.thumbnails_url_list"
                :key="index" ref="picItem">
              <img :src="pic"/>
            </li>
          </ul>
        </div>
        <div class="safe-info">
          <span><img src="@/assets/seller/safety.png"/></span>
          <span> 查看食品安全档案</span>
        </div>
      </div>
      <div class="tip-wrapper">
        <div class="delivery-service">
          <span><img src="@/assets/seller/delivery.png"/></span>
          <span>配送服务：{{getSellerInfo.app_delivery_tip}}</span>
        </div>
        <div class="delivery-time">
          <span><img src="@/assets/seller/time.png"/></span>
          <span>配送时间：{{getSellerInfo.shipping_time}}</span>
        </div>
      </div>
      <div class="other-wrapper">
        <el-row class="more-service">
          <el-col :span="6">
            <span><img src="@/assets/seller/server.png"/></span>
            <span>商家服务</span>
          </el-col>
          <el-col :span="6">
            <ul>
              <li v-for="(item,index) in getSellerInfo.poi_service">
                <span><img :src="item.icon"/></span>
                <span>{{item.content}}</span>
              </li>
            </ul>
          </el-col>
        </el-row>
        <el-row class="discounts">
          <ul>
            <li v-for="(item,index) in getSellerInfo.discounts2" :key="index">
              <!--<span><img :src="item.icon_url"/></span>-->
              <p class="discount-info">{{item.info}}</p>
            </li>
          </ul>
        </el-row>
      </div>
    </div>
  </div>
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
        getSellerInfo(){
          return this.$store.state.sellerInfo
        },
      },
      methods:{
        /*图片左右滚动*/
        scrollPic(){
          this.$nextTick(()=>{
            if(this.getSellerInfo && this.getSellerInfo.poi_env.thumbnails_url_list.length>0){
              /* 计算图片列表的宽度 */
              let picItem = this.$refs.picItem;
              let w = 0;
              let margin = 7;
              picItem.forEach((item)=>{
                w+=item.clientWidth+margin;
              });
              this.$refs.picsList.style.width = w +'px';
              if(!this.picScroll){
                this.picScroll = new BScroll(this.$refs.picsView,{
                  click:true,
                  scrollX:true
                })
              }else{
                this.picScroll.refresh()
              }
            }
          })
        },
        /*内容超出可视高度后实行滚动*/
        scrollSeller(){
          this.$nextTick(()=>{
            setTimeout(()=>{
              if(!this.sellerScroll){
                this.sellerScroll =  new BScroll(this.$refs.seller,{
                  click:true
                })
              }else{
                this.sellerScroll.refresh()
              }
            },500)
          })
        }
      },
      mounted(){
        this.scrollSeller();
        this.scrollPic()
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
   overflow: hidden;
   .seller-wrapper,.tip-wrapper,.other-wrapper{
     margin-top: 10px;
     background: #fff;
     padding:0 10px;
   }
   .seller-wrapper{
     .info,.seller-pic,.safe-info{
       padding: 15px 0;
     }
     .info{
       /*display: flex;*/
       /*line-height: 30px;*/
       .address{
         span{
           display: inline-block;
           margin: 0 2px;
           img{
             width: auto;
             height: 14px;
           }
         }
       }
       .mobile{
         a{
           display: inline-block;
           margin: 0 15px;
           img{
             width: 30px;
             height: auto;
           }
         }
       }
     }
     .seller-pic{
       border-bottom: 1px solid #EFEFEF;
       ul {
         overflow: hidden;
         li{
           display: inline-block;
           margin: 0 3px ;
           img{
             width: auto;
             height: 100px;
             -webkit-border-radius: 2px;
             -moz-border-radius: 2px;
             border-radius: 2px;
           }
         }
       }
     }
     .safe-info{
       display: flex;
       align-items: center;
       span{
         display: inline-block;
         margin: 0 3px;
         img{
           width: auto;
           height: 14px;
         }
       }
     }
   }
   .tip-wrapper{
     .delivery-service,.delivery-time{
       padding: 15px 0;
       display: flex;
       align-items: center;
       span{
         display: inline-block;
         margin: 0 3px;
         img{
           width: auto;
           height: 14px;
         }
       }
     }
     .delivery-service{
       border-bottom: 1px solid #EFEFEF;
     }
   }
   .other-wrapper{
     .more-service,.discounts{
       padding: 15px 0;
       /*display: flex;*/
       /*align-items: center;*/
       span{
         display: inline-block;
         margin: 0 3px;
         img{
           width: auto;
           height: 14px;
         }
       }
     }
     .more-service{
       font-weight: bold;
       border-bottom: 1px solid #EFEFEF;
     }
     .discounts{
       font-weight: normal;
       line-height: 20px;
       font-size: 13px;
       .discount-info{
         white-space: pre-wrap;
       }
     }
   }
 }
</style>

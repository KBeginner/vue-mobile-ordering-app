<template>
  <el-container direction="vertical" class="about">
    <div class="dialog-content" :style="aboutBg">
      <el-container direction="vertical" class="dialog-main-info">
        <el-row class="logo">
          <img :src="aboutData.pic_url" />
        </el-row>
        <h1 class="name">{{aboutData.name}}</h1>
        <div class="score">
          <Score :getScore="aboutData.wm_poi_score"></Score>
        </div>
        <p class="express">
          {{aboutData.shipping_fee_tip}}<i> | </i>{{aboutData.min_price_tip}}<i> | </i>{{aboutData.delivery_time_tip}}
        </p>
        <p class="express-time">{{aboutData.shipping_time}}</p>
        <p class="border"></p>
        <div class="activity-info">
          <img :src="aboutData.discounts2[0].icon_url"/>
          <span>新用户立减17元，满30元立减10元。</span>
        </div>
      </el-container>
      <div class="close-dialog">
        <a @click="closeDialog"><i class="el-icon-close"></i></a>
      </div>
    </div>
  </el-container>
</template>

<script>
  import Score from './Star'
    export default {
        name: "About",
      props:['aboutData'],
      components:{
        Score
      },
      data(){
          return {

          }
      },
      methods:{
        closeDialog(){
          this.$emit('closeDialog',false)
        }
      },
      computed:{
        aboutBg(){
          return 'background: url('+this.aboutData.poi_back_pic_url+');'
        },
        newsPic(){
          return this.aboutData.discounts2[0].icon_url
        },

      }
    }
</script>

<style scoped lang="less">
  .about{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: rgba(0,0,0,.6);
    .dialog-content{
      margin: 10% auto;
      width: 80%;
      height: 65%;
      border-radius: 10px;
      position: relative;
      padding: 50px 20px;
      .close-dialog{
        position: absolute;
        bottom: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        margin-bottom: -8vh;
        a{
          display: inline-block;
          border: 1px solid #c0c4cc;
          padding: 5px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          text-align: center;
          .el-icon-close{
            font-size: 25px;
            color: #ccc;
          }
        }
      }
      .dialog-main-info{
        margin: 0 auto;
        text-align: center;
        .logo{
          img{
            width: 70px;
            height: 70px;
            -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            border-radius: 10px;
          }
        }
        .name,.score,.express,.express-time{
          line-height: 40px;
        }
        .express,.express-time{
          color: #909399;
        }
        .express i{
          margin: 0 10px;
        }
        .activity-info{
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          img{
            display: inline-block;
            width: 20px;
            height: 20px;
            margin: 0 5px;
          }
        }
        .border{
          width: 100%;
          height: 1px;
          margin: 10px 0;
          background: #909399;
        }
      }
    }
  }
</style>

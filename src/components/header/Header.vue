<template>
  <el-container class="app-header" direction="vertical">
    <el-container direction="vertical" class="top" :style="'background:url('+getInfo.head_pic_url+');'">
      <el-row type="flex" align="middle" class="top-wrapper">
        <el-col :span="2" class="retreat-item">
          <span class="icon-arrow_lift"></span>
        </el-col>
        <el-col :span="16" class="search-item">
         <a> <span class="icon-search"></span></a>
          <el-input placeholder="请输入商品"></el-input>
        </el-col>
        <el-col :span="6" class="more-item">
          <el-row type="flex" align="middle">
            <el-col :span="14" style="text-align: right;"><a class="spelling-btn">拼单</a></el-col>
            <el-col :span="10" class="more">
              <a><i class="el-icon-more"></i></a>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row type="flex" align="middle" class="middle-wrapper">
        <el-col :span="4" class="logo">
          <img :src="getInfo.pic_url"/>
        </el-col>
        <el-col :span="18" class="seller-name">
          <h3>{{getInfo.name}}</h3>
        </el-col>
        <el-col :span="4" class="favorite-start">
          <span class="icon-star-empty"></span>
          <span class="block-btn">收藏</span>
        </el-col>
      </el-row>
      <el-row type="flex" align="middle" justify="start" class="news">
        <el-col :span="1" class="newsPic" v-if="getInfo.discounts2">
          <img :src="getInfo.discounts2[0].icon_url"/>
        </el-col>
        <el-col :span="17" class="illustrate" v-if="getInfo.discounts2">
          {{getInfo.discounts2[0].info}}
        </el-col>
        <el-col :span='6' class="activity-item">
          <a @click="clickAbout">
            <span>2个活动<span class="icon-keyboard_arrow_right"></span></span>
          </a>
        </el-col>
      </el-row>
      <transition name="dialog">
        <About v-if="aboutShow" :aboutData="getInfo" @closeDialog="closeDialog($event)"></About>
      </transition>
    </el-container>
    <Nav></Nav>
  </el-container>
</template>

<script>
  import Nav from './Nav'
  import About from './About'
    export default {
        name: "Header",
      components:{
        Nav,
        About
      },
      data(){
        return{
          aboutShow:false
        }
      },
      methods:{
        clickAbout(){
          this.aboutShow = true
        },
        closeDialog(val){
          this.aboutShow = val
        }
      },
      computed:{
        getInfo(){
          return this.$store.getters.getHeaderInfo
        },
      },
      created(){
      }

    }
</script>

<style scoped lang="less">
  @import "../../icon/style.css";
  .top{
    height: 160px;
    padding: 0 10px;
    padding-top: 20px;
    color:#eee;
    -webkit-background-size: 100% 135% !important;
    background-size: 100% 135% !important;
    background-position: center -12px !important;
    .top-wrapper{
      text-align: left;
      .retreat-item{
        .icon-arrow_lift{
          display: inline-block;
          width: 30px;
          height: 30px;
          line-height:30px;
          text-align: center;
        }
      }
      .search-item{
        position: relative;
        padding: 0 10px;
        .icon-search{
          position: absolute;
          z-index: 1;
          top:0;
          right: 10px;
          color: #c0c4cc;
          width: 30px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
          cursor: pointer;
        }
      }
      .more-item{
        .more{
          text-align: center;
        }
        .spelling-btn{
          width: 40px;
          height: 25px;
          line-height:25px;
          display: inline-block;
          text-align: center;
          border: 1px solid #EBEAEA;
          color: #C0C4CC;
          box-shadow: 0 0 5px #eee inset;
          border-radius: 4px;
          font-size: 14px;
        }
      }
    }
    .middle-wrapper{
      margin-top: 20px;
      text-align: left;
      .logo{
        text-align: center;
        img{
          width: 50px;
          height: 50px;
          border-radius: 4px;
        }
      }
      .seller-name{
        text-align: left;
        overflow: hidden;
        padding-left:10px ;
      }
      .favorite-start{
        text-align: center;
        .icon-star-empty,.block-btn{
          display: block;
          color: #c0c4cc;
        }
        .icon-star-empty{
          font-size: 25px;
        }
        .block-btn{
          font-size: 13px;
          margin: 4px 0;
        }
      }
    }
    .news{
      margin-top: 10px;
      text-align: left;
      .newsPic{
        img{
          width: 20px;
          height: auto;
        }
      }
      .illustrate{
        padding-left: 10px;
        font-size: 14px;
        overflow: hidden;       //隐藏溢出的内容
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        -webkit-line-clamp:1;   //设置行数
        display: -webkit-box;   //盒子模型
        -webkit-box-orient:vertical;    //元素的垂直居中排列
      }
    }
    .activity-item{
      text-align: center;
      font-size:14px;
    }
    .dialog-enter,
    .dialog-leave-to{
      opacity: 0;
      transform: translateY(-30px);
    }
    .dialog-enter-active,.dialog-leave-active{
      transition: .5s all ;
    }
    .dialog-enter-to,
    .dialog-leave{
      opacity: 1;
    }
  }
</style>

<template>
  <el-container class="app-header" direction="vertical">
    <el-container direction="vertical" class="top" :style="headerBg">
      <el-row type="flex" align="middle" class="top-wrapper">
        <el-col :span="3" class="retreat-item">
          <span class="icon-arrow_lift"></span>
        </el-col>
        <el-col :span="15" class="search-item">
         <a> <span class="icon-search"></span></a>
          <el-input placeholder="请输入商品"></el-input>
        </el-col>
        <el-col :span="6" class="more-item">
          <el-row type="flex" align="middle">
            <el-col :span="14" style="text-align: right;"><a class="spelling-btn">拼单</a></el-col>
            <el-col :span="10">
              <a><i class="el-icon-more"></i></a>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-container>
    <Nav></Nav>
  </el-container>
</template>

<script>
  import Nav from './Nav'
    export default {
        name: "Header",
      props:['poiInfo'],
      components:{
          Nav
      },
      methods:{

      },
      computed:{
        headerBg(){
          return 'background:url('+this.poiInfo.head_pic_url+');'
        }
      },
      created(){
          // console.log(this.poiInfo)
      }

    }
</script>

<style scoped lang="less">
  @import "../../icon/style.css";
  .top{
    height: 160px;
    padding-top: 20px;
    color:#eee;
    -webkit-background-size: 100% 135% !important;
    background-size: 100% 135% !important;
    background-position: center -12px !important;
    .top-wrapper{
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
        .icon-search{
          position: absolute;
          z-index: 1;
          top:0;
          right: 0;
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
        }
      }
    }

  }
</style>

<template>
  <el-container class="app-header" direction="vertical">
    <el-container direction="vertical" class="top" >
      <div class="header-bg" :style="headerBg"></div>
      <el-row type="flex" align="middle" class="top-wrapper">
        <el-col :span="4" class="retreat-item">
          <span class="icon-arrow_lift"></span>
        </el-col>
        <el-col :span="14" class="search-item">
          <span class="icon-search"></span>
          <el-input></el-input>
        </el-col>
        <el-col :span="6">
          <span>拼单 ...</span>
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
    .header-bg{
      width: 100%;
      height: 160px;
      position: absolute;
      z-index: -1;
      -webkit-background-size: 100% 135%;
      background-size: 100% 135%;
      background-position: center -12px;
    }
    .top-wrapper{
      .retreat-item{
        .icon-arrow_lift{
          display: inline-block;
          width: 40px;
          height: 40px;
          line-height: 40px;
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
          width: 40px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
        }
      }
    }

  }
</style>

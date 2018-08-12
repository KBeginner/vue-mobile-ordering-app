<template>
  <el-container direction="vertical" class="about" :style="aboutBg">

  </el-container>
</template>

<script>
    export default {
        name: "About",
      props:['aboutData'],
      data(){
          return {

          }
      },
      methods:{

      },
      computed:{
        aboutBg(){
          return 'background: url('+this.aboutData.poi_back_pic_url+');'
        }
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
  }
</style>

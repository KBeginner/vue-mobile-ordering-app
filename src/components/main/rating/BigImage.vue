<template>
  <div class="img-view" @click="bigImg">
　　<!-- 遮罩层 -->
<!--　　<div class="img-layer"></div>-->
　　<div class="img">
　　　　<img :src="imgSrc">
　　</div>
　</div>
</template>

<script>
    export default {
      name: "BigImage",
      props: ['imgSrc'],      //接受图片地址
      methods: {
        bigImg() {
          // 发送事件
          this.$emit('closed')
        }
      }
    }
</script>

<style scoped lang="less">
  .img-view, .img-layer{
    /*width: 100%;*/
    /*height: 100%;*/
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
  }
  .img-view{
    z-index: 1;
  }
  .img-layer{
    background: rgba(0 0 0 .5);
  }
  .img{
    img{
      width: 60vw;
      height: auto;
    }
  }
</style>

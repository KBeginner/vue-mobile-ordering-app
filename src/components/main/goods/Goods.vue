<template>
  <el-container class="goods" direction="vertical">
    <el-container class="goods-content">
      <Menu :getContainer="container"></Menu>
      <Foods :foodsData="goods"></Foods>
    </el-container>
    <el-footer class="goods-footer">footer</el-footer>
  </el-container>
</template>

<script>
  import Menu from './Menu'
  import Foods from './Foods'
    export default {
        name: "Goods",
      components:{
        Menu,
        Foods
      },
      data(){
          return {

          }
      },
      methods:{
      },
      computed:{
        goods(){
          return this.$store.getters.getGoods
        },
        container(){
          return this.$store.getters.getContainerData
        }

      },
      created(){
      }
    }
</script>

<style scoped lang="less">
  .goods{
    .goods-content{
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      top:200px;
      bottom: 50px;
      .goods-menu{
        flex: 0 0 85px;
      }
      .goods-main{
        flex: 1;
      }
    }
    .goods-footer{
      width: 100%;
      height: 50px !important;
      line-height: 50px;
      display: flex;
      position: absolute;
      bottom: 0;
      color: #fff;
      background: #909399;
    }
  }
</style>

<template>
  <el-container class="goods" direction="vertical">
    <el-container class="goods-content">
      <div class="goods-menu" ref="menuScroll">
        <Menu :getContainer="container" :goodsList="goods"></Menu>
      </div>
      <div ref="foodScroll">
        <Foods :containerData="container" :foodsData="goods" ></Foods>
      </div>
    </el-container>
    <el-footer class="goods-footer">footer</el-footer>
  </el-container>
</template>

<script>
  import Menu from './Menu'
  import Foods from './Foods'
  import BScroll from 'better-scroll'
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
        initScroll(){
          new BScroll(this.$refs.menuScroll);
          new BScroll(this.$refs.foodScroll)
        },
        calculateListHeight(){
          //获取商品品种列表
          let foodList = this.$refs.foodScroll.getElementsByClassName('foods-list');
          // console.log(foodList)
        }
      },
      computed:{
        goods(){
          return this.$store.getters.getGoods
        },
        container(){
          return this.$store.getters.getContainerData
        }

      },
      mounted(){
        this.initScroll();
        this.calculateListHeight()
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
      overflow: auto;
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

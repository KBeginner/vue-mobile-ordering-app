<template>
  <el-container direction="vertical" >
    <el-menu class="app-nav" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <el-menu-item index="goods">
        <router-link to="/goods">点餐</router-link>
      </el-menu-item>
      <el-menu-item index="rating">
        <router-link to="/rating">评价(<span>{{getRating.comment_num}}</span>)</router-link>
      </el-menu-item>
      <el-menu-item index="seller">
        <router-link to="/seller">商家</router-link>
      </el-menu-item>
    </el-menu>
  </el-container>
</template>

<script>
    export default {
        name: "Nav",
      data(){
          return{
            activeIndex:'goods'
          }
      },
      computed:{
        getRating(){
          return this.$store.getters.getRating
        }
      },
      methods:{
        handleSelect(key,keyPath){
          // console.log(key,keyPath)
        }
      },
      watch:{
        getRating:function () {
          console.log(this.getRating)
        }
      }
    }
</script>

<style scoped lang="less">
  .app-nav{
    width: 100%;
    display: flex;
    justify-content: center;
    .el-menu-item{
      margin: 0 7vw;
    }
  }
</style>

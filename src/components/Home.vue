<template>
  <el-container class="app-container" direction="vertical">
    <Header></Header>
    <el-main class="app-content">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  import Header from './header/Header'
    export default {
        name: "Home",
      components:{
        Header,
      }
    }
</script>

<style scoped lang="less">

</style>

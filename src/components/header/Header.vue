<template>
  <el-container class="app-header" direction="vertical">
    <el-container direction="vertical" class="header">
      header
    </el-container>
    <Nav></Nav>
  </el-container>
</template>

<script>
  import Nav from './Nav'
    export default {
        name: "Header",
      components:{
          Nav
      }

    }
</script>

<style scoped lang="less">
  .header{
    height: 15vh;
  }
</style>

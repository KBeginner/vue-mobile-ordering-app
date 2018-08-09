<template>
  <el-header class="app-header">
    <el-container direction="vertical">
      header
    </el-container>
    <Nav></Nav>
  </el-header>
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

</style>

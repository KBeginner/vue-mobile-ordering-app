<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #606266;
  .top-wrapper{
    .el-col{
      .el-input__inner{
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        background: #eee;
      }
    }
  }
}

</style>

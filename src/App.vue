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
  position: relative;
  .top-wrapper{
    .el-col{
      .el-input__inner{
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        background: #E4E7ED;
        height: 30px;
        line-height: 30px;
        color: #606266;
      }
    }
  }
  .app-header{
    .app-nav{
      .el-menu-item{
        height: 45px;
        line-height: 45px;
        padding: 0 10px;
      }
    }
  }
}

</style>

<template>
  <el-container class="app-container" direction="vertical">
    <Header></Header>
    <router-view></router-view>
  </el-container>
</template>

<script>
  import Header from './header/Header'
    export default {
        name: "Home",
      components:{
        Header,
      },
      data(){
        return{
        }
      },
      methods:{


      },
      created(){

      },
    }
</script>

<style scoped lang="less">
  .app-container{

  }
</style>

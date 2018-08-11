<template>
  <el-container class="app-container" direction="vertical">
    <Header :poiInfo="headerInfo"></Header>
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
      },
      data(){
        return{
          headerInfo:{}
        }
      },
      methods:{
        getGoods(){
          fetch('/api/goods')
            .then(response=>{
              return response.json();
            })
            .then(res=>{
              if (res.code == 0){
                this.headerInfo = res.data.poi_info;
              }
            })
            .catch(err=>{
              this.$message('哎呀！出错啦。')
            })
        },

      },
      created(){
        this.getGoods();

      }
    }
</script>

<style scoped lang="less">

</style>

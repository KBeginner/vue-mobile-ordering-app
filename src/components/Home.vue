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
          /*
          * 使用node.js编写了接口（build/webpack.dev.conf.js里），来获取data文件夹里面的数据
          * */
          /*获取商品数据*/
        getGoods(){
          fetch('/api/goods')
          .then(response=>{
            return response.json();
          })
          .then(res=>{
            if (res.code == 0){
              this.$store.commit('setHeaderInfo',res.data.poi_info);
              this.$store.commit('setContainerData',res.data.container_operation_source);
              this.$store.commit('setGoods',res.data.food_spu_tags)
            }
          })
          .catch(err=>{
            this.$message('哎呀！出错啦。')
          })
        },

        /*获取商品评价信息*/
        getRating(){
          fetch('/api/ratings')
            .then(response=>{
              return response.json()
            })
            .then(res=>{
              if(res.code==0){
                this.$store.commit('setRating',res.data)
              }
            })
        }

      },
      created(){
        this.getGoods();
        this.getRating();
      },
    }
</script>

<style scoped lang="less">
  .app-container{

  }
</style>

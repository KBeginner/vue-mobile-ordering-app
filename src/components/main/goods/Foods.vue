<template>
  <div class="goods-main" v-if="foodsData">
    <el-container direction="vertical" class="special">
      <el-row class="special-item" v-for="item in containerData.operation_source_list" :key="item.pic_url">
        <img :src="item.pic_url"/>
      </el-row>
    </el-container>
    <el-container direction="vertical">

    </el-container>
  </div>
</template>

<script>
    export default {
        name: "Foods",
      props:['foodsData','containerData'],
      data(){
        return {

        }
      },
      methods:{

      },
      created(){
        // console.log(foodsData)
      }
    }
</script>

<style scoped lang="less">
  .goods-main{
    .special{
      overflow: hidden;
      padding: 10px;
      padding-bottom: 0;
      border-bottom: 1px solid #eee;
      .special-item{
        margin-bottom: 10px;
        img{
          height: auto;
          width: 100%;;
          border-radius: 4px;
        }
      }

    }
  }
</style>

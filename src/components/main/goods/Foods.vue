<template>
  <el-main class="goods-main" v-if="foodsData">
    main
  </el-main>
</template>

<script>
    export default {
        name: "Foods",
      props:['foodsData'],
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

<style scoped>

</style>

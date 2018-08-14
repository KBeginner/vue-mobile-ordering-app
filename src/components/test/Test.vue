<template>
  <el-row>
    <el-col :span="12">
      <el-autocomplete
        v-model="state1"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        @select="handleSelect">
      </el-autocomplete>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "Test",
      data() {
        return {
          restaurants: [],
          state1: '',
        };
      },
      methods: {
        querySearch(queryString, cb) {
          var restaurants = this.restaurants;
          var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
          // 调用 callback 返回建议列表的数据
          cb(results);
        },
        createFilter(queryString) {
          return (restaurant) => {
            return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
          };
        },
        loadAll() {
          return [
            { value: "三全鲜食（北新泾店）", comId: 1001 },
            { value: "Hot honey 首尔炸鸡（仙霞路）", comId: 1002 },
            { value: "新旺角茶餐厅", comId: 1003 },
          ];
        },
        handleSelect(item) {
          console.log(item);
        }
      },
      mounted() {
        this.restaurants = this.loadAll();
      }
    }
</script>

<style scoped>

</style>

<template>
  <div>
    <h2>组件1，传值</h2>
    <input v-model="routerData" type="text"/>
    <router-link :to="'/getData/'+routerData">传值</router-link>
  </div>
</template>

<script>
    export default {
        name: "setData",
      data(){
          return {
            routerData:''
          }
      }
    }
</script>

<style scoped>

</style>

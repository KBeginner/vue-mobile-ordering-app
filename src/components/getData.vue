<template>
  <div>
    <h2>组件2，接收值</h2>
    <h1>{{getData}}</h1>
  </div>
</template>

<script>
    export default {
        name: "getData",
      data(){
          return {
            getData:this.$route.params.data
          }
      }
    }
</script>

<style scoped>

</style>

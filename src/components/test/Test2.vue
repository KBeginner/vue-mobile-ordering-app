<template>

</template>

<script>
    export default {
        name: "Test2",
      data(){
          return{

          }
      },
      methods:{
        test(){
          let obj = {
            a:15616,
            b:'685418'
          }
          Object.keys(obj).forEach((key)=>{
            console.log(key)
          })
        }
      }
    }
</script>

<style scoped>

</style>

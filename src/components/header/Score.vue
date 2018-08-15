<template>
  <div class="score">
    {{getScore}}
  </div>
</template>

<script>
  /*星星长度*/
  const LENGTH = 5;
  /*星星的状态*/
  const CLS_ON = 'on';
  const CLS_HAFT = 'half';
  const CLS_OFF = 'off';

    export default {
        name: "Score",
      props:['getScore'],
      data(){
        return {

        }
      }
    }
</script>

<style scoped lang="less">
  .score{
    text-align: center;
  }
</style>

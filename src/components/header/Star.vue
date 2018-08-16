<template>
  <div class="score">
    <!--循环生成星星，原理是通过添加类名给span设置星星背景图-->
    <span class="star-item" v-for="star in starScore" :class="star"></span>
    <span>{{getScore}}</span>
  </div>
</template>

<script>
    export default {
        name: "Score",
      props:['getScore'],
      data(){
        return {
          temp:4.7
        }
      },
      computed:{
        starScore(){
          let stars = [];   //定义一个空数组来存储类名
          let score = Math.floor(this.temp * 2)/2;   //把评分转成整数或整数+0.5（如：4.7转成4.5，4.2转成4.0）
          let decimalScore = score%1 !== 0;   //取1的余数不等于0，说明有小数（显示半星）
          let integerScore = Math.floor(score);   //取整数分数（显示全星）
          for (let i=0; i<integerScore; i++){
            stars.push('on')      //整数分数为多少，就添加多少个全星
          }
          if (decimalScore){
            stars.push('half')    //存在小数分数，添加一个半星
          }
          while(stars.length<5){
            stars.push('off')     //如果星星数不满5颗，空星星填充
          }
          return stars
        }
      }
    }
</script>

<style scoped lang="less">
  .score{
    display: flex;
    align-items: center;
    justify-content: center;
    .star-item{
      width: 20px;
      height: 20px;
      display: inline-block;
      margin: 0 5px;
      background: no-repeat;
    }
    .star-item.on{
      background: url("../../assets/star/star24_on@2x.png");  //全星
    }
    .star-item.half{
      background: url("../../assets/star/star24_half@2x.png");  //半星
    }
    .star-item.off{
      background: url("../../assets/star/star24_off@2x.png");   //空星星
    }
  }
</style>

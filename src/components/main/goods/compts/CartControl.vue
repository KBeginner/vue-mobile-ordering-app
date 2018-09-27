<template>
  <div class="cart-control">
    <transition name="move">
      <a class=" minus-btn" v-show="food.count>0" @click.stop="decreaseOrder(food)">
        <span class="icon-minus"></span>
      </a>
    </transition>
    <span class="order-num" v-show="food.count>0">{{food.count}}</span>
    <a class=" add-btn" @click.stop="increaseOrder(food)"><span class="icon-plus"></span></a>
  </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "CartControl",
      props:['food'],
      methods:{
        /*increase cart*/
        increaseOrder(food){
          if (!food.count){
            Vue.set(food,'count',1);   //给food对象添加项，（obj, key, val）
          } else{
            food.count++;
          }
        },
        /*decrease cart*/
        decreaseOrder(food){
          food.count--;
        },
      }
    }
</script>

<style scoped lang="less">
  @import url('../../../../icon/style.css');
  .cart-control{
    text-align: right;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    a.minus-btn,a.add-btn{
      width: 18px;
      height: 18px;
      display: inline-block;
      margin: 0 5px;
      z-index: 999;
      span{
        padding: 4px;
        font-size: 12px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
      }
    }
    a.minus-btn{

      span{
        border: 1px solid #ccc;
        color: #ccc;
      }
    }
    a.add-btn span{
      background: #F2D323 ;
      border: 1px solid #F2D323 ;
    }
    span.order-num{
      font-size: 13px;
      text-align: center;
      margin-left:5px ;
    }
    .move-enter-active,.move-leave-active{
      -webkit-transition: all 0.5s linear;
      -moz-transition: all 0.5s linear;
      -ms-transition: all 0.5s linear;
      -o-transition: all 0.5s linear;
      transition: all 0.5s linear;
    }
    .move-enter, .move-leave-to{
      -webkit-transform: translateX(20px) rotate(180deg);
      -moz-transform: translateX(20px) rotate(180deg);
      -ms-transform: translateX(20px) rotate(180deg);
      -o-transform: translateX(20px) rotate(180deg);
      transform: translateX(20px) rotate(180deg);
    }
  }
</style>

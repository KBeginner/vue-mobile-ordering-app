<template>
  <ul class="menu">
    <li class="menu-item"
        @click="specialClick"
        :class="isHere==true?'is-active':''">
      <img :src="getContainer.tag_icon"/>
      <a class="text">{{getContainer.tag_name}}</a>
    </li>
    <li class="menu-item"
        v-for="goods in goodsList"
        :key="goods.name"
        @click="toggle(goods.name)"
        :class="{'is-active':goods.name==checkId}">
      <img v-if="goods.icon" :src="goods.icon" />
      <a class="text">{{goods.name}}</a>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "Menu",
      props:['getContainer','goodsList'],
      data(){
        return{
          isHere :false,
          isGoodsMenuHere:false,
          checkId:'',
        }
      },
      methods:{
        specialClick(){
          this.isHere = true;
          this.checkId = ''
        },
        toggle(val){
          this.isHere = false;
          this.checkId = val;
        }
      }
    }
</script>

<style scoped lang="less">
  .menu{
    .menu-item{
      padding: 15px 10px;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 22px;
      background: #F8F9F9;
      border-right: 1px solid #eee;
      img{
        width: 15px;
        height:auto;
        margin: 0 2px;
      }
      .text{
        /*只展示两行文字*/
        -webkit-line-clamp:2;
        display: -webkit-box;
        -webkit-box-orient:vertical;
        overflow: hidden;
        font-size: 13px;
      }
    }
    .is-active{
      background: #fff;
      border-right: 1px solid #fff;
    }
  }
</style>

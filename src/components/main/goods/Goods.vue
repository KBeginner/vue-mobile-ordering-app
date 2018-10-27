<template>
  <el-container class="goods" direction="vertical">
    <el-container class="goods-content">
      <div class="goods-menu" ref="menuScroll">
        <ul class="menu">
          <li class="menu-item"
              @click="selectMenu(0)"
              :class="{'is-current':currentIndex===0}">
            <img :src="container.tag_icon"/>
            <a class="text">{{container.tag_name}}</a>
          </li>
          <li class="menu-item"
              v-for="(food,index) in goods"
              :key="index"
              @click="selectMenu(index+1)"
              :class="{'is-current':currentIndex===index+1}">
            <img v-if="food.icon" :src="food.icon" />
            <a class="text">{{food.name}}</a>
            <span class="orderCount" v-show="calculateCount(food.spus)">
              {{calculateCount(food.spus)}}
            </span>
          </li>
        </ul>
      </div>
      <div ref="foodScroll">
        <Foods :containerData="container"
               :foodsData="goods" @showDetail="showFoodDetail($event)"></Foods>
      </div>
      <transition name="detail">
        <food-detail v-show="foodDetailActivity"
                     :checkOut="foodDetailActivity"
                     @closeDetail="closeDetail($event)"></food-detail>
      </transition>
    </el-container>
    <el-footer class="goods-footer">
      <shop-cart></shop-cart>
    </el-footer>
  </el-container>
</template>

<script>
  import Foods from './compts/FoodList'
  import BScroll from 'better-scroll'
  import shopCart from './compts/Cart'
  import FoodDetail from './compts/FoodDetail'
    export default {
      name: "Goods",
      components: {
        Foods,
        shopCart,
        FoodDetail
      },
      data() {
        return {
          listHeight: [],
          menuScroll: {},
          foodScroll: {},
          scrollY: 0,
          foodDetailActivity:false,
        }
      },
      computed: {
        goods() {
          return this.$store.getters.getGoods
        },
        container() {
          return this.$store.getters.getContainerData
        },
        /*计算商品列表滚动下标*/
        currentIndex() {
          for (let i = 0, len = this.listHeight.length; i < len; i++) {
            let height1 = this.listHeight[i];
            let height2 = this.listHeight[i+1];
            // if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {     //!height处理数组越界问题
            if(this.scrollY >= height1 && this.scrollY < height2) {
              return i
            }
          }
          return 0;
        },
        orderFoods(){
          return this.$store.getters.getOrderFoods
        }
      },
      methods: {
        getGoods(){
          fetch('/api/goods')
            .then(response=>{
              return response.json();
            })
            .then(res=>{
              if (res.code == 0){
                this.$store.commit('setContainerData',res.data.container_operation_source);
                this.$store.commit('setGoods',res.data.food_spu_tags)
              }
            })
            .catch(err=>{
              this.$message('哎呀！出错啦。')
            })
        },

        /*滚动方法*/
        initScroll() {
          this.menuScroll = new BScroll(this.$refs.menuScroll, {     //菜单栏滚动
            click: true      //better-scroll默认点击事件为false
          });
          this.foodScroll = new BScroll(this.$refs.foodScroll, {     //商品页滚动
            probeType: 3,
            click: true
          });
          /*给foodScroll添加一个监听事件on(事件名,执行的函数)*/
          this.foodScroll.on('scroll', (position) => {     //scroll为better-scroll自带滚动事件
            // console.log(position.y);     //从原点开始滚动，往下滚时 position.y为负值，向上滚为正
            this.scrollY = Math.abs(Math.round(position.y));  //取整再取绝对值
          });
        },

        //计算分类区间的高度
        calculateListHeight(){
          let _this = this;
          setTimeout(function(){      //进行dom操作常用方法
            let foodList = _this.$refs.foodScroll.getElementsByClassName('foods-list');
            let height = 0;
            _this.listHeight.push(height);
            for (let i = 0, len = foodList.length; i < len; i++) {
              height += foodList[i].clientHeight;
              _this.listHeight.push(height);
            }
          },500);
        },

        /*点击菜单栏，跳转对应的品类*/
        selectMenu(index) {
          this.$nextTick(()=>{
            let foodList = this.$refs.foodScroll.getElementsByClassName('foods-list');
            let element = foodList[index];
            this.foodScroll.scrollToElement(element, 250);   //scrollToElement是better-scroll滚动到目标元素的事件
          });
        },

        /*计算商品列表里加入购物车的商品数量*/
        calculateCount(foods){
          let listCount = 0;
          foods.forEach((food)=>{
            if (food.count>0){
              listCount+=food.count;
            }
          });
          return listCount
        },

        /*显示商品详情*/
        showFoodDetail(value){
          this.foodDetailActivity = value;
        },
        /*关闭商品详情*/
        closeDetail(val){
          this.foodDetailActivity = val;
        }
      },
      mounted(){
        this.initScroll();
        this.calculateListHeight();
      },
      watch:{
        '$route':{
          handler(){
            this.initScroll();
            this.calculateListHeight();
          }
        }
      }
    }
</script>

<style scoped lang="less">
  .goods{
    .goods-content{
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      top:200px;
      bottom: 50px;
      overflow: hidden;
      .goods-menu{
        flex: 0 0 85px;
        margin-bottom: 20px;
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
            position: relative;
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
            .orderCount{
              width: 18px;
              height: 18px;
              line-height: 18px;
              text-align: center;
              display: inline-block;
              font-size: 12px;
              background: #EB2727;
              color: #eee;
              border-radius: 50%;
              position: absolute;
              top: 2px;
              right: 2px;
            }
          }
          .is-current{
            background: #fff;
            border-right: 1px solid #fff;
          }
        }
      }
      .goods-main{
        flex: 1;
      }
      .detail-enter-active{
        transition: all .7s;
        transform: scale(100%);
        opacity: 1;
      }
      .detail-enter{
        opacity: 0;
        transform: scale(0);
      }
      .detail-leave-active{
        transition: all .7s;
        opacity: .7;
      }
      .detail-leave-to{
        opacity: 0;
      }
    }
    .goods-footer{
      width: 100%;
      height: 50px !important;
      position: absolute;
      bottom: 0;
      color: #fff;
      padding: 0;
      z-index: 3;
    }
  }
</style>

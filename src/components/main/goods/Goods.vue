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
          </li>
        </ul>
      </div>
      <div ref="foodScroll">
        <Foods :containerData="container" :foodsData="goods" ></Foods>
      </div>
    </el-container>
    <el-footer class="goods-footer">
      <shop-cart></shop-cart>
    </el-footer>
  </el-container>
</template>

<script>
  import Foods from './Foods'
  import BScroll from 'better-scroll'
  import shopCart from './shopCart/shopCart'
    export default {
      name: "Goods",
      components: {
        Foods,
        shopCart
      },
      data() {
        return {
          listHeight: [],
          menuScroll: {},
          foodScroll: {},
          scrollY: 0,
          // currentIndex:0,
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
        calculateListHeight() {
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
          let foodList = this.$refs.foodScroll.getElementsByClassName('foods-list');
          let element = foodList[index];
          // this.currentIndex = index;
          this.foodScroll.scrollToElement(element, 250);   //scrollToElement是better-scroll滚动到目标元素的事件
        },
      },
      mounted(){
        this.initScroll();
        this.calculateListHeight()
      },
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
      overflow: auto;
      .goods-menu{
        flex: 0 0 85px;
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
          .is-current{
            background: #fff;
            border-right: 1px solid #fff;
          }
        }
      }
      .goods-main{
        flex: 1;
      }
    }
    .goods-footer{
      width: 100%;
      height: 50px !important;
      position: absolute;
      bottom: 0;
      color: #fff;
      padding: 0;
      z-index: 99;
    }
  }
</style>

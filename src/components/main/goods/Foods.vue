<template>
  <div class="goods-main" v-if="foodsData">
    <el-container direction="vertical" class="special-column">
      <el-row class="special-item"
              v-for="item in containerData.operation_source_list"
              :key="item.pic_url">
        <img :src="item.pic_url"/>
      </el-row>
    </el-container>
    <el-container direction="vertical" class="goods-column"
                  v-for="column in foodsData" :key="column.name">
      <el-row class="column-name">
        <i>|</i><h1>{{column.name}}</h1>
      </el-row>
      <el-row class="goods-item"
              v-for="item in column.spus" :key="item.id">
        <el-col :span="8" class="goods-pic">
          <img :src="item.picture"/>
        </el-col>
        <el-col :span="12" class="goods-info">
          <h1>{{item.name}}</h1>
          <div class="goods-sale-record">
            <span>销量{{item.month_saled}}</span>
            <span>{{item.praise_content}}</span>
          </div>
          <div class="goods-price">
            <span><i>{{'￥'+item.min_price}}</i>{{' / '+item.unit}}</span>
          </div>
        </el-col>
        <el-col :span="4" class="add-shopping-cart">
          <a class=" add-btn"><span class="icon-plus"></span></a>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "Foods",
      props:['foodsData','containerData'],
      data(){
        return {

        }
      },
      methods:{

      },
      created(){
        // console.log(foodsData)
      }
    }
</script>

<style scoped lang="less">
  @import url('../../../icon/style.css');
  .goods-main{
    .special-column{
      overflow: hidden;
      padding:  10px 20px 0;
      border-bottom: 1px solid #eee;
      .special-item{
        margin-bottom: 10px;
        img{
          height: auto;
          width: 100%;;
          border-radius: 4px;
        }
      }

    }
    .goods-column{
      padding: 0 10px;
      color: #303133;
      .column-name{
        height: 40px;
        line-height: 40px;
        text-align: left;
        padding: 0 10px;
        i,h1{
          display: inline-block;
          margin-right: 10px;
          font-weight: bold;
        }
        i{
          color: #E6A23C;
        }
      }
      .goods-item{
        width: 100%;
        height: 100%;
        position: relative;
        margin: 10px 0;
        .goods-pic{
          img{
            width: 80px;
            height: auto;
          }
        }
        .goods-info{
          text-align: left;
          padding-left:10px;
          *{
            margin: 10px 0;
          }
          .goods-sale-record{
            color: #C0C4CC;
            span{
              font-size: 13px;
              margin-right: 5px;
            }
          }
          h1{
            line-height: 20px;
            font-weight: bold;
          }
          .goods-price{
            span{
              color: #C0C4CC;
              i{
                color: darkred;
              }
            }
          }
        }
        .add-shopping-cart{
          a{
            width: 25px;
            height: 25px;
            line-height: 25px;
            position: absolute;
            bottom: 10px;
            right: 5%;
            span{
              padding: 5px;
              font-size: 13px;
              background: #F7C376;
              -webkit-border-radius: 50%;
              -moz-border-radius: 50%;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div  class="comment">
    <ul v-if="data && data.constructor==Array && data.length>0">
      <li class="comment-list" v-for="(item,index) in data">
        <div class="user-icon">
          <span v-if="item.user_pic_url"><img :src="item.user_pic_url"/></span>
          <span v-else><img src="../../../assets/anonymity.png"/></span>
        </div>
        <div class="user-comment">
          <el-row class="user-info">
            <el-col class="user-name" :span="16">{{item.user_name}}</el-col>
            <el-col class="comment-time" :span="8">{{item.comment_time}}</el-col>
          </el-row>
          <el-row class="user-score">
            <span class="pinFen">评分</span>
            <Star :getScore="item.order_comment_score"></Star>
          </el-row>
          <p>{{item.comment}}</p>
          <div v-show="item.comment_pics && item.comment_pics.length>0" class="comment-pic">
            <span v-for="pic in item.comment_pics" :key="pic.url">
              <img :src="pic.url"/>
            </span>
          </div>
        </div>
      </li>
    </ul>
    <ul v-else-if="data && data.constructor==Object && data.comments.length>0">
      <li v-for="item in data.comments"></li>
    </ul>
    <div v-else class="nothing">暂无评论</div>
  </div>
</template>

<script>
  import Star from '../../common/Star'
  export default {
    name: "Comments",
    components:{
      Star
    },
    props:['data'],
    data(){
      return {

      }
    },
  }
</script>

<style scoped lang="less">
  .comment{
    .comment-list{
      padding: 10px 0;
      text-align: left;
      display: flex;
      align-items: start;
      margin: 15px 0;
      .user-icon, .user-comment{
        display: inline-block;
      }
      .user-icon{
        flex: 0 60px;
        span {
          width: 50px;
          height: 50px;
          display: block;
          line-height: 50px;
          text-align: center;
          img{
            width: 50px;
            height: 50px;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
          }
        }
      }
      .user-comment{
        flex: 1;
        font-size: 14px;
        .user-info{
          .user-name{
            font-size: 14px;
            color: #909399;
          }
          .comment-time{
            text-align: right;
            color: #ccc;
            font-size: 13px;
          }
        }
        .user-score{
          display: flex;
          justify-content: start;
          align-items: center;
          margin: 10px 0;
          .pinFen{
            margin-right: 5px;
          }
        }
        p{
          line-height: 20px;
          font-size: 13px;
          color: #606266;
        }
        .comment-pic{
          margin-top: 5px;
          span{
            display: inline-block;
            margin-bottom: 2px;
            img{
              width: 85px;
              height: 85px;
            }
          }
        }
      }
    }
  }
  .nothing{
    text-align: center;
    font-size: 15px;
    color: #ccc;
    margin: 20px auto;
  }
</style>

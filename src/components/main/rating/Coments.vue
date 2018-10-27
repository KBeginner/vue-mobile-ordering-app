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
            <el-col class="user-name" :span="12">{{item.user_name}}</el-col>
            <el-col class="comment-time" :span="12">{{formatDate(item.comment_time)}}</el-col>
          </el-row>
          <el-row class="user-score">
            <span class="pinFen">评分</span>
            <Star :getScore="item.order_comment_score"></Star>
          </el-row>
          <p>{{item.comment}}</p>
          <div v-show="item.comment_pics && item.comment_pics.length>0" class="comment-pic">
            <span v-for="pic in item.comment_pics" :key="pic.url">
              <img @click="showBigImg(pic.url)" :src="pic.url"/>
            </span>
          </div>
        </div>
      </li>
    </ul>
    <ul v-else-if="data && data.constructor==Object && data.comments.length>0">
      <li v-for="item in data.comments"></li>
    </ul>
    <div v-else class="nothing">暂无评论</div>
    <!--<BigImg v-show="bigImg" :imgSrc="imgSrc" @closed="closeBigImg"></BigImg>-->
  </div>
</template>

<script>
  import Star from '../../common/Star'
  import BigImg from './BigImage'
  export default {
    name: "Comments",
    components:{
      Star,
      BigImg
    },
    props:['data'],
    data(){
      return {
        bigImg:false,
        imgSrc:null
      }
    },
    methods:{
      /*将时间戳转成时间 YYYY-MM-DD hh:mm:ss*/
      formatDate(timeStamp){
        let date = new Date(timeStamp*1000);
        let Y = date.getFullYear()+'-';
        let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1)+'-';
        let D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate())+' ';
        let h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours())+':';
        let m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes())+':';
        let s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
        return Y+M+D+h+m+s
      },
      showBigImg(url){
        this.imgSrc = url;
        this.bigImg = !this.bigImg;
      },
      closeBigImg(){
        this.bigImg = !this.bigImg;
      }
    }
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
            font-size: 12px;
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
              -webkit-border-radius: 4px;
              -moz-border-radius: 4px;
              border-radius: 4px;
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

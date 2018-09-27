<template>
  <div>
    <ul v-if="data.rating.length>0" class="comment">
      <li class="comment-list" v-for="(item,index) in data.rating.comment_list">
        <div class="user-icon">
          <span v-if="item.user_icon"><img :src="item.user_icon"/></span>
          <span v-else><img src="../../../assets/panda.png"/></span>
        </div>
        <div class="user-comment">
          <el-row class="user-info">
            <el-col class="user-name" :span="16">{{item.user_name}}</el-col>
            <el-col class="comment-time" :span="8">{{item.comment_time}}</el-col>
          </el-row>
          <p>{{item.comment_content}}</p>
        </div>
      </li>
    </ul>
    <div v-else class="nothing">暂无评论</div>
  </div>
</template>

<script>
    export default {
        name: "CommentList",
      props:['data'],
      data(){
        return {

        }
      },
      mounted(){
        // console.log(this.data)
      }
    }
</script>

<style scoped lang="less">
  .comment{
    margin-top: 10px;
    border-top: 1px solid #eee;
    .comment-list{
      padding: 10px 0;
      text-align: left;
      display: flex;
      align-items: start;
      padding-bottom: 20px;
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
          margin-bottom: 10px;
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
        p{
          line-height: 20px;
          font-size: 13px;
          color: #606266;
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

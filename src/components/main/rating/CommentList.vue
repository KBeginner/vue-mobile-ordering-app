<template>
  <ul v-if="data.rating" class="comment">
    <li class="comment-list" v-for="(item,index) in data.rating.comment_list">
      <el-row>
        <el-col :span="5">
          <span><img :src="item.user_icon"/></span>
          <span>{{item.user_name}}</span>
        </el-col>
        <el-col :span="19">
          {{item.comment_content}}
        </el-col>
      </el-row>
    </li>
  </ul>
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
        console.log(this.data)
      }
    }
</script>

<style scoped lang="less">
  .comment{
    .comment-list{
      span {
        width: 50px;
        height: 50px;
        display: block;
        line-height: 50px;
        text-align: center;
        img{
          width: 50px;
          height: auto;
          border-radius: 4px;
        }
      }
    }
  }
</style>

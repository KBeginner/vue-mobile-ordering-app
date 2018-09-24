<template>
  <ul v-if="foodDetail.rating">
    <li class="comment-title">
      <el-row>
        <el-col :span="18">
          <span>{{foodDetail.rating.title}}</span>
          (
          <span>{{foodDetail.rating.like_ratio_desc}}</span>
          <span class="praise-rate">{{foodDetail.rating.like_ratio}}</span>
          )
        </el-col>
        <el-col :span="5">{{foodDetail.rating.snd_title}}</el-col>
        <el-col :span="1"></el-col>
      </el-row>
    </li>
    <!--<li class="comment-list" v-for="(item,index) in foodDetail.rating.comment_list">
      <el-row>
        <el-col :span="4">
          <span><img :src="item.user_icon"/></span>
          <span>{{item.user_name}}</span>
        </el-col>
        <el-col :span="20">
          {{item.comment_content}}
        </el-col>
      </el-row>
    </li>-->
</template>

<script>
    export default {
        name: "CommentList",
      props:['data'],
      data(){
        return {

        }
      }
    }
</script>

<style scoped>

</style>

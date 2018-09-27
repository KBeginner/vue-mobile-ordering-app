<template>
  <div class="rating">
    <el-row class="rating-score">
      <el-col :span="16" class="seller-score">
        <el-row>
          <el-col :span="8">
            <div>4.7</div>
            <div>商家评分</div>
          </el-col>
          <el-col class="score-star" :span="16">star</el-col>
        </el-row>
      </el-col>
      <el-col :span="8" class="delivery-score">delivery</el-col>
    </el-row>
    <div class="split_"></div>
    <div class="rating-comment"></div>
  </div>
</template>

<script>
    export default {
        name: "Rating"
    }
</script>

<style scoped lang="less">
  .rating{
    /*width: 100%;*/
    height: auto;
    padding: 15px;
    .seller-score{
      margin: 10px 0;
      .score-star{
        text-align: left;
      }
    }
    .delivery-score{
      height: 40px;
      line-height: 40px;
      margin: 10px 0;
      border-left: 2px solid #A9A5A5;
    }
  }
</style>

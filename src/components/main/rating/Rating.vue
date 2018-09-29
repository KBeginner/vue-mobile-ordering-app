<template>
  <div class="rating">
    <el-row class="rating-score" type="flex" align="middle">
      <el-col :span="19" class="seller-rating">
        <div class="seller-score">
          <h1 class="comment-score">{{ratingsData.comment_score}}</h1>
          <div>商家评分</div>
        </div>
        <div class="score-star">
          <div class="rating-score-star">
            <span class="score-name">口味</span>
            <div class="start"><Star :getScore="ratingsData.quality_score"></Star></div>
          </div>
          <div class="rating-score-star">
            <span class="score-name">包装</span>
            <div class="start"><Star :getScore="ratingsData.pack_score"></Star></div>
          </div>
        </div>
      </el-col>
      <el-col :span="5" class="delivery-score">
        <h1 class="comment-score">{{ratingsData.delivery_score}}</h1>
        <div>配送评分</div>
      </el-col>
    </el-row>
    <div class="split_"></div>
    <div class="rating-comment"></div>
  </div>
</template>

<script>
  import Star from '../../header/Star'
    export default {
        name: "Rating",
      components:{
          Star
      },
      data(){
        return {

        }
      },
      computed:{
        ratingsData(){
          return this.$store.getters.getRating
        }
      },
      mounted(){
          // console.log(this.ratingsData)
      }
    }
</script>

<style scoped lang="less">
  .rating{
    height: auto;
    padding:10px 0;
    font-size: 13px;
    color: #606266;
    .rating-score{
      padding: 0 10px;
      margin-bottom: 10px;
      .seller-rating{
        margin: 10px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .seller-score{
          flex: 0 70px;
          line-height: 30px;
          .comment-score{
            color: #FCAD03;
            font-size: 18px;
            font-weight: bold;
          }
        }
        .score-star{
          flex: 1;
          text-align: left;
          margin-bottom: 2px;
          .rating-score-star{
            display: flex;
            align-items: center;
            justify-content: start;
            .score-name{
              flex: 0 30px;
              margin: 0 2px;
              display: inline-block;
            }
            .start{
              flex: 1;
              display: inline-block;
              .score{
                justify-content: start;
              }
            }
          }
        }
      }
      .delivery-score{
        margin: 10px 0;
        line-height: 30px;
        border-left: 2px solid #ccc;
        .comment-score{
          color: #FCAD03;
          font-size: 18px;
          font-weight: bold;
        }
      }
    }
    .split_{
      height: 10px;
      background: #eee;
    }
    .rating-comment{
      padding: 0 10px;
    }
  }
</style>

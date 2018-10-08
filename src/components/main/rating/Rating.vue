<template>
  <div class="rating" ref="rating">
    <div class="rating-content">
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
      <div class="rating-comment">
        <div class="comment-type">
          <el-radio-group v-model="selectType" @change="handleClick">
            <el-radio-button
              v-for="(type,index) in ratingsData.tab"
              :label="type.comment_score_type"
              :key="type.comment_score_type">
              {{type.comment_score_title}}
            </el-radio-button>
          </el-radio-group>
        </div>
        <div class="label-item">
        <span v-for="(item,index) in ratingsData.labels" :key="index">
          {{item.content}}{{item.label_count}}
        </span>
        </div>
        <div class="comments">
          <Comment :data="setComments"></Comment>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const ALL = 0;
  const PICTURE = 5;
  const DP = 21;
  import Star from '../../common/Star'
  import Comment from './Coments'
  import BS from 'better-scroll'
    export default {
        name: "Rating",
      components:{
          Star,
        Comment
      },
      data(){
        return {
          selectType:ALL
        }
      },
      computed:{
        ratingsData(){
          return this.$store.getters.getRating
        },
        setComments(){
          if (this.selectType==ALL){
            return this.ratingsData.comments;
          }
          else if(this.selectType==PICTURE){
            return this.ratingsData.comments.filter((comment)=>{
              return comment.comment_pics.length>0
            })
          }
          else{
            return this.ratingsData.comments_dp
          }
        }
      },
      methods:{
        initScroll(){
          this.$nextTick( ()=>{
            if(!this.BScroll){
              this.BScroll = new BS(this.$refs.rating,{
                click:true,
              });
            }else{
              this.BScroll.refresh();
            }
          });
        },
        handleClick(tab){
          this.selectType = tab
        },
      },
      mounted(){
        this.initScroll();
      },
    }
</script>

<style scoped lang="less">
  .rating{
    width: 100vw;
    height: 1000px;
    padding:10px 0;
    font-size: 13px;
    color: #606266;
    overflow: hidden;
    .rating-content{
      .rating-score{
        padding: 0 15px;
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
              font-size: 20px;
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
            font-size: 20px;
          }
        }
      }
      .split_{
        height: 10px;
        background: #eee;
      }
      .rating-comment{
        padding: 0 15px;
        .comment-type{
          margin: 10px 0;
          padding-top: 10px;
        }
        .label-item{
          text-align: left;
          span{
            display: inline-block;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            background-color: #eee;
            padding: 6px 8px;
            margin: 5px;
            font-size:12px;
            color: #909399;
          }
        }
        .comments{
          margin: 10px 0;
        }
      }
    }
  }
</style>

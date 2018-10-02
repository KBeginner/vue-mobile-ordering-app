<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  body{
    overflow: hidden;
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #606266;
      .top-wrapper{
        .el-col{
          .el-input__inner{
            -webkit-border-radius: 20px;
            -moz-border-radius: 20px;
            border-radius: 20px;
            background: #E4E7ED;
            height: 30px;
            line-height: 30px;
            color: #606266;
          }
        }
      }
      .app-header{
        .app-nav{
          .el-menu-item{
            height: 39px;
            line-height: 39px;
            padding: 0 10px;
          }
        }
      }
      .edui-editor{
        .edui-default.edui-toolbar{
          text-align: left !important;
        }
      }
      .rating{
        .rating-comment{
          .comment-type{
            .el-radio-group .el-radio-button span.el-radio-button__inner{
              width: 30vw;
              transition: all .2s;
            }
            .el-radio-button__orig-radio:checked+.el-radio-button__inner{
              background-color:#F8C304;
              border-color: #F8C304;
              -webkit-box-shadow: -1px 0 0 0 #F8C304;
              box-shadow: -1px 0 0 0 #F8C304;
            }
          }
          .comments{
            .comment-list{
              .user-score{
                .score .star-item{
                  width: 10px;
                  height: 10px;
                }
                .grade{
                  display: none;
                }
              }
            }
          }
        }
      }

    }
  }
</style>

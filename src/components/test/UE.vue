<template>
  <div>
    <script id="editor" type="text/plain"></script>
  </div>
</template>

<script>
    export default {
        name: "UE",
      props:{
        defaultMsg:{
          type:String
        },
        config:{
          type:Object
        }
      },
      data(){
        return{
          editor:null
        }
      },
      mounted(){
        const _this = this;
        this.editor = UE.getEditor('editor',this.config);     //初始化UE
        this.editor.addListener('ready',function () {
          _this.editor.setContent(_this.defaultMsg)     //确保UE加载完后放入内容
        });
      },
      methods:{
        getUEContent(){     //获取内容方法
          return this.editor.getContent();
        },
        destroyed(){
          this.editor.destroyed()
        }
      }
    }
</script>

<style scoped>

</style>

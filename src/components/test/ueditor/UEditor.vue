<template>
  <div>
    <script id="editor" type="text/plain" ></script>
  </div>
</template>

<script>
  import '../../../../static/ueditor/ueditor.config.js'
  import '../../../../static/ueditor/ueditor.all.js'
  import '../../../../static/ueditor/lang/zh-cn/zh-cn.js'

  export default {
    name: "UEditor",
    props: {
      id: {
          type: String
      },
      config: {
          type: Object
      }
    },
    data() {
      return {
        editor: null
      }
    },
    mounted() {
      //初始化UE
      const _this = this;
      this.editor = UE.delEditor("editor");
      this.editor = UE.getEditor('editor',this.config);
      this.setContent()+23
    },
    destoryed() {
      this.editor.destory();
    },
    methods:{
      setContent(){
        this.editor.ready(function(){
          this.editor.setContent('<p>hello!</p>');
        });
      },
      getUEContent: function(){
       return this.editor.getContent();
      },
      getContentTxt: function(){
        return this.editor.getContentTxt();
      },
    }
  }
</script>

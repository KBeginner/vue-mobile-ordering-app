<template>
  <div>
    <u-editor v-model="msg" :config="UEConfig" @ready="ready"></u-editor>
  </div>
</template>

<script>
  import UEditor from 'vue-ueditor-wrap'
    export default {
        name: "ueditor",
      components:{
        UEditor
      },
      data(){
          return{
            msg: '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',
            UEConfig:{
              initialFrameHeight:400,
              initialFrameWidth:'100%'
            }
          }
      },
      methods:{
        ready(editorInstance){
          console.log(`编辑器实例${editorInstance.key}`,editorInstance)
        }
      }
    }
</script>

<style scoped lang="less">
  .edui-editor{
    .edui-default.edui-toolbar{
      text-align: left !important;
    }
  }

</style>

<template>
  <Editor :init="init" v-model="tinymceHtml"></Editor>
</template>

<script>
  /*基本配置*/
  import tinymce from 'tinymce/tinymce'
  import Editor from '@tinymce/tinymce-vue'     //引入tinymce组件
  import 'tinymce/themes/modern/theme'
  import 'tinymce/skins/lightgray/skin.min.css'
  /*引入插件*/
  import 'tinymce/plugins/table'
  import 'tinymce/plugins/link'
  import 'tinymce/plugins/help'

    export default {
        name: "Test",
      components:{
        Editor
      },
      data() {
        return {
          init: {
            height: 300,   //设置高
            // width: 800,     //设置宽
            language_url:'/static/tinymce/zh_CN.js',    //引入语言包
            plugins:'table link help',     //声明插件
            toolbar:      //自定义顶部工具栏
              'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
          },
          tinymceHtml:''
        }
      },
    }
</script>

<style scoped>

</style>

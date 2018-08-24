<template>
  <div>
    <quill-editor ref="myTextEditor"
                   v-model="content"
                   :options = "editorOption"
                   @blur="onEditorBlur($event)"
                   @focus="onEditorFocus($event)"
                   @ready="onEditorReady($event)"
                   @change="onEditorChange($event)">
  </quill-editor>
    <p>{{content}}</p>
  </div>
</template>

<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import { quillEditor } from 'vue-quill-editor'
    export default {
        name: "Test",
      components:{
        quillEditor
      },
      data() {
        return {
          content: '<h2>I am Example</h2>',
          editorOption: {
            // something config
          }
        }
      },
      methods:{
        onEditorBlur(editor) {
          console.log('editor blur!', editor)
        },
        onEditorFocus(editor) {
          console.log('editor focus!', editor)
        },
        onEditorReady(editor) {
          console.log('editor ready!', editor)
        },
        onEditorChange({ editor, html, text }) {
          // console.log('editor change!', editor, html, text)
          this.content = html
        }
      },
      computed:{
        editor() {
          return this.$refs.myTextEditor.quillEditor
        }
      },
      mounted(){
        console.log('this is my editor', this.editor)
      }
    }
</script>

<style scoped>

</style>

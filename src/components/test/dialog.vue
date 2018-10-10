<template>
  <div class="overlay" v-show="isactive">
    <div class="con">
      <h2 class="title">新增 | 修改</h2>
      <div class="content">
        <table>
          <tr>
            <td>用户名</td>
            <td><input type="text" v-model="modifylist.username"></td>
          </tr>
          <tr>
            <td>邮箱</td>
            <td><input type="text" v-model="modifylist.email"></td>
          </tr>
          <tr>
            <td>性别</td>
            <td>
              <label><input type="radio" name="sex" value="男" v-model="modifylist.sex">男</label>
              <label><input type="radio" name="sex" value="女" v-model="modifylist.sex">女</label>
            </td>
          </tr>
          <tr>
            <td>省份</td>
            <td>
              <select name="" id="" v-model="modifylist.province">
                <option value="北京市">北京市</option>
                <option value="河北省">河北省</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>爱好</td>
            <td>
              <label><input type="checkbox" v-model="modifylist.hobby" value="篮球">篮球</label>
              <label><input type="checkbox" v-model="modifylist.hobby" value="读书">读书</label>
            </td>
          </tr>
        </table>
        <p>
          <input type="button" @click="changeActive" value="取消">
          <input type="button" @click="modify" value="保存">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "dialog",
      props: ['list', 'isactive'],
      data(){
        return {
          // modifylist:{}
        }
      },
      computed: {
        modifylist() {
          return this.list;
        }
      },
      methods: {
        changeActive() {
          this.$emit('change');
        },
        modify() {
          this.$emit('modify', this.modifylist);
        }
      }
    }
</script>

<style scoped lang="less">
  .overlay{
    width:100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0 0 0 .5);
    .con{
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translateY(-50%) translateX(-50%);
      -moz-transform: translateY(-50%) translateX(-50%);
      -ms-transform: translateY(-50%) translateX(-50%);
      -o-transform: translateY(-50%) translateX(-50%);
      transform: translateY(-50%) translateX(-50%);
      background: #fff;
    }
  }
</style>

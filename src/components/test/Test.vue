<template>
  <div id="app" class="container">
    <div>
      <input type="text" placeholder="search" list="cars" class="search">
      <datalist id="cars"></datalist>
      <input type="button" value="新增" class="add">
    </div>
    <div>
      <table>
        <tbody>
        <tr>
          <th>id</th>
          <th>用户名</th>
          <th>邮箱</th>
          <th>性别</th>
          <th>省份</th>
          <th>爱好</th>
          <th>操作</th>
        </tr>
        <tr v-cloak v-for="(item, index) in slist">
          <td>{{index+1}}</td>
          <td>{{item.username}}</td>
          <td>{{item.email}}</td>
          <td>{{item.sex}}</td>
          <td>{{item.province}}</td>
          <td>{{item.hobby.join(' | ')}}</td>
          <td>
            <a href="javascript:;" @click="showOverlay(index)">修改</a> |
            <a href="javascript:;" @click="del(index)">删除</a>
          </td>
        </tr>
        <!--<tr>
          <td>1</td>
          <td>aaaaa</td>
          <td>123@qq.com</td>
          <td>男</td>
          <td>北京市</td>
          <td>篮球 | 读书 | 编程</td>
          <td>
            <a href="javascript:;">修改</a> | <a href="javascript:;">删除</a>
          </td>
        </tr>-->
        </tbody>
      </table>
    </div>
    <div class="overlay" style="display: none;">
      <div class="con">
        <h2 class="title">新增 | 修改</h2>
        <div class="content">
          <table>
            <tr>
              <td>用户名</td>
              <td><input type="text"></td>
            </tr>
            <tr>
              <td>邮箱</td>
              <td><input type="text"></td></tr> <tr><td>性别</td> <td><label><input type="radio" name="sex" value="男">男</label> <label><input type="radio" name="sex" value="女">女</label> <label><input type="radio" name="sex" value="未知">未知</label></td></tr> <tr><td>省份</td>
            <td>
              <select name="" id="">
                <option value="北京市">北京市</option>
                <option value="河北省">河北省</option>
                <option value="河南省">河南省</option>
                <option value="重庆市">重庆市</option>
                <option value="广东省">广东省</option>
                <option value="辽宁省">辽宁省</option>
              </select>
            </td>
          </tr>
            <tr>
              <td>爱好</td>
              <td><label><input type="checkbox" value="篮球">篮球</label> <label><input type="checkbox" value="读书">读书</label> <label><input type="checkbox" value="插画">插画</label> <label><input type="checkbox" value="编程">编程</label> <label><input type="checkbox" value="弹琴">弹琴</label></td></tr>
          </table>
          <p>
            <input type="button" value="取消">
            <input type="button" value="保存">
          </p>
        </div>
      </div>
    </div>
    <Dialog :isactive="isActive"></Dialog>
  </div>
</template>

<script>
  import Dialog from './dialog'
  export default {
    name: "Test",
    components:{
      Dialog
    },
    data(){
      return{
        isActive: false,
        selected: -1,
        selectedlist: {},
        slist: [],
        searchlist: [],
        list: [
          {
            username: 'aaaaa',
            email: '123@qq.com',
            sex: '男',
            province: '北京市',
            hobby: ['篮球', '读书', '编程']
          },
          {
            username: 'bbbbb',
            email: 'bbbbbbb@163.com',
            sex: '女',
            province: '河北省',
            hobby: ['弹琴', '读书', '插画']
          },
        ]
      }
    },
    created() {
      console.log(Date.now());
      this.setSlist(this.list);
    },
    methods: {
      // 修改数据
      showOverlay(index) {
        this.selected = index;
        this.selectedlist = this.list[index];
        this.changeOverlay();
      },
      // 点击保存按钮
      modify(arr) {
        if (this.selected > -1) {
          Vue.set(this.list, this.selected, arr);
        } else {
          this.list.push(arr);
        }
        this.setSlist(this.list);
        this.changeOverlay();
      },
      add: function () {
        this.selectedlist = {
          username: '',
          email: '',
          sex: '男',
          province: '北京市',
          hobby: []
        };
        this.isActive = true;
      },
      // delete list in index location
      del(index) {
        this.list.splice(index, 1);
        this.setSlist(this.list);
      },
      changeOverlay() {
        this.isActive = !this.isActive;
      },
      // 获取需要渲染到页面中的数据
      setSlist(arr) {
        this.slist = JSON.parse(JSON.stringify(arr));
      },
      // 搜索
      search(e) {
        var v = e.target.value,
          self = this;
        self.searchlist = [];
        if (v) {
          var ss = [];
          // 过滤需要的数据
          this.list.forEach(function (item) {
            if (item.username.indexOf(v) > -1) {
              if (self.searchlist.indexOf(item.username) == -1) {
                self.searchlist.push(item.username);
              }
              ss.push(item);
            } else if (item.email.indexOf(v) > -1) {
              if (self.searchlist.indexOf(item.email) == -1) {
                self.searchlist.push(item.email);
              }
              ss.push(item);
            }
          });
          this.setSlist(ss); // 将过滤后的数据给了slist
        } else {
          // 没有搜索内容，则展示全部数据
          this.setSlist(this.list);
        }
      }
    },
    watch: {
    }
  }
</script>

<style scoped>

</style>

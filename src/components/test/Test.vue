<template>
  <el-select v-model="value7" placeholder="请选择">
    <el-option-group
      v-for="group in options3"
      :key="group.label"
      :label="group.label">
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-option-group>
  </el-select>
</template>

<script>
    export default {
        name: "Test",
      data() {
        return {
          options3: [{
            label: '热门城市',
            options: [{
              value: 'Shanghai',
              label: '上海'
            }, /*{
              // value: 'Beijing',
              label: '北京',
              options:[{
                value:'ChaoYang',
                label:'朝阳',
              },{
                value:'HaiDian',
                label:'海淀'
              }]
            }*/]
          }, {
            label: '城市名',
            options: [{
              value: 'Chengdu',
              label: '成都'
            }]
          }],
          value7: ''
        };
      },
      methods: {
      },
      mounted() {
      }
    }
</script>

<style scoped>

</style>

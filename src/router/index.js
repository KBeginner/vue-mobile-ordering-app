import Vue from 'vue'
import Router from 'vue-router'
import SetData from '@/components/setData'
import GetData from '@/components/getData'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'setData',
      component: SetData
    },
    {
      path:'/getData/:data',
      name:'getData',
      component:GetData
    }
  ],
  mode:'history'
})

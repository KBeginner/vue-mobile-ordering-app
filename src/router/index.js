import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Goods from '../components/main/goods/Goods'
import Rating from '../components/main/rating/Rating'
import Seller from '../components/main/seller/Seller'

import Test from '../components/test/Editor'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      component:Home,
      children:[
        {
          path:'/',
          redirect:'/goods'
        },
        {
          path:'/goods',
          name:'goodsLink',
          component:Goods
        },
        {
          path:'/rating',
          name:'ratingLink',
          component:Rating
        },
        {
          path:'/seller',
          name:'sellerLink',
          component:Seller
        }
      ]
    },
    {
      path:'/test',
      component:Test
    }
  ],
  mode:'history'
})

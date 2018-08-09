import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Goods from '../components/main/Goods'
import Rating from '../components/main/Rating'
import Seller from '../components/main/Seller'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name:'homeLink',
      component:Home,
      children:[
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
    }
  ],
  mode:'history'
})

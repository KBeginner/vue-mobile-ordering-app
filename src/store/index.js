import Vue from 'vue'
import Vuex from 'vuex'

import header from './module/header'
import goods from './module/goods/goods'
import rating from './module/rating'
import seller from './module/seller'
import container from './module/goods/container'
import order from './module/goods/order'
import foodDetail from './module/goods/foodDetail'

Vue.use(Vuex);
export const store = new Vuex.Store({
  modules:{
    header,
    goods,
    rating,
    seller,
    container,
    order,
    foodDetail
  }
});

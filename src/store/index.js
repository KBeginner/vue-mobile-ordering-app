import Vue from 'vue'
import Vuex from 'vuex'

import header from './module/header'
import goods from './module/goods'
import rating from './module/rating'
import seller from './module/seller'
import container from './module/container'

Vue.use(Vuex);
export const store = new Vuex.Store({
  modules:{
    header,
    goods,
    rating,
    seller,
    container
  }
});

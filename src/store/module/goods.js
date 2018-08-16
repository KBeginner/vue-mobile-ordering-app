const state = {
  goods:[]
};
const getters = {
  getGoods(state){
    return state.goods
  }
};
const mutations = {
  setGoods(state,data){
    state.goods = data
  }
};
const actions = {

};
export default {
  state,
  getters,
  mutations,
  actions
}

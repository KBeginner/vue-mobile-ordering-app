const state = {
  orderFoods : [],
};
const getters = {
  getOrderFoods(state){
    return state.orderFoods
  }
};
const mutations = {
  setOrderFoods(state,data){
    state.orderFoods = data;
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

const state = {
  foodDetail:{}
};
const getters = {
  getDetail(state){
    return state.foodDetail
  }
};
const mutations = {
  setDetail(state,data){
    state.foodDetail = data
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

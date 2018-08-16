const state = {
  headerInfo : {}
};
const getters = {
  getHeaderInfo(state){
    return state.headerInfo
  }
};
const mutations = {
  setHeaderInfo(state,data){
    state.headerInfo = data
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

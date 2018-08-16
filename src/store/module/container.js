const state = {
  container:{}
};
const getters = {
  getContainerData(state){
    return state.container
  }
};
const mutations = {
  setContainerData(state,data){
    state.container = data
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

const state = {
  ratings:[]
};
const getters = {
  getRating(state){
    return state.ratings
  }
};
const mutations = {
  setRating(state,data){
    state.ratings = data
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

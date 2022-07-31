import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
  },
  mutations: {
    /* Set Token */
    setToken(state, token) {
      state.token = token;
    },

    /* Remove Token */
    clearToken(state) {
      state.token = "";
    },
  },
  actions: {
    /* Login */
    // login({commit, dispatch, state}, authData){
    // },
    // /* LogOut */
    // logout({commit, dispatch, state}){
    // }
  },
  getters: {},
  modules: {},
});

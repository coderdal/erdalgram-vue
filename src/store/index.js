import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    fbAPIKey: "AIzaSyC_KC73ML4xpqnBD88uhj38M0CZHV9b6D8",
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
    /* Sign Up */

    signUp({ state }, signUpData) {
      axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${state.fbAPIKey}`,
          {
            email: signUpData.email,
            password: signUpData.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          console.log(response);
        });
    },

    // /* Login */

    // login({commit}, authData){

    // },

    // /* LogOut */
    // logout({commit, dispatch, state}){
    // }
  },
  getters: {},
  modules: {},
});

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    fbAPIKey: "AIzaSyC_KC73ML4xpqnBD88uhj38M0CZHV9b6D8",
    IsErrorDuringAuth: false,
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

    /* Set Error Message */
    setErrorMessage(state, message) {
      state.IsErrorDuringAuth = message;
    },
    /* Remove Error Message */
    clearErrorMessage(state) {
      state.IsErrorDuringAuth = "";
    },
  },
  actions: {
    /* Sign Up */

    signUp({ state, commit }, signUpData) {
      axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${state.fbAPIKey}`,
          {
            ...signUpData,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          console.log(response);
          commit("setErrorMessage", "SIGNUP_SUCCESS");
          return response.data;
        })
        .catch((error) => {
          commit("setErrorMessage", error.response.data.error.message);
        });
    },

    // /* Sign In */

    signIn({ state, commit }, signInData) {
      axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${state.fbAPIKey}`,
          {
            ...signInData,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          console.log(response);
          commit("setErrorMessage", "SIGNIN_SUCCESS");
          commit("setToken", response.data.idToken);
          return response.data;
        })
        .catch((error) => {
          commit("setErrorMessage", error.response.data.error.message);
        });
    },

    // /* LogOut */
    // logout({commit, dispatch, state}){
    // }
  },
  getters: {
    getIsErrorDuringAuth(state) {
      if (state.IsErrorDuringAuth) {
        let message = "Error";

        if (state.IsErrorDuringAuth === "EMAIL_EXISTS") {
          message = "This e-mail address has already been taken.";
        } else if (
          state.IsErrorDuringAuth ===
          "WEAK_PASSWORD : Password should be at least 6 characters"
        ) {
          message = "Password should be at least 6 characters";
        } else if (state.IsErrorDuringAuth === "INVALID_EMAIL") {
          message = "Invalid email format. Please check.";
        } else if (state.IsErrorDuringAuth === "SIGNUP_SUCCESS") {
          message =
            "Sign Up Successfully. You are being redirected to the login page...";
        } else if (state.IsErrorDuringAuth === "EMAIL_NOT_FOUND") {
          message = "No account found with this email address.";
        } else if (state.IsErrorDuringAuth === "INVALID_PASSWORD") {
          message = "Invalid password.";
        } else if (state.IsErrorDuringAuth === "SIGNIN_SUCCESS") {
          message =
            "Sign In Successfully. You are being redirected to the home page...";
        }

        return message;
      } else {
        return false;
      }
    },
  },
  modules: {},
});

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router/index";

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
    initAuth({ commit }) {
      let token = localStorage.getItem("token");

      if (token) {
        commit("setToken", token);
        router.push("/");
      } else {
        router.push("/auth");
        return false;
      }
    },

    /* Sign In */

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
          localStorage.setItem("token", response.data.idToken);
          return response.data;
        })
        .catch((error) => {
          commit("setErrorMessage", error.response.data.error.message);
        });
    },

    /* Log Out */

    logout({ commit }) {
      // Remove token
      commit("clearToken");
      // Remove from localstorage
      localStorage.removeItem("token");
      // Redirect to signin
      router.push("/auth");
    },

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
  },
  getters: {
    /* Check is logged in */
    getIsAuthenticated(state) {
      return state.token !== "";
    },

    /* Get response message during api auth requests */
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

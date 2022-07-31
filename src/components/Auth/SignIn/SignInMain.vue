<template>
  <main>
    <section>
      <h2>Sign In to ErdalGram</h2>

      <form @submit.prevent="formSubmit">
        <input-box
          type="text"
          placeholder="E-Mail"
          name="email"
          id="email"
          autocomplete="off"
          :required="true"
          @inputChange="updateEmail($event)"
        />

        <input-box
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          :required="true"
          @inputChange="updatePassword($event)"
        />

        <button type="submit" :disabled="!isFormFilled">Sign In</button>
      </form>
      <h2 v-if="isErrorDuringAuth" class="error-message">
        {{ isErrorDuringAuth }}
      </h2>

      <button
        class="switch-component"
        v-if="activeComponent === 'sign-in-main'"
        @click="switchComponent"
      >
        Don't have an account? <span>Sign up</span>
      </button>
    </section>
  </main>
</template>

<script>
import inputBox from "../inputBox.vue";

export default {
  name: "signInMain",
  components: { inputBox },
  data() {
    return {
      signInData: {
        email: "",
        password: "",
      },
    };
  },
  props: {
    activeComponent: {
      type: String,
      required: true,
    },
  },
  methods: {
    formSubmit() {
      this.$store.dispatch("signIn", this.signInData);
    },

    updateEmail(e) {
      this.signInData.email = e;
    },

    updatePassword(e) {
      this.signInData.password = e;
    },

    redirectToHomePage() {
      setTimeout(() => {
        this.$store.commit("clearErrorMessage");
        this.$router.replace("/");
      }, 4000);
    },

    switchComponent() {
      this.$emit("switchComponent", "sign-up-main");
    },
  },
  computed: {
    isFormFilled() {
      let output =
        (this.signInData.email.length > 0) &
        (this.signInData.password.length > 0)
          ? true
          : false;
      return output;
    },

    isErrorDuringAuth() {
      if (
        this.$store.getters.getIsErrorDuringAuth ===
        "Sign In Successfully. You are being redirected to the home page..."
      ) {
        this.redirectToHomePage();
      }

      return this.$store.getters.getIsErrorDuringAuth;
    },
  },
};
</script>

<style scoped>
main {
  max-width: 820px;
  margin: 28px auto;
}

main section {
  border: 1px solid var(--border-color);
  background: var(--bg-color);
  border-radius: 4px;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 10px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

/* Form */

main section form {
  width: 100%;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 14px;
}

main section form button {
  cursor: pointer;
  width: 30%;
  min-width: 140px;
  margin: 0 auto;
  border-radius: 2px;
  background: var(--blue-color);
  color: var(--bg-color);
  padding: 8px 12px;
  border: none;
}

main section form button:disabled,
button[disabled] {
  cursor: default;
  opacity: 0.6;
}

.error-message {
  margin: 15px 0px;
  color: rgb(226, 13, 5);
  font-weight: 500;
  font-size: 1.1em;
}

/* Switch component buttons */

.switch-component {
  width: 220px;
  margin: 20px auto;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
}

.switch-component span {
  color: var(--blue-color);
  font-weight: 600;
  cursor: pointer;
}
</style>

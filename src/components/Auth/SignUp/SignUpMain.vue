<template>
  <main>
    <section>
      <h2>Sign Up To ErdalGram</h2>
      <form @submit.prevent="">
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

        <button type="submit" @click="formSubmit" :disabled="!isFormFilled">
          Sign Up
        </button>
      </form>
    </section>
  </main>
</template>

<script>
import inputBox from "../inputBox.vue";
export default {
  name: "signUpMain",
  components: { inputBox },
  data() {
    return {
      signUpData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    formSubmit() {
      console.log(this.signUpData);
    },
    updateEmail(e) {
      this.signUpData.email = e;
    },
    updatePassword(e) {
      this.signUpData.password = e;
    },
  },
  computed: {
    isFormFilled() {
      let output =
        (this.signUpData.email.length > 0) &
        (this.signUpData.password.length > 0)
          ? true
          : false;
      return output;
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
</style>

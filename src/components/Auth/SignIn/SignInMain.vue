<template>
  <main>
    <section>
      <h2>Sign In</h2>

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

        <button type="submit">Sign In</button>
      </form>
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
      email: "",
      password: "",
    };
  },
  methods: {
    updateEmail(e) {
      this.email = e;
    },
    updatePassword(e) {
      this.password = e;
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
</style>

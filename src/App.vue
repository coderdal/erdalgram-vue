<template>
  <main id="app">
    <app-header />

    <router-view />
  </main>
</template>

<script>
import appHeader from "@/components/Header/appHeader.vue";

export default {
  name: "App",
  components: {
    appHeader,
  },
  created() {
    this.$store.dispatch("initAuth");
  },
};
</script>

<style>
@import url("variables.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  color: var(--text-color);
  background: var(--body-bg-color);
}
</style>

<template>
  <main class="home">
    <home-contents />
    <home-side-bar />
  </main>
</template>

<script>
import HomeContents from "./homeContents.vue";
import homeSideBar from "./homeSideBar.vue";

export default {
  components: { homeSideBar, HomeContents },
  name: "homeMain",
};
</script>

<style scoped>
.home {
  max-width: 820px;
  margin: 28px auto;

  border: 1px solid red;

  display: flex;
  flex-direction: row;
  gap: 30px;
}
</style>

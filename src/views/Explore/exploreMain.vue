<template>
  <main>
    <content-list />
  </main>
</template>

<script>
import contentList from "@/components/contentList.vue";

export default {
  name: "exploreMain",
  components: {
    contentList,
  },
};
</script>

<style scoped>
main {
  box-sizing: content-box;
  padding: 0px 20px 0;
  width: calc(100% - 40px);
  margin: 0 auto 30px;
  max-width: 935px;
}
</style>

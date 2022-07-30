<template>
  <section class="contents">
    <div class="content-list">
      <home-post-card :comments="12" />
      <home-post-card />
      <home-post-card />
    </div>
  </section>
</template>

<script>
import homePostCard from "@/components/Home/Post/homePostCard.vue";

export default {
  name: "homeContents",
  components: {
    homePostCard,
  },
};
</script>

<style scoped>
.contents {
  width: 470px;
  margin-left: -9px;
}

.content-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>

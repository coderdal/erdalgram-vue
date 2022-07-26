<template>
  <section class="contents">
    <div class="content-list">
      <post-card :comments="12" />
      <post-card />
      <post-card />
    </div>
  </section>
</template>

<script>
import postCard from "@/components/Home/Post/postCard.vue";

export default {
  name: "homeContents",
  components: {
    postCard,
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

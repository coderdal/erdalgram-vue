<template>
  <section class="content-list">
    <post-card
      href="/postid"
      preview="https://i.pinimg.com/originals/43/33/a4/4333a42d1075db4bce6ea38883103edd.jpg"
      :likes="200"
      :comments="25"
    />
    <post-card
      href="/postt"
      preview="https://i.pinimg.com/originals/43/33/a4/4333a42d1075db4bce6ea38883103edd.jpg"
      :likes="124"
      :comments="2"
    />
    <post-card
      href="/postt"
      preview="https://i.pinimg.com/originals/43/33/a4/4333a42d1075db4bce6ea38883103edd.jpg"
      :likes="2134"
      :comments="213"
    />
  </section>
</template>

<script>
import postCard from "@/components/postCard.vue";

export default {
  components: { postCard },
  name: "contentList",
};
</script>

<style scoped>
.content-list {
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
</style>

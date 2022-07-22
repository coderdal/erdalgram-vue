<template>
  <figure>
    <img :src="src" :alt="alt" :width="size" :height="size" />
  </figure>
</template>

<script>
export default {
  name: "userAvatar",
  props: {
    src: {
      type: String,
      default: "/assets/images/user.jpg",
    },
    alt: {
      type: String,
      default: "User Avatar",
    },
    size: {
      type: Number,
      default: 32,
    },
  },
};
</script>

<style scoped>
figure img {
  border-radius: 50%;
}
</style>

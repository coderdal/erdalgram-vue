<template>
  <figure :class="{ bordered: isBordered }">
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
    isBordered: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
figure.bordered {
  display: inline-flex;
  padding: 2px;
  border-radius: 50%;
  background: linear-gradient(
    219deg,
    rgba(184, 63, 140, 1) 0%,
    rgba(237, 158, 90, 1) 100%
  );
}
figure.bordered img {
  border-radius: inherit;
  border: 2px solid white;
}

figure img {
  border-radius: 50%;
}
</style>

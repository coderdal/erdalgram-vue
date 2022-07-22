<template>
  <svg :color="color" :fill="color" height="16" viewBox="0 0 24 24" width="16">
    <path
      d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    ></path>
    <line
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      x1="16.511"
      x2="22"
      y1="16.511"
      y2="22"
    ></line>
  </svg>
</template>

<script>
export default {
  name: "searchIcon",
  props: {
    color: {
      type: String,
      default: "#8e8e8e",
    },
  },
};
</script>

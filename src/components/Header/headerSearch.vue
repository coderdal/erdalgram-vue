<template>
  <div class="search">
    <search-icon />
    <input type="text" placeholder="Search" v-model="inputValue" />
  </div>
</template>

<script>
import SearchIcon from "@/assets/icons/SearchIcon.vue";
export default {
  name: "headerSearch",
  components: {
    SearchIcon,
  },
  data() {
    return {
      inputValue: "",
    };
  },
};
</script>

<style scoped>
header section .search {
  height: 36px;
  width: 270px;
  min-width: 125px;
  font-weight: 400;
  position: relative;
}

header section .search svg {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  pointer-events: none;
}

header section .search input {
  padding: 0px 42px;
  height: 100%;
  width: 100%;
  font-size: 15px;
  background: var(--input-bg-color);
  border: none;
  outline: none;
  border-radius: 8px;
}

header section .search input::placeholder {
  color: var(--text-light-color);
}
</style>

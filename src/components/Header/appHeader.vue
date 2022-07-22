<template>
  <header>
    <section>
      <header-brand />

      <header-search />

      <header-navigation />
    </section>
  </header>
</template>

<script>
import HeaderBrand from "./headerBrand.vue";
import HeaderNavigation from "./headerNavigation.vue";
import HeaderSearch from "./headerSearch.vue";

export default {
  name: "appHeader",
  components: { HeaderNavigation, HeaderSearch, HeaderBrand },
};
</script>

<style>
header {
  width: 100%;
  height: 60px;
  background: var(--bg-color);
  padding: 0 160px;

  border-bottom: 1px solid var(--border-color);
}

header section {
  height: 100%;
  width: 100%;
  max-width: calc(935px + 40px);
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

header a {
  text-decoration: none;
  color: var(--text-color);
}
</style>

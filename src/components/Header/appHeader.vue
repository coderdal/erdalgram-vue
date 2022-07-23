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

  display: flex;
  justify-content: center;
}

header section {
  height: 100%;
  width: 100%;
  max-width: calc(935px + 40px);
  padding: 0 20px;
  gap: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

header a {
  text-decoration: none;
  color: var(--text-color);
}

/* Media Queries */

@media screen and (max-width: 1300px) {
  header {
    padding: 0 80px;
  }
}

@media screen and (max-width: 915px) {
  header {
    padding: 0 40px;
  }
}

@media screen and (max-width: 715px) {
  header .search {
    display: none;
  }
}

@media screen and (max-width: 500px) {
  header {
    padding: 0 18px;
  }
}
</style>

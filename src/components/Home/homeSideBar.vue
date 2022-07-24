<template>
  <aside class="sidebar">
    <section class="profileBar">
      <div class="userAvatar">
        <router-link to="/profile">
          <user-avatar :size="56" />
        </router-link>
      </div>

      <div class="profileDetails">
        <router-link to="/profile">
          <h4>erdalv1</h4>
        </router-link>
        <p>Erdal</p>
      </div>

      <div class="switch">
        <router-link to="/"> Switch </router-link>
      </div>
    </section>
    <section class="suggestionsBar">
      <p>suggestion</p>
    </section>
    <section class="navigationBar">
      <router-link to="/">About</router-link>
    </section>
  </aside>
</template>

<script>
import userAvatar from "../userAvatar.vue";
export default {
  components: { userAvatar },
  name: "homeSideBar",
};
</script>

<style scoped>
.sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.sidebar .profileBar {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.sidebar .profileBar a {
  text-decoration: none;
}

/* Profile Details */

.sidebar .profileBar .profileDetails h4 {
  color: var(--text-color);
  font-weight: 500;
}

.sidebar .profileBar .profileDetails p {
  color: var(--text-light-color);
  font-weight: 400;
}

.sidebar .profileBar .switch {
  flex: 1;
  text-align: right;
}

.sidebar .profileBar .switch a {
  color: var(--blue-color);
  font-weight: 500;
  font-size: 0.9em;
}
</style>

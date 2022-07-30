<template>
  <section class="profile-navigation">
    <nav>
      <ul>
        <li><router-link to="/profile"></router-link></li>
        <li><router-link to="/profile/saved"></router-link></li>
        <li><router-link to="/profile/tagged"></router-link></li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: "profileNavigation",
};
</script>

<style scoped>
.profile-navigation {
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
}
</style>

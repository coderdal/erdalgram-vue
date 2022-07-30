<template>
  <section class="profile-navigation">
    <nav>
      <ul>
        <li>
          <router-link to="/profile" active-class="active" exact
            ><posts-icon /> Posts</router-link
          >
        </li>
        <li>
          <router-link to="/profile/saved" active-class="active"
            ><saved-icon /> Saved</router-link
          >
        </li>
        <li>
          <router-link to="/profile/tagged" active-class="active"
            ><tagged-icon /> Tagged</router-link
          >
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
import PostsIcon from "@/assets/icons/PostsIcon.vue";
import SavedIcon from "@/assets/icons/SavedIcon.vue";
import TaggedIcon from "@/assets/icons/TaggedIcon.vue";

export default {
  components: { PostsIcon, SavedIcon, TaggedIcon },
  name: "profileNavigation",
};
</script>

<style scoped>
.profile-navigation {
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
  margin-top: 35px;
}

.profile-navigation nav {
  height: 54px;
}

.profile-navigation nav ul {
  display: flex;
  gap: 60px;
  list-style: none;
  height: 100%;
}

.profile-navigation nav ul li {
  height: 100%;
}

.profile-navigation nav ul li svg {
  width: 12px;
  height: 12px;
}

.profile-navigation nav ul li a {
  opacity: 0.65;
  text-transform: uppercase;
  color: var(--text-color);
  text-decoration: none;
  font-weight: 400;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
}

.profile-navigation nav ul li a.active {
  height: 99%;
  border-top: 1px solid var(--text-color);
  opacity: 1;
}
</style>

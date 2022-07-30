<template>
  <div>
    <profile-main />
    <ul>
      <li>
        <router-link to="/profile" active-class="active">Posts</router-link>
      </li>
      <li>
        <router-link to="/profile/saved" active-class="active"
          >Saved</router-link
        >
      </li>
      <li>
        <router-link to="/profile/tagged" active-class="active"
          >Tagged</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import profileMain from "@/components/Profile/profileMain.vue";

export default {
  components: { profileMain },
  name: "profileMainView",
};
</script>

<style></style>

<template>
  <profile-container>
    <profile-main />
    <profile-navigation />
    <router-view></router-view>
  </profile-container>
</template>

<script>
import profileMain from "@/components/Profile/profileMain.vue";
import ProfileNavigation from "@/components/Profile/profileNavigation.vue";
import ProfileContainer from "@/components/Profile/profileContainer.vue";

export default {
  components: { profileMain, ProfileNavigation, ProfileContainer },
  name: "profileMainView",
};
</script>

<style></style>

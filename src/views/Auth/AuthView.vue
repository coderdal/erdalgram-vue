<template>
  <main>
    <component
      :is="activeComponent"
      @switchComponent="switchActiveComponent($event)"
      :activeComponent="activeComponent"
    ></component>
  </main>
</template>

<script>
import SignInMain from "@/components/Auth/SignIn/SignInMain.vue";
import SignUpMain from "@/components/Auth/SignUp/SignUpMain.vue";

export default {
  name: "authView",
  components: { SignInMain, SignUpMain },
  data() {
    return {
      activeComponent: "sign-in-main",
    };
  },
  methods: {
    switchActiveComponent(e) {
      this.activeComponent = e;
    },
  },
};
</script>

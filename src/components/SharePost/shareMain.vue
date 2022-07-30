<template>
  <main>
    <section class="title">
      <h1>Create new post</h1>
    </section>
    <post-details v-if="uploadedFile.length > 1" :image="uploadedFile" />
    <upload-file @fileUpload="catchFileUpload($event)" v-else />
  </main>
</template>

<script>
import PostDetails from "./postDetails.vue";
import uploadFile from "./uploadFile.vue";

export default {
  components: { uploadFile, PostDetails },
  name: "sharePost",
  data() {
    return {
      uploadedFile: "",
    };
  },
  methods: {
    catchFileUpload(e) {
      this.uploadedFile = e;
    },
  },
};
</script>

<style scoped>
main {
  max-width: 820px;
  margin: 28px auto;
  background: var(--bg-color);
  padding: 15px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
}

/* Main Title */

main .title {
  text-align: center;
  height: 42px;
  border-bottom: 1px solid var(--border-color);
}

main .title h1 {
  font-size: 1.4em;
  font-weight: 500;
}
</style>

<template>
  <main>
    <section class="title">
      <h1>Create new post</h1>
    </section>
    <section class="drag">
      <img
        src="/assets/images/shareLogo.png"
        alt="upload image"
        @click="focusOnInput"
      />
      <input
        type="file"
        accept="image/jpeg,image/png,image/heic,image/heif"
        id="image"
        name="image"
        ref="input"
      />
      <h2>Drag photos and videos here</h2>
      <p @click="focusOnInput">Select from computer</p>
    </section>
  </main>
</template>

<script>
export default {
  name: "sharePost",
  methods: {
    focusOnInput() {
      this.$refs.input.click();
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

/* Main Drag */

main .drag {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

main .drag h2 {
  font-size: 1.6em;
  font-weight: 300;
  padding: 10px;
}

main .drag p {
  margin-top: 10px;
  margin-bottom: 10px;
  background: var(--blue-color);
  color: var(--bg-color);
  font-weight: 600;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 4px;
}

main .drag input {
  opacity: 0;
}
</style>

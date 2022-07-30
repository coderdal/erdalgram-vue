<template>
  <section class="drag">
    <img
      src="/assets/images/shareLogo.png"
      alt="upload image"
      @click="focusOnInput"
    />
    <form>
      <input
        type="file"
        accept="image/jpeg,image/png"
        id="image"
        name="image"
        ref="input"
        @change="uploadImage($event)"
      />
    </form>
    <h2>Drag photos and videos here</h2>
    <p @click="focusOnInput">Select from computer</p>
    <h4 class="error-message" v-if="formatError">
      Please use valid file formats. Photos only.
    </h4>
  </section>
</template>

<script>
export default {
  name: "uploadFile",
  data() {
    return {
      formatError: false,
    };
  },
  methods: {
    focusOnInput() {
      this.$refs.input.click();
    },
    uploadImage(element) {
      var file = element.target.files[0];
      if (file.type === "image/png" || file.type === "image/jpeg") {
        var reader = new FileReader();
        reader.onloadend = () => {
          this.formatError = false;
          this.$emit("fileUpload", reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        this.formatError = true;
      }
    },
  },
};
</script>

<style scoped>
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

main .drag img {
  cursor: pointer;
}

main .drag input {
  opacity: 0;
}

main .drag .error-message {
  margin-top: 8px;
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 1.1em;
  color: rgb(202, 63, 63);
}
</style>

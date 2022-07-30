<template>
  <section class="post-details">
    <div class="image-preview">
      <h3>Image Preview</h3>
      <img :src="image" alt="Image Preview" />
    </div>
    <div class="post-settings">
      <h3 class="header">Post Details</h3>
      <form>
        <textarea
          name="description"
          id="description"
          placeholder="Post Description"
          v-model="postDescription"
          maxlength="400"
        ></textarea>
        <div class="button">
          <button type="submit" :disabled="postDescription.length < 1">
            Share
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "postDetails",
  data() {
    return {
      postDescription: "",
    };
  },
  props: {
    image: {
      type: String,
    },
  },
};
</script>

<style scoped>
main .post-details {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

/* Image Preview */

main .post-details .image-preview {
  width: 50%;
  height: 100%;
  overflow: hidden;
  border-right: 1px solid var(--border-color);
  text-align: center;
}

main .post-details .image-preview h3 {
  height: 40px;
  font-weight: 500;
  border-bottom: 1px solid var(--border-color);
}

main .post-details .image-preview img {
  padding: 10px;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
}

/* Post Settings */

main .post-details .post-settings {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
}

main .post-details .post-settings .header {
  height: 40px;
  font-weight: 500;
  border-bottom: 1px solid var(--border-color);
}

main .post-details .post-settings form {
  padding: 10px;
  height: 70%;
}

main .post-details .post-settings form textarea {
  font-size: 1.1em;
  font-weight: 400;
  font-family: inherit;
  width: 90%;
  height: 100%;
  resize: none;
  padding: 4px 10px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
}

main .post-details .post-settings form textarea:focus {
  outline: none;
}

main .post-details .post-settings form .button {
  width: 100%;
  text-align: right;
}

main .post-details .post-settings form .button button {
  margin-right: 20px;
  margin-top: 10px;
  background: var(--blue-color);
  color: var(--bg-color);
  padding: 6px 18px;
  border: 1px solid var(--border-color);
  outline: none;
  border-radius: 4px;
  text-align: right;
  cursor: pointer;
}

main .post-details .post-settings form .button button:disabled,
button[disabled] {
  cursor: default;
  opacity: 0.7;
}
</style>

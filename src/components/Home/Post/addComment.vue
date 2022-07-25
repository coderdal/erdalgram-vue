<template>
  <div class="add-comment">
    <div class="comment">
      <div class="emoji">
        <emoji-icon />
      </div>
      <div class="input">
        <input type="text" placeholder="Add a comment..." v-model="input" />
      </div>
      <div class="add">
        <button :disabled="input.length <= 0">Post</button>
      </div>
    </div>
  </div>
</template>

<script>
import EmojiIcon from "@/assets/icons/EmojiIcon.vue";

export default {
  name: "addComment",
  data() {
    return {
      input: "",
    };
  },
  components: {
    EmojiIcon,
  },
};
</script>

<style scoped>
.content-list .post .post-footer .add-comment {
  border-top: 1px solid var(--border-color);
  height: 50px;
}

.content-list .post .post-footer .add-comment .comment {
  padding: 12px 15px;
  height: 100%;
  display: flex;
  align-items: center;
}

.content-list .post .post-footer .add-comment .comment .emoji {
  cursor: pointer;
  width: 24px;
  margin-right: 12px;
}

.content-list .post .post-footer .add-comment .comment .input {
  flex: 1;
}

.content-list .post .post-footer .add-comment .comment .input input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
}

.content-list
  .post
  .post-footer
  .add-comment
  .comment
  .input
  input::placeholder {
  color: var(--text-light-color);
}

.content-list .post .post-footer .add-comment .comment .add {
  width: 26px;
}

.content-list .post .post-footer .add-comment .comment .add button {
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--blue-color);
  font-weight: 600;
}

.content-list .post .post-footer .add-comment .comment .add button:disabled,
button[disabled] {
  opacity: 0.6;
  cursor: default;
  font-weight: 600;
}
</style>

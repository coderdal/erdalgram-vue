<template>
  <div class="post-card">
    <div class="on-hover">
      <div class="actions">
        <div class="action"><filled-heart-icon /> {{ likes }}</div>

        <div class="action"><filled-comment-icon /> {{ comments }}</div>
      </div>
    </div>
    <router-link :to="href">
      <img :src="preview" alt="post preview" />
    </router-link>
  </div>
</template>

<script>
import FilledHeartIcon from "@/assets/icons/FilledHeartIcon.vue";
import FilledCommentIcon from "@/assets/icons/FilledCommentIcon.vue";

export default {
  components: { FilledHeartIcon, FilledCommentIcon },
  name: "postCard",
  props: {
    href: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    comments: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.post-card {
  width: 290px;
  height: 290px;
  position: relative;
}

.post-card a {
  width: 100%;
  height: 100%;
}

.post-card a img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.post-card .on-hover {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #13131360;
  opacity: 0;
  transition: 300ms opacity ease-out;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.post-card .on-hover .actions {
  position: absolute;
  display: flex;
  gap: 24px;
  opacity: 1;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.post-card .on-hover .actions .action {
  display: flex;
  align-items: center;
  height: 25px;
  font-weight: 500;
  font-size: 1.1em;
  gap: 8px;
}

.post-card .on-hover .actions .action svg {
  width: 20px;
  height: 20px;
}

.post-card .on-hover .actions .action svg path {
  fill: var(--bg-color);
}

.post-card:hover .on-hover {
  opacity: 1;
}
</style>

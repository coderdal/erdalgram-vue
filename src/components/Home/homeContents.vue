<template>
  <section class="contents">
    <div class="content-list">
      <div class="post">
        <div class="post-header">
          <router-link to="/profile">
            <user-avatar :size="32" isBordered />
          </router-link>
          <div class="post-author">
            <h4>coderdal</h4>
          </div>

          <div class="post-options">
            <three-dots-icon />
          </div>
        </div>
        <div class="post-body">
          <img
            src="https://www.emizentech.com/wp-content/themes/twentytwentyone-child/assets/images/vuejs-bg.jpg"
            alt="Post Content"
            srcset=""
          />
        </div>
        <div class="post-details"></div>
      </div>
    </div>
  </section>
</template>

<script>
import ThreeDotsIcon from "@/assets/icons/ThreeDotsIcon.vue";
import userAvatar from "../userAvatar.vue";
export default {
  components: { userAvatar, ThreeDotsIcon },
  name: "homeContents",
};
</script>

<style scoped>
.contents {
  width: 470px;
  margin-left: -9px;
}

.content-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content-list .post {
  background: var(--bg-color);
}

.content-list .post .post-body {
  width: 100%;
  height: 100%;
  max-height: 600px;
  min-height: 300px;
  overflow: hidden;
  background: #000;
}

.content-list .post .post-body img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Post Header */

.content-list .post .post-header {
  padding: 0px 12px;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 11px;
  border-radius: 8px 8px 0px 0px;
  border: 1px solid var(--border-color);
}

.content-list .post .post-header .post-author h4 {
  font-weight: 500;
  font-size: 1em;
}

.content-list .post .post-header .post-author p {
  font-size: 0.9em;
}

.content-list .post .post-header .post-options {
  flex: 1;
  text-align: right;
}

.content-list .post .post-header .post-options svg {
  cursor: pointer;
}
</style>

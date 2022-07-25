<template>
  <div class="post">
    <div class="post-header">
      <router-link :to="/profile/ + username">
        <user-avatar :size="32" isBordered />
      </router-link>
      <div class="post-author">
        <router-link :to="/profile/ + username">
          <h4>{{ username }}</h4>
        </router-link>
        <p v-if="location">{{ location }}</p>
      </div>

      <div class="post-options">
        <three-dots-icon />
      </div>
    </div>
    <div class="post-body">
      <img :src="src" alt="Post Content" srcset="" />
    </div>
    <div class="post-footer">
      <div class="post-actions">
        <div class="social-actions">
          <button>
            <like-icon />
          </button>
          <button>
            <comment-icon />
          </button>
          <button>
            <share-icon />
          </button>
        </div>
        <div class="save">
          <button>
            <save-icon />
          </button>
        </div>
      </div>
      <div class="post-details">
        <h5 class="like-count">{{ likeCount }} likes</h5>
        <div class="post-info">
          <h5>{{ username }}</h5>
          <p>
            {{ description }}
          </p>
        </div>
        <div class="show-comments" v-if="comments > 0">
          <p>View all {{ comments }} comments</p>
        </div>
        <p>{{ date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ThreeDotsIcon from "@/assets/icons/ThreeDotsIcon.vue";
import userAvatar from "../userAvatar.vue";
import LikeIcon from "@/assets/icons/LikeIcon.vue";
import CommentIcon from "@/assets/icons/CommentIcon.vue";
import ShareIcon from "@/assets/icons/ShareIcon.vue";
import SaveIcon from "@/assets/icons/SaveIcon.vue";

export default {
  name: "postCard",
  components: {
    userAvatar,
    ThreeDotsIcon,
    LikeIcon,
    CommentIcon,
    ShareIcon,
    SaveIcon,
  },
  props: {
    src: {
      type: String,
      default:
        "https://www.emizentech.com/wp-content/themes/twentytwentyone-child/assets/images/vuejs-bg.jpg",
    },
    username: {
      type: String,
      default: "coderdal",
    },
    description: {
      type: String,
      default: "Lorem ipsum dolor sit amed.",
    },
    date: {
      type: String,
      default: "20 hours ago",
    },
    likeCount: {
      type: Number,
      default: 620,
    },
    location: {
      type: String,
    },
    comments: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.content-list .post {
  background: var(--bg-color);
  margin-bottom: 46px;
}

/* Post Footer */

.content-list .post .post-footer {
  border: 1px solid var(--border-color);
  border-radius: 0px 0px 8px 8px;
  width: 100%;
  background: var(--bg-color);
}

.content-list .post .post-footer .post-actions {
  padding: 12px 15px;
  display: flex;
}

.content-list .post .post-footer .post-actions .social-actions {
  display: flex;
  gap: 16px;
}

.content-list .post .post-footer .post-actions button {
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 200ms opacity ease-in-out;
}

.content-list .post .post-footer .post-actions button:hover {
  opacity: 0.8;
}

.content-list .post .post-footer .post-actions .save {
  flex: 1;
  text-align: right;
}

.content-list .post .post-footer .post-details {
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
}

.content-list .post .post-footer .post-details h5 {
  font-size: 1em;
  color: var(--text-color);
  font-weight: 500;
  cursor: pointer;
}

.content-list .post .post-footer .post-details .post-info {
  padding-top: 5px;
}

.content-list .post .post-footer .post-details .post-info h5 {
  display: inline;
  margin-right: 4px;
  font-size: 1em;
}

.content-list .post .post-footer .post-details .post-info p {
  display: inline;
}

.content-list .post .post-footer .post-details > p {
  font-weight: 400;
  padding: 10px 0px 20px 0px;
  color: var(--text-light-color);
  text-transform: uppercase;
  font-size: 0.8em;
}

.content-list .post .post-footer .post-details .show-comments {
  font-weight: 400;
  padding: 6px 0px;
  color: var(--text-light-color);
  font-size: 0.98em;
  cursor: pointer;
}

/* Post Body */

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

.content-list .post .post-header .post-author a {
  text-decoration: none;
  color: var(--text-color);
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

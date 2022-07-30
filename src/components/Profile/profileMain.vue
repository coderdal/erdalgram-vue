<template>
  <section class="profile-main">
    <div class="profile-photo">
      <user-avatar :size="150" />
    </div>
    <div class="profile-details">
      <div class="top">
        <h2 class="username">coderdal</h2>
        <button>Log Out</button>
      </div>
      <div class="stats">
        <div class="stat"><span>0</span> posts</div>
        <div class="stat"><span>0</span> followers</div>
        <div class="stat"><span>0</span> following</div>
      </div>
      <div class="full-name">Erdal</div>
      <div class="biography">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </div>
    </div>
  </section>
</template>

<script>
import userAvatar from "../userAvatar.vue";

export default {
  components: { userAvatar },
  name: "profileMain",
};
</script>

<style scoped>
.profile-main {
  max-width: 820px;
  margin: 32px auto;
  padding: 0px 14px;

  display: flex;
  flex-direction: row;
  gap: 100px;
}

/* Profile Photo */

.profile-main .profile-photo figure {
  cursor: pointer;
}

/* Profile Details */

.profile-main .profile-details {
  display: flex;
  flex-direction: column;
  margin-top: 2px;
}

.profile-main .profile-details .top {
  display: flex;
  align-items: center;
  gap: 30px;
}

.profile-main .profile-details .top button {
  border: 1px solid var(--border-color);
  background: transparent;
  cursor: pointer;
  font-weight: 500;
  height: 30px;
  border-radius: 4px;
  padding: 2px 8px;
}

.profile-main .profile-details .top .username {
  font-size: 2em;
  font-weight: 300;
}

.profile-main .profile-details .stats {
  margin-top: 18px;
  display: flex;
  gap: 38px;
}

.profile-main .profile-details .stats .stat {
  font-size: 1.2em;
}

.profile-main .profile-details .stats .stat span {
  font-weight: 500;
  cursor: pointer;
}

.profile-main .profile-details .full-name {
  margin-top: 20px;
  font-size: 1.1em;
  font-weight: 500;
}

.profile-main .profile-details .biography {
  margin-top: 4px;
  font-size: 1.1em;
  max-width: 100%;
}
</style>

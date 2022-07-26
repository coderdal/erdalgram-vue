<template>
  <aside class="sidebar">
    <section class="profileBar">
      <div class="userAvatar">
        <router-link to="/profile">
          <user-avatar :size="56" />
        </router-link>
      </div>

      <div class="profileDetails">
        <router-link to="/profile">
          <h4>coderdal</h4>
        </router-link>
        <p>Muhammed ERDAL</p>
      </div>

      <div class="switch">
        <router-link to="/"> Switch </router-link>
      </div>
    </section>
    <section class="suggestionsBar">
      <div class="suggestionsTitle">
        <h4>Suggestions For You</h4>

        <router-link to="/">See All</router-link>
      </div>
      <div class="suggestionList">
        <!-- Suggestion -->
        <div class="suggestion">
          <div class="user-avatar">
            <router-link to="/profile">
              <user-avatar :size="34" />
            </router-link>
          </div>
          <div class="user-details">
            <router-link to="/profile">
              <h5>coderdal</h5>
            </router-link>

            <p>Followed by....</p>
          </div>
          <div class="follow-action">
            <p class="follow-button">Follow</p>
          </div>
        </div>
        <!-- Suggestion -->
        <!-- Suggestion -->
        <div class="suggestion">
          <div class="user-avatar">
            <router-link to="/profile">
              <user-avatar :size="34" />
            </router-link>
          </div>
          <div class="user-details">
            <router-link to="/profile">
              <h5>coderdal</h5>
            </router-link>

            <p>Followed by....</p>
          </div>
          <div class="follow-action">
            <p class="follow-button">Follow</p>
          </div>
        </div>
        <!-- Suggestion -->
        <!-- Suggestion -->
        <div class="suggestion">
          <div class="user-avatar">
            <router-link to="/profile">
              <user-avatar :size="34" />
            </router-link>
          </div>
          <div class="user-details">
            <router-link to="/profile">
              <h5>coderdal</h5>
            </router-link>

            <p>Followed by....</p>
          </div>
          <div class="follow-action">
            <p class="follow-button">Follow</p>
          </div>
        </div>
        <!-- Suggestion -->
        <!-- Suggestion -->
        <div class="suggestion">
          <div class="user-avatar">
            <router-link to="/profile">
              <user-avatar :size="34" />
            </router-link>
          </div>
          <div class="user-details">
            <router-link to="/profile">
              <h5>coderdal</h5>
            </router-link>

            <p>Followed by....</p>
          </div>
          <div class="follow-action">
            <p class="follow-button">Follow</p>
          </div>
        </div>
        <!-- Suggestion -->
        <!-- Suggestion -->
        <div class="suggestion">
          <div class="user-avatar">
            <router-link to="/profile">
              <user-avatar :size="34" />
            </router-link>
          </div>
          <div class="user-details">
            <router-link to="/profile">
              <h5>coderdal</h5>
            </router-link>

            <p>Followed by....</p>
          </div>
          <div class="follow-action">
            <p class="follow-button">Follow</p>
          </div>
        </div>
        <!-- Suggestion -->
      </div>
    </section>
    <section class="navigationBar">
      <nav>
        <router-link to="/">About</router-link>
        <router-link to="/">Help</router-link>
        <router-link to="/">Press</router-link>
        <router-link to="/">API</router-link>
        <router-link to="/">Jobs</router-link>
        <router-link to="/">Privacy</router-link>
        <router-link to="/">Terms</router-link>
        <router-link to="/">Locations</router-link>
        <router-link to="/">Language</router-link>
      </nav>
      <h4>&copy; 2022 ERDALGRAM FROM CODERDAL</h4>
    </section>
  </aside>
</template>

<script>
import userAvatar from "../userAvatar.vue";
export default {
  components: { userAvatar },
  name: "homeSideBar",
};
</script>

<style scoped>
.sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

/* Profile Bar */

.sidebar .profileBar {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.sidebar .profileBar a {
  text-decoration: none;
}

.sidebar .profileBar .profileDetails h4 {
  color: var(--text-color);
  font-weight: 500;
}

.sidebar .profileBar .profileDetails p {
  color: var(--text-light-color);
  font-weight: 400;
}

.sidebar .profileBar .switch {
  flex: 1;
  text-align: right;
}

.sidebar .profileBar .switch a {
  color: var(--blue-color);
  font-weight: 500;
  font-size: 0.9em;
}

/* Suggestions Bar */

.sidebar .suggestionsBar {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.sidebar .suggestionsBar .suggestionsTitle {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.sidebar .suggestionsBar .suggestionsTitle h4 {
  color: var(--text-light-color);
  font-weight: 500;
}

.sidebar .suggestionsBar .suggestionsTitle a {
  color: var(--text-color);
  font-weight: 500;
  font-size: 0.9em;
  text-decoration: none;
}

.sidebar .suggestionsBar .suggestionList {
  margin-top: 14px;
  width: 95%;

  display: flex;
  flex-direction: column;
  gap: 6px;
}

.sidebar .suggestionsBar .suggestionList .suggestion {
  display: flex;
  gap: 12px;
}

.sidebar .suggestionsBar .suggestionList .suggestion .follow-action {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.sidebar
  .suggestionsBar
  .suggestionList
  .suggestion
  .follow-action
  .follow-button {
  color: var(--blue-color);
  font-weight: 500;
  font-size: 0.9em;
}

.sidebar .suggestionsBar .suggestionList .suggestion .user-details {
  display: flex;
  flex-direction: column;
  gap: 1.5px;
}

.sidebar .suggestionsBar .suggestionList .suggestion .user-details a {
  text-decoration: none;
}

.sidebar .suggestionsBar .suggestionList .suggestion .user-details a h5 {
  font-size: 0.95em;
  font-weight: 600;
  color: var(--text-color);
}

.sidebar .suggestionsBar .suggestionList .suggestion .user-details p {
  font-size: 0.88em;
  color: var(--text-light-color);
}

/* Navigation Bar */

.sidebar .navigationBar {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
}

.sidebar .navigationBar nav {
  display: flex;
  flex-wrap: wrap;
}

.sidebar .navigationBar nav a {
  color: var(--text-light-third-color);
  text-decoration: none;
  font-weight: 400;
  font-size: 0.88em;
}

.sidebar .navigationBar nav a::after {
  content: "\00B7";
  margin: 0 0.25em 0 0.25em;
}

.sidebar .navigationBar nav a:last-child::after {
  content: "";
}

.sidebar .navigationBar nav a:hover {
  text-decoration: underline;
}

.sidebar .navigationBar h4 {
  color: var(--text-light-third-color);
  font-weight: 400;
  font-size: 0.85em;
  margin-top: 16px;
}

/* Media Queries */

@media screen and (max-width: 1000px) {
  .sidebar {
    display: none;
  }
}
</style>

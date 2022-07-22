<template>
  <nav>
    <ul class="navigation">
      <li>
        <router-link to="/" active-class="active" exact>
          <home-icon />
        </router-link>
      </li>
      <li>
        <router-link to="/direct/inbox" active-class="active" exact>
          <direct-icon />
        </router-link>
      </li>
      <li>
        <router-link to="/explore" active-class="active" exact>
          <explore-icon />
        </router-link>
      </li>
      <li>
        <router-link to="/profile" active-class="active" exact>
          <user-avatar :size="24" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import HomeIcon from "@/assets/icons/HomeIcon.vue";
import DirectIcon from "@/assets/icons/DirectIcon.vue";
import ExploreIcon from "@/assets/icons/ExploreIcon.vue";
import UserAvatar from "../userAvatar.vue";

export default {
  name: "headerNavigation",
  components: {
    HomeIcon,
    DirectIcon,
    ExploreIcon,
    UserAvatar,
  },
};
</script>

<style>
header section nav .navigation {
  list-style: none;
  display: flex;
  gap: 16px;
}

header section nav .navigation .active path {
  fill: var(--text-color);
}

header section nav .navigation .active .white {
  fill: var(--bg-color);
}

svg {
  color: var(--text-color);
}

/* Solution for explore icon */

header section nav .navigation .active svg .filled {
  display: block !important;
}

header section nav .navigation .active svg .nonactive {
  display: none !important;
}
</style>

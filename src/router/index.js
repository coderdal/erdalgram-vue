import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/Home/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  /* Explore Route */
  {
    name: "explore",
    path: "/explore",
    component: () =>
      import(
        /* webpackChunkName: "explore" */ "@/views/Explore/exploreMain.vue"
      ),
  },

  /* Direct Routes */
  {
    path: "/direct",
    component: () =>
      import(/* webpackChunkName: "direct" */ "@/views/Direct/directMain.vue"),

    children: [
      {
        name: "inbox",
        path: "inbox",
        component: () =>
          import(
            /* webpackChunkName: "directInbox" */ "@/views/Direct/directInbox.vue"
          ),
      },
    ],
  },

  /* Profile Routes */
  {
    path: "/profile",
    component: () =>
      import(
        /* webpackChunkName: "profile" */ "@/views/Profile/profileMain.vue"
      ),

    children: [
      {
        name: "profilePosts",
        path: "/",
        component: () =>
          import(
            /* webpackChunkName: "profilePosts" */ "@/views/Profile/profilePosts.vue"
          ),
      },
      {
        name: "profileSaved",
        path: "saved",
        component: () =>
          import(
            /* webpackChunkName: "profileSaved" */ "@/views/Profile/profileSaved.vue"
          ),
      },
      {
        name: "profileTagged",
        path: "tagged",
        component: () =>
          import(
            /* webpackChunkName: "profileTagged" */ "@/views/Profile/profileTagged.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

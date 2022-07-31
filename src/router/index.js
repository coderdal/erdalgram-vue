import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,

    /* Auth Guard */
    beforeEnter(to, from, next) {
      if (store.getters.getIsAuthenticated) {
        next();
      } else {
        next("/auth");
      }
    },
  },

  /* Auth Route */

  {
    name: "auth",
    path: "/auth",
    component: () =>
      import(/* webpackChunkName: "signin" */ "@/views/Auth/AuthView.vue"),

    /* Auth Guard */
    beforeEnter(to, from, next) {
      if (!store.getters.getIsAuthenticated) {
        next();
      } else {
        next("/");
      }
    },
  },

  /* Explore Route */
  {
    name: "explore",
    path: "/explore",
    component: () =>
      import(
        /* webpackChunkName: "explore" */ "@/views/Explore/exploreMain.vue"
      ),

    /* Auth Guard */
    beforeEnter(to, from, next) {
      if (store.getters.getIsAuthenticated) {
        next();
      } else {
        next("/auth");
      }
    },
  },

  /* Share Post Route */
  {
    name: "share",
    path: "/share",
    component: () =>
      import(/* webpackChunkName: "share" */ "@/views/Share/sharePost.vue"),

    /* Auth Guard */
    beforeEnter(to, from, next) {
      if (store.getters.getIsAuthenticated) {
        next();
      } else {
        next("/auth");
      }
    },
  },

  /* Direct Routes */
  {
    path: "/direct",
    component: () =>
      import(/* webpackChunkName: "direct" */ "@/views/Direct/directMain.vue"),

    /* Auth Guard */
    beforeEnter(to, from, next) {
      if (store.getters.getIsAuthenticated) {
        next();
      } else {
        next("/auth");
      }
    },

    children: [
      {
        name: "inbox",
        path: "inbox",
        component: () =>
          import(
            /* webpackChunkName: "directInbox" */ "@/views/Direct/directInbox.vue"
          ),

        /* Auth Guard */
        beforeEnter(to, from, next) {
          if (store.getters.getIsAuthenticated) {
            next();
          } else {
            next("/auth");
          }
        },
      },
    ],
  },

  /* Profile Routes */
  {
    path: "/profile",
    component: () =>
      import(
        /* webpackChunkName: "profile" */ "@/views/Profile/profileMainView.vue"
      ),

    /* Auth Guard */
    beforeEnter(to, from, next) {
      if (store.getters.getIsAuthenticated) {
        next();
      } else {
        next("/auth");
      }
    },

    children: [
      {
        name: "profilePosts",
        path: "/",
        component: () =>
          import(
            /* webpackChunkName: "profilePosts" */ "@/views/Profile/profilePosts.vue"
          ),

        /* Auth Guard */
        beforeEnter(to, from, next) {
          if (store.getters.getIsAuthenticated) {
            next();
          } else {
            next("/auth");
          }
        },
      },
      {
        name: "profileSaved",
        path: "saved",
        component: () =>
          import(
            /* webpackChunkName: "profileSaved" */ "@/views/Profile/profileSaved.vue"
          ),

        /* Auth Guard */
        beforeEnter(to, from, next) {
          if (store.getters.getIsAuthenticated) {
            next();
          } else {
            next("/auth");
          }
        },
      },
      {
        name: "profileTagged",
        path: "tagged",
        component: () =>
          import(
            /* webpackChunkName: "profileTagged" */ "@/views/Profile/profileTagged.vue"
          ),

        /* Auth Guard */
        beforeEnter(to, from, next) {
          if (store.getters.getIsAuthenticated) {
            next();
          } else {
            next("/auth");
          }
        },
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

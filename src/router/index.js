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
        next("/signin");
      }
    },
  },

  /* Sign In - Sign Up Routes */

  {
    name: "signin",
    path: "/signin",
    component: () =>
      import(/* webpackChunkName: "signin" */ "@/views/SignIn/SignInView.vue"),

    /* Auth Guard */
    beforeEnter(to, from, next) {
      if (!store.getters.getIsAuthenticated) {
        next();
      } else {
        next("/");
      }
    },
  },

  {
    name: "signup",
    path: "/signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "@/views/SignUp/SignUpView.vue"),

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
        next("/signin");
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
        next("/signin");
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
        next("/signin");
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
            next("/signin");
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
        next("/signin");
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
            next("/signin");
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
            next("/signin");
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
            next("/signin");
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

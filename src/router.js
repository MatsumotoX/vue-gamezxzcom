import Vue from "vue";
import Router from "vue-router";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import SignIn from "./views/SignIn.vue";
import SignUp from "./views/SignUp.vue";
import Dashboard from "./views/Dashboard.vue";
import Chat from "./views/Chat.vue";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/chat",
      name: "chat",
      component: Chat
    },
    {
      path: "/sign-in",
      name: "signIn",
      component: SignIn
    },
    {
      path: "/sign-up",
      name: "signUp",
      component: SignUp
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next("/sign-in");
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;

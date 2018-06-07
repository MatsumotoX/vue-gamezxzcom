import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: "",
    password: "",
    displayName: null,
    photoURL: null,
    newPassword: null,
    favoriteFood: null,
    authUser: null
  },
  mutations: {
    setUser: state => {
      state.user = firebase.auth().currentUser;
    }
  },
  getters: {
    getUser: state => {
      return state.authUser;
    }
  },
  actions: {
    setUser: context => {
      context.commit("setUser");
    }
  }
});

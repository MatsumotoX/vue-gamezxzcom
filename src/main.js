import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyCH6dlJsTPHCGIWrnLadtSo4aUq-YbsUwA",
  authDomain: "gamezxz-c2be1.firebaseapp.com",
  databaseURL: "https://gamezxz-c2be1.firebaseio.com",
  projectId: "gamezxz-c2be1",
  storageBucket: "gamezxz-c2be1.appspot.com",
  messagingSenderId: "1099416148640"
};

// Initialize Firebase
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

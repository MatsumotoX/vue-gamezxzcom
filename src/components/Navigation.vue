<template>
  <div id="nav">
    <!-- Navigation-->
    <aside class="navigation">
      <nav id="nav">
        <ul class="nav luna-nav">
          <li class="nav-category">
            Main
          </li>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/exchange">Exchange</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/chat">Chat Room</router-link>
          </li>
        </ul>
        <ul v-if="this.$store.state.authUser" class="nav luna-nav">
          <li class="nav-category">
            Client
          </li>
          <li>
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
          <li>
            <a href="" v-on:click="signOut">Sign Out</a>
          </li>
        </ul>
        <ul v-else class="nav luna-nav">
          <li class="nav-category">
            Client
          </li>
          <li>
            <router-link to="/sign-in">Sign In</router-link>
          </li>
          <li>
            <router-link to="/sign-up">Sign Up</router-link>
          </li>
          <li>
            <router-link to="/resetpassword">Forgot Password</router-link>
          </li>
        </ul>
        <ul class="nav luna-nav">
          <li class="nav-status">
            <span class="c-white">Server Status</span>
            <p>
              Server Date: 2018-06-02<br> Server Time: {{hours}}:{{minutes}}:{{seconds}} UTC
            </p>
            <p>
              Users online: 128 </p>
            <p>
              1 BCH = $1,022.97 </p>
            <p>
              <i class="pe pe-7s-signal text-success"></i> Socket Status = Connected
            </p>
          </li>
        </ul>
      </nav>
    </aside>
    <!-- End navigation-->
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export default {
  name: "Footer",
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },
  mounted() {
    this.$options.interval = setInterval(this.updateDateTime, 1000);
  },
  beforeDestroy() {
    clearInterval(this.$options.interval);
  },
  methods: {
    signOut() {
      firebase.auth().signOut();
    },
    updateDateTime() {
      let now = new Date();
      this.hours = now.getHours();
      this.minutes =
        (parseInt(now.getMinutes(), 10) >= 10 ? "" : "0") + now.getMinutes();
      this.seconds =
        (parseInt(now.getSeconds(), 10) >= 10 ? "" : "0") + now.getSeconds();
      this.hours = this.hours % 12 || 12;
    }
  }
};
</script>

<style scoped>
#nav a.router-link-exact-active {
  border-left: 6px solid #f6a821;
  padding-left: 19px;
  color: #c0c4c8;
}
.luna-nav.nav .nav-status {
  margin-top: 50px;
  padding: 10px 15px 15px 15px;
  font-size: 12px;
  background-color: #24262d;
}
</style>

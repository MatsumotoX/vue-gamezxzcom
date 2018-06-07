<template>
  <div id="footer">
    <section class="content footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-xs-6">
            <div class="title">
              ASICMINER
            </div>
            <ul class="menu">
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
                <router-link to="/support">Support</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-4 col-xs-6">
            <div class="title">
              Client
            </div>
            <ul v-if="this.$store.state.authUser" class="menu">
              <li>
                <router-link to="/dashboard">Dashboard</router-link>
              </li>
              <li>
                <a href="" v-on:click="signOut">Sign Out</a>
              </li>
            </ul>
            <ul v-else class="menu">
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
          </div>
          <div class="col-md-4 newsletter col-xs-6">
            <div class="title">
              FIND US ON
            </div>
            <ul class="menu">
              <li>
                <a target="_blank" href="">
                  <i class="fa fa-facebook"></i>
                  Facebook
                </a>
              </li>
              <li>
                <a target="_blank" href="">
                  <i class="fa fa-telegram"></i>
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="bottom">
          <ul>
            <li>2017 © ASICMINER Inc.</li>
            <li>
              <a href="/privacy" rel="nofollow" title="Privacy Policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms" rel="nofollow" title="Terms and Conditions">Terms and Conditions</a>
            </li>
            <li>
              <a href="mailto:info@asicminer.io" rel="nofollow" title="Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {
    signOut() {
      firebase.auth().signOut();
    }
  }
};
</script>

<style scoped>
.footer {
  color: #949ba2;
  background: #1d1f24;
  padding: 55px 0 35px;
}

.footer .title {
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 1px;
}

.footer .newsletter p {
  color: #bcc7df;
  margin-top: 25px;
  line-height: 20px;
}

.footer .menu {
  list-style-type: none;
  padding: 0;
  margin-top: 30px;
}

.footer .menu i {
  font-size: 23px;
  margin-right: 12px;
  width: 21px;
  position: relative;
  top: 3px;
  margin-bottom: 5px;
}

.footer .menu a {
  display: inline-block;
  margin-bottom: 9px;
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.footer .bottom {
  margin-top: 40px;
  border-top: 1px solid #3a455a;
}

.footer .bottom ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
  margin-top: 15px;
}

.footer .bottom ul a {
  position: relative;
}

.footer .bottom ul li {
  display: inline-block;
  margin: 0 11px;
}
</style>

<template>
  <div v-if="this.$store.state.authUser">

  </div>
  <div v-else>
    <div class="container-center animated slideInDown">

      <div class="view-header">
        <div class="header-icon">
          <i class="pe page-header-icon pe-7s-unlock"></i>
        </div>
        <div class="header-title">
          <h3>Login</h3>
          <small>
            Please enter your credentials to login.
          </small>
        </div>
      </div>

      <div class="panel panel-filled">
        <div class="panel-body">
          <form @submit.prevent="signIn">
            <div class="form-group">
              <label class="control-label" for="email">Email</label>
              <input id="email" type="email" v-model="email" class="form-control" placeholder="Type your email">
            </div>
            <div class="form-group">
              <label class="control-label" for="password">Password</label>
              <input id="password" type="password" v-model="password" class="form-control" placeholder="Type your password">
            </div>
            <div class="form-group">
              <label class="control-label" for="factor">2FA Code</label>
              <input id="factor" class="form-control" placeholder="(only if you enabled 2FA)" v-model="factor" type="text">
            </div>
            <div>
              <button id="signup" class="btn btn-accent">Sign In</button>
              or
              <a id="signin" class="btn btn-accent" @click="signInWithGoogle">Sign In With Google
                <i class="fa fa-google"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
import nativeToast from "native-toast";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      authUser: null
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(error =>
          nativeToast({
            message: error.message,
            position: "top",
            timeout: 3000,
            type: "error"
          })
        )
        .then(data =>
          nativeToast({
            message: "Hi " + data.user.displayName || "friend",
            position: "top",
            timeout: 3000,
            type: "success"
          })
        );
    },
    signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .catch(error =>
          nativeToast({
            message: error.message,
            position: "top",
            timeout: 3000,
            type: "error"
          })
        )
        .then(data =>
          nativeToast({
            message: "Hi " + data.user.displayName || "friend",
            position: "top",
            timeout: 3000,
            type: "success"
          })
        );
    }
  }
};
</script>

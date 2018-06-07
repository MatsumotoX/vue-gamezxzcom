<template>
  <div>
    <div class="container-center animated slideInDown">
      <div v-if="this.$store.state.authUser">
      </div>
      <div v-else>
        <div class="view-header">
          <div class="header-icon">
            <i class="pe page-header-icon pe-7s-add-user"></i>
          </div>
          <div class="header-title">
            <h3>Sign Up</h3>
            <small>
              Please enter your data to register.
            </small>
          </div>
        </div>

        <div class="panel panel-filled">
          <div class="panel-body">
            <form @submit.prevent="register">
              <div class="row">
                <div class="form-group col-lg-12">
                  <label>Email Address</label>
                  <input type="email" v-model="email" class="form-control" placeholder="Your address email to contact">
                </div>
                <div class="form-group col-lg-12">
                  <label>Password</label>
                  <input type="password" v-model="password" class="form-control" placeholder="Pick your hard to guess password">
                </div>
              </div>

              <button class="btn btn-accent">Register</button>
              or
              <a class="btn btn-accent" @click="signInWithGoogle">Sign Up With Google
                <i class="fa fa-google"></i>
              </a>

            </form>
          </div>
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
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      authUser: null
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
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

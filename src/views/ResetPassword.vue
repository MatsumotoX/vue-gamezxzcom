<template>
  <div>
    <div class="container-center animated slideInDown">

      <div class="view-header">
        <div class="header-icon">
          <i class="pe page-header-icon pe-7s-id"></i>
        </div>
        <div class="header-title">
          <h3>Reset password</h3>
          <small>
            Please enter your email to rest your password.
          </small>
        </div>
      </div>

      <div class="panel panel-filled">
        <div class="panel-body">
          <form @submit.prevent="resetPassword">
            <div class="form-group">
              <label class="control-label" for="email">Email adress</label>
              <input id="email" type="email" v-model="email" class="form-control" placeholder="Type your email">
              <span class="help-block small">Your address email to sent new password</span>
            </div>
            <div>
              <button v-if="loading" class="btn btn-accent" disabled=" ">
                <i class="fa fa-refresh fa-spin"></i>Loading
              </button>
              <button v-else class="btn btn-accent">Sent new password</button>
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
  name: "resetPassword",
  data() {
    return {
      email: "",
      loading: false
    };
  },
  methods: {
    resetPassword() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() =>
          nativeToast({
            message: "New Password sent.",
            position: "top",
            timeout: 3000,
            type: "success"
          })
        )
        .catch(error =>
          nativeToast({
            message: error.message,
            position: "top",
            timeout: 3000,
            type: "error"
          })
        );
    }
  }
};
</script>

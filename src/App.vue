<template>
  <div id="app">
    <!-- Wrapper-->
    <div class="wrapper">

      <Header></Header>

      <Navigation></Navigation>

      <!-- Main content-->
      <section class="content">
        <div class="container-fluid">

          <router-view/>

        </div>
      </section>
      <!-- End main content-->

      <Footer></Footer>

    </div>
    <!-- End wrapper-->

  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import Header from "@/components/Header.vue";
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  methods: {
    setUser: function() {
      this.$store.dispatch("setUser");
    }
  },
  created() {
    this.setUser();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.state.authUser = user;
      }
    });
  },
  components: {
    Header,
    Navigation,
    Footer
  }
};
</script>

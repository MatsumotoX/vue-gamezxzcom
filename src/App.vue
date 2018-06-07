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
import Header from "@/components/Header.vue";
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Navigation,
    Footer
  }
};
</script>

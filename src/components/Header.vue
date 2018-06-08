<template>
  <div id="header">
    <!-- Header-->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <div id="mobile-menu">
            <div class="left-nav-toggle">
              <a href="#">
                <i class="stroke-hamburgermenu"></i>
              </a>
            </div>
          </div>
          <a class="navbar-brand" href="/">
            Gamezxz
            <span>v.1.0</span>
          </a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <div class="left-nav-toggle">
            <a href="">
              <i class="stroke-hamburgermenu"></i>
            </a>
          </div>
          <ul v-if="this.$store.state.authUser" class="nav navbar-nav navbar-right">
            <li class=" profil-link">
              <router-link to="/dashboard">
                <span class="profile-address">{{this.$store.state.authUser.displayName}}</span>
                <img :src="this.$store.state.authUser.photoURL || 'https://digitalchamber.org/wp-content/uploads/2018/02/Bitcoin-icon-300x300.png'" class="img-circle" alt="">
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End header-->
  </div>
</template>

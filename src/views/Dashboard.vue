<template>
  <div class="dashboard">
    <div v-if="this.$store.state.authUser">
      <h2>Signed in as {{email}}
        <img v-if="linkedGoogle" src="https://www.gstatic.com/mobilesdk/160512_mobilesdk/auth_service_google.svg" alt="">
        <img v-if="linkedPassword" src="https://www.gstatic.com/mobilesdk/160409_mobilesdk/images/auth_service_email.svg" alt="">
      </h2>
      <img :src="authUser.photoURL" height="150">
      <p>👩‍🍳 Hi, {{authUser.displayName || 'friend'}} we know you like {{favoriteFood || 'food'}}.</p>
      <button @click="signOut">Sign out</button>
      <button v-if="!linkedGoogle" @click="linkGoogle">Link Google Account</button>
      <button v-else @click="unlinkGoogle">Unlink Google Account</button>

      <form @submit.prevent="updateProfile">
        <h2>Update Profile</h2>
        <input v-model="displayName" placeholder="Your name">
        <input v-model="photoURL" placeholder="Your photo url">
        <button>Update</button>
      </form>

      <form @submit.prevent="updateCustomDetails">
        <h2>Update Additional Details</h2>
        <input v-model="favoriteFood" placeholder="Your favorite food">
        <button>Update</button>
      </form>

      <form @submit.prevent="updateEmail">
        <h2>Update Email</h2>
        <input v-model="email" placeholder="Your email">
        <button>Update</button>
      </form>

      <form @submit.prevent="updatePassword">
        <h2>Update Password</h2>
        <input type="password" v-model="newPassword" placeholder="Your password">
        <button>Update</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      authUser: null
    };
  }
};
</script>

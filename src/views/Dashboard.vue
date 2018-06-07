<template>
  <div class="dashboard">
    <div v-if="this.$store.state.authUser">
      <h2>Signed in as {{this.$store.state.authUser.email}}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
    };
  }
};
</script>

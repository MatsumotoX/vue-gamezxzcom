<template>
  <div class="about">
    <div v-if="this.$store.state.authUser">
      <p>👩‍🍳 Hi, {{this.$store.state.authUser.displayName || 'friend'}} we know you like {{this.$store.state.favoriteFood || 'food'}}.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  }
};
</script>

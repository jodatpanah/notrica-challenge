<template>
  <div class="banner-container h-screen">
    <Navbar/>
      <div class="flex items-center justify-center w-full">
        <transition name="fade">
          <Nuxt />
        </transition>
      </div>
    <Loading v-if="$store.state.loading"/>
  </div>
</template>
<script>
export default {
  name:'default',
  beforeCreate() {
    this.$store.commit('setToken');
  }
}
</script>
<style scoped>
.banner-container {
  background-image: url("../assets/Images/backBanner.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

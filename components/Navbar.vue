<template>
  <nav class="flex items-center justify-between w-full p-2 bg-lightGray">
    <img src="@/assets/Images/logo.png" alt="">
    <div class="flex gap-2" v-if="!token">
      <Button @clickEvent="$router.push({name:'login'})" :classes="['h-10 bg-lightGray w-24']"><p class="text-white text-sm">ورود</p></Button>
      <Button @clickEvent="$router.push({name:'register'})" :classes="['h-10 bg-purple w-24']"><p class="text-white text-sm">ثبت نام</p></Button>
    </div>
    <ProfileButton v-else @openModal="exitModal= true"/>
    <ExitModal v-if="exitModal" @close="exitModal = false" />
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      exitModal:false,
    }
  },
  computed:{
    token() {
      return this.$store.state.userInfo.token
    }
  }
}
</script>

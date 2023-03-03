<template>
  <transition name="fade" >
    <div class="flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-lightGray z-50"
          @click.self="$emit('close')">
      <div class="flex flex-col justify-between p-12 items-center h-60 w-full max-w-sm bg-darkBlue rounded">
        <p class="text-white">خارج میشوید؟</p>
        <div class="flex justify-between gap-2 items-center w-full">
            <Button @clickEvent="logOut" :classes="['h-10 bg-purple w-full']">
              <p class="text-white " >بله</p>
            </Button>
          <Button :classes="['h-10 bg-lightGray w-full']" @clickEvent="$emit('close')">
            <p class="text-white">خیر</p>
          </Button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name:'ExitModal',
  methods:{
    async logOut() {
      await this.$store.commit('removeToken')
      await this.$router.push('/login')
      this.$emit('close')
    }
  }
}
</script>

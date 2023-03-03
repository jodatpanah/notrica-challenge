<template>
  <div class="flex items-center justify-between gap-2 bg-purple rounded p-2 relative cursor-pointer"
       @click="dropDown = !dropDown">
    <img :src="$store.state.userInfo.image" class="w-6 h-6 rounded-full"  alt="">
    <p class="text-white text-sm">{{$store.state.userInfo.firstName}} {{$store.state.userInfo.lastName}}</p>
    <img src="@/assets/Images/arrow.svg" alt="">
    <transition name="fade">
      <div v-if="dropDown" class="absolute flex flex-col gap-4 w-full p-2 top-full right-0 bg-lightPurple rounded overflow-hidden h-26 min-w-max">
        <div v-for="(item , index) in items" :key="index"  class="flex gap-2 justify-end"
             @click="item.fun()">
          <p class="text-sm text-white">{{item.title}}</p>
          <img :src="require(`@/assets/Images/${item.icon}.svg`)" alt="">
        </div>
      </div>
    </transition>

  </div>
</template>
<script>
export default {
  name:'ProfileButton',
  data() {
    return {
      dropDown : false,
      items: [
        {
          title:'پروفایل',
          icon:'profile',
          fun : () => {

          }
        },
        {
          title:'داشبورد',
          icon:'dashboard',
          fun : () => {

          }
        },
        {
          title:'خروج',
          icon:'exit',
          fun : () => {
            // this.dropDown = false
            this.$emit('openModal')
          }
        }
      ]
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-7 bg-darkBlue items-center p-4 w-full rounded max-w-sm">
    <p class="text-white">خوش آمدید</p>
    <img :src="$store.state.userInfo.image" alt="">
    <p class="text-white">{{$store.state.userInfo.lastName}} {{$store.state.userInfo.firstName}}</p>
  </div>
</template>
<script>
export default {
  name:'profile'
}
</script>

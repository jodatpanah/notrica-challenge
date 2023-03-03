<template>
  <div class="flex flex-col gap-8 bg-darkBlue items-center p-4 w-full rounded max-w-sm">
    <p class="text-white">ورود</p>
    <LoginForm/>
    <NuxtLink to="/register">
      <p class="text-purple">ثبت نام کنید</p>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>


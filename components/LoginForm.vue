<template>
  <div class="flex items-center justify-between gap-8 flex-col w-full">
    <Input type="text" errortext="" v-model="data.username" type1="text" faname="kminchelle" label=" (kminchelle) نام کاربری" />
    <Input type="password" type1="password" errortext="" v-model="data.password" faname="0lelplR" label="(0lelplR) رمز عبور" />
    <p class="text-red text-xs" v-if="readOnly">{{readOnly}}</p>
    <p class="text-red text-xs" v-if="errorText">{{errorText}}</p>
    <Button @clickEvent="sendData" :classes="['h-10 bg-purple w-full']" :disabled="readOnly">
      <p class="text-white" >ورود</p>
    </Button>
  </div>
</template>
<script>
export default {
  name:'LoginForm',
  data() {
    return {
      data: {
        username:'',
        password:''
      }
    }
  },
  computed:{
    errorText() {
      return this.$store.state.error
    },
    readOnly() {
      let error = false
      if(!this.data.username) {
        error = 'نام کاربری خود را وارد کنید'
      }
      else if (!this.data.password) {
        error = 'پسورد خود را وارد کنید'
      }
      return error
    }
  },
  methods: {
    async sendData() {
      this.$store.commit('setError' , '')
      this.$store.commit('setLoading' , true)
      const res = await this.$axios.post('/auth/login' , this.data)
      if(res) {
        process.client ? localStorage.setItem('token' , res.token) : false
        for(const key in res){
          this.$store.commit('updateInfo' , [key , res[key]])
        }
        console.log('user' , this.$store.state.userInfo)
        await this.$router.push('/profile')
      }
    }
  }
}
</script>

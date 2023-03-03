export const state = () => ({
  token: '',
  loading:false,
  error:'',
  userInfo:{
    username: "",
    email: "",
    id:'',
    firstName: "",
    lastName: "",
    gender:'',
    image: "",
    token:''
  }
})

export const mutations = {
  setToken(state) {
    if(process.client && localStorage.getItem('token')) {
      state.userInfo.token = localStorage.getItem('token')
    }
  },
  removeToken(state) {
    if(process.client) {
      state.userInfo.token = ''
      localStorage.removeItem('token')
    }
  },
  setError(state , value) {
    state.error = value
  },
  setLoading(state , value) {
    state.loading = value
  },
  updateInfo(state , [key,value]) {
    state.userInfo[key] = value
  }
}

export const getters = {
  getToken(state) {
    return state.token
  }
}

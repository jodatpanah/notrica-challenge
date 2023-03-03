export default function ({store , $axios , app} , inject) {
  $axios.defaults.baseURL = 'https://dummyjson.com'
  store.commit('setToken' , process.client ? (localStorage.getItem('token') ? localStorage.getItem('token') : false) : false)
  if(store.getters.getToken) {
    $axios.setToken(store.getters.getToken)
  }
  $axios.interceptors.response.use(
    (res) => {
      store.commit('setLoading' , false)
      return res.data
    },
    (err) => {
      store.commit('setLoading' , false)
      return store.commit('setError' , err.response.data.message)
  }
  )
}

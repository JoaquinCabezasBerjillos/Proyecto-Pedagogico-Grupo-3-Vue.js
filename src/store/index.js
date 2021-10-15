import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    SET_USER_DATA (state, data) {
      state.user = data.usuario
      localStorage.setItem('user', JSON.stringify(data.usuario))
      localStorage.setItem('token', JSON.stringify(data.token))
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${ data.token }`
    },
   
  },
  actions: {
    
    login({ commit }, credentials) {
      return apiCliente
        .post('/api/login', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data.data)
        })
    },
    
  },
  modules: {
  }
})
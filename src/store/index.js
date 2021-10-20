import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, data) {
      state.user = data.usuario;
      localStorage.setItem("user", JSON.stringify(data.usuario));
      localStorage.setItem("token", JSON.stringify(data.token));
      apiCliente.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.token}`;
    },
    LOGOUT (state) {
      // state.user = null
      // localStorage.removeItem('user')
      // localStorage.removeItem('token')
      // apiClient.defaults.headers.common['Authorization'] = null
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      location.reload()
    },
  },
  actions: {
    login({ commit }, credentials) {
      return apiCliente.post("/api/login", credentials).then(({ data }) => {
        commit("SET_USER_DATA", data.data);
      });
    },
    register({ commit }, credentials) {
      return apiCliente
      .post('/api/register', credentials)
      .then(({ data }) => {
        commit('SET_USER_DATA', data.data)
      });
    },
    logout ({ commit }) {
      return apiCliente
        .get('/api/logout')
        .then(() => {
          commit('LOGOUT')
        })
    }
  },
  modules: {},
});

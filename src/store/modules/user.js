// import store from '../index'

const user = {
  state: {
    id: '',
    login: '',
    name: '',
    token: '',
    modules: [],
    roles: '',
    imgUrl: ''
  },

  mutations: {
    SET_ID: (state, id) => {
      state.id = id
    },
    SET_LOGIN: (state, login) => {
      state.login = login
    }
    // add all states
  },

  actions: {}
}

export default user

import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

// import permission from './modules/permission'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // permission
  },
  getters
})

export default store

const errorLog = {
  state: {
    logs: []
  },
  mutations: {
    ADD_ERROE_LOG: (state, log) => {
      state.logs.push(log)
    }
  },
  actions: {
    addErrorLog({ commit }, log) {
      commit('ADD_ERROR_LOG', log)
    }
  }
}

export default errorLog

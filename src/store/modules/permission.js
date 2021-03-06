import { routes } from '../../router/index'

const permission = {
  state: {
    routers: routes,
    addRoutes: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = routes.concat(routers)
    }
  }
}

export default permission

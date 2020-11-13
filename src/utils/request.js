import axios from 'axios'
import store from '@/store'

export const request = axios.create({
  baseURL: `${window.location.protocol}//${window.location.host}`,
  // baseURL: `http://stocknn.ru/`,
  headers: {
    // 'Access-Control-Allow-Origin': 'http://stocknn.ru',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  },
  json: true
})

request.interceptors.request.use(config => {
  if (store.getters.token) {
    // config.headers['X-AUTH-TOKEN'] = getToken()
  }
  return {
    ...config,
    cancelToken: store.token
  }
})

request.interceptors.response.use(
  response => { return response },
  error => {
    switch (error) {
      case 401:
        console.log(error)
        break
      case 504:
        console.log('504: Gateway Time-Out')
        break
      default:
        console.log(error)
    }
    return Promise.reject(error)
  })

export async function loadingRequest(params) {
  store.commit('ADD_LOADING_REQUEST', params.loadingName)
  try {
    return await request(params)
  } catch (error) {
    throw error
  } finally {
    store.commit('DELETE_LOADING_REQUEST', params.loadingName)
  }
}

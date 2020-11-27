import { request } from '../utils/request'

const baseUrl = url => '' + url

export function getInfo() {
  return request({
    url: baseUrl('getinfo'),
    method: 'get'
  })
}

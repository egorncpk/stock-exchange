import { request } from '../utils/request'

const baseUrl = url => 'stocknn/' + url

export function getInfo() {
  return request({
    url: baseUrl('getinfo'),
    method: 'get'
  })
}

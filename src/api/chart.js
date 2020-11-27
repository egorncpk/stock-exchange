import { request } from '../utils/request'

const baseUrl = url => url

/**
 * Возвращает данные для графика, принимает в параметры { ticker }
 * Get
 * @param params
 * @returns {AxiosPromise}
 */
export function getData(params) {
  return request({
    url: baseUrl('getdata'),
    method: 'get',
    params
  })
}

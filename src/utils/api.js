import axios from './http'

// 1. 请求xxx
export function getCarData(params) {
  return axios.get('api/url', params)
}

// 2. 请求yyy
export function updateCar(params) {
  return axios.post('api/url', params)
}
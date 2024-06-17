import request from '@/utils/request'

// 登录

export const loginApi = (loginParams: loginParamsType) => {
  return request('/api/park/login', 'POST', loginParams)
}

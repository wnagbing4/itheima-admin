import axios, {
  type InternalAxiosRequestConfig,
  type AxiosInstance,
  type AxiosResponse,
  AxiosError,
  type AxiosRequestConfig
} from 'axios'
import { useAuthStore } from '@/stores/auth'
// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const store = useAuthStore()
    console.log(store.token,'store.token');
    
    if (store.token) {
      console.log(config.headers,'config');
      
      config.headers.Authorization = `Bearer ${store.token}`
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

type DataType<T = any> = {
  code: number
  data: T
  msg: string
}

const request = <T = any>(
  url: string,
  method = 'GET',
  data?: Object,
  options?: AxiosRequestConfig
) => {
  return service.request<T, DataType<T>>({
    url,
    method,
    [method === 'GET' ? 'params' : 'data']: data,
    ...options
  })
}

export const get = <T = any>(url: string, data: Object) => {
  return request<T>(url, 'GET', data)
}

export const post = <T = any>(url: string, data: Object) => {
  return request<T>(url, 'POST', data)
}

export const put = <T = any>(url: string, data: Object) => {
  return request<T>(url, 'PUT', data)
}

export const del = <T = any>(url: string, data: Object) => {
  return request<T>(url, 'DELETE', data)
}

export default request

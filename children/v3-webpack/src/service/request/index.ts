import axios, { type AxiosInstance, type AxiosRequestConfig, type CreateAxiosDefaults } from 'axios'

type TInterceptor = {
  requestInterceptors?: (r: any) => any
  requestInterceptorsCatch?: (r: any) => any
  responseInterceptors?: (r: any) => any
  responseInterceptorsCatch?: (r: any) => any
}

type TExtraConfig = {
  interceptors?: TInterceptor
}

class TetRequest {
  instance: AxiosInstance
  interceptors?: TInterceptor
  constructor(config: CreateAxiosDefaults & TExtraConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // 请求
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    // 响应
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      (data) => {
        return data
      },
      (err) => {
        return err
      }
    )
  }

  request<T = any>(config: AxiosRequestConfig & TExtraConfig) {
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request(config)
        .then((res: any) => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: AxiosRequestConfig & TExtraConfig) {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: AxiosRequestConfig & TExtraConfig) {
    return this.request<T>({ ...config, method: 'POST' })
  }

  put<T = any>(config: AxiosRequestConfig & TExtraConfig) {
    return this.request<T>({ ...config, method: 'PUT' })
  }

  delete<T = any>(config: AxiosRequestConfig & TExtraConfig) {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}

export default TetRequest

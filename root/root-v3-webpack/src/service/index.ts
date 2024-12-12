import TetRequest from '@/service/request'
import { TetNotify } from '@/utils/notify'
import TetCache from '@/utils/cache'

const tetRequest = new TetRequest({
  interceptors: {
    requestInterceptors(config) {
      const authorization = TetCache.getCache('authorization')
      const tetproj = TetCache.getCache('tetproj')
      const lang = TetCache.getCache('language')
      if (authorization) {
        config.headers.authorization = authorization
      }
      if (tetproj) {
        config.headers.tetproj = tetproj
      }
      if (lang) {
        config.headers['Accept-Language'] = lang === 'cn' ? 'zh-CN' : 'en-US'
      }
      return config
    },
    responseInterceptors(r) {
      // 如果存在授权
      return r
    },
    responseInterceptorsCatch(e) {
      if (e?.response?.data?.message) {
        TetNotify(e?.response?.data?.message || '', 'error')
      } else {
        const uint8Array = new Uint8Array(e.response.data)
        const textDecoder = new TextDecoder('utf-8')
        const jsonStringFromBuffer = textDecoder.decode(uint8Array)
        const message = JSON.parse(jsonStringFromBuffer).message
        TetNotify(message || jsonStringFromBuffer, 'error')
      }
      return e
    }
  },
  timeout: 1000 * 60 * 60
})
export { tetRequest }

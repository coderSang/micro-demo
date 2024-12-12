import { UNIQUE_PROJECT_KEY } from '@/constants/index'
class TetCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(`${UNIQUE_PROJECT_KEY}${key}`, JSON.stringify(value))
  }

  getCache(key: string) {
    const value = window.localStorage.getItem(`${UNIQUE_PROJECT_KEY}${key}`)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCatch(key: string) {
    window.localStorage.removeItem(`${UNIQUE_PROJECT_KEY}${key}`)
  }

  clearCatch() {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith(UNIQUE_PROJECT_KEY)) {
        window.localStorage.removeItem(key)
      }
    })
  }
}

export default new TetCache()

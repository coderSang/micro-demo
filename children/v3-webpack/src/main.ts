import { createApp, App as VueApp } from 'vue'
import { createPinia } from 'pinia'
import './public-path'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'

const pinia = createPinia()

let app: VueApp<Element> | null = null
// 👇 将渲染操作放入 mount 函数，子应用初始化时会自动执行
;(window as any).mount = () => {
  app = createApp(App)
  app.use(router)
  app.use(pinia)
  app.mount('#app-children1')
}

// 👇 将卸载操作放入 unmount 函数，就是上面步骤2中的卸载函数
;(window as any).unmount = () => {
  app?.unmount()
  app = null
}

// 如果不在微前端环境，则直接执行mount渲染
if (!(window as any).__MICRO_APP_ENVIRONMENT__) {
  ;(window as any).mount()
}

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import microApp from '@micro-zoe/micro-app'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')
microApp.start({
  'router-mode': 'pure'
  // 'disable-memory-router': true // 关闭虚拟路由
})

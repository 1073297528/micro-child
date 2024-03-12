import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#child-vue3-app')

function handleMicroData() {
  window.microApp.addDataListener((data: any) => {
    console.log('子应用收到路由变化通知', data)
    router.replace({ path: data.path })
  }, true)
}
handleMicroData()

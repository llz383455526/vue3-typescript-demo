import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { APP_CONFIG } from '@/shared/constants'

// main.ts
const app = createApp(App)
app.config.globalProperties.$http = () => {
  console.log('$http')
}
app.provide(APP_CONFIG, app.config)

app
  .use(router)
  .use(store)
  .mount('#app')

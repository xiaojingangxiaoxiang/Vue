import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // 引入数据持久化插件
import App from './App.vue'
const pinia = createPinia() // 创建pinia实例
const app = createApp(App)
app.use(pinia.use(piniaPluginPersistedstate))// 挂载pinia实例
app.mount('#app')
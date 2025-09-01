import { defineStore } from 'pinia'
import { ref } from 'vue'

// 用户模块 token setToken removeToken
export const useUserStore = defineStore('big-user', () => {
  // 1. 定义state
  const token = ref('')
  const removeToken = () => {
    token.value = ''
  }
  const setToken = (newToken) => {
    token.value = newToken
  }
  return { token, setToken, removeToken }
}, {
    persist: true,
})
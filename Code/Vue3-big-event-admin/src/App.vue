<script setup>
// 错误
// const goList= () =>{
//   this.$router.push('/list')
// }
// 在Vue3中，setup语法糖中没有this
import { useRoute , useRouter } from 'vue-router'
import { useUserStore } from '@/stores'
const router = useRouter()
const route = useRoute()

const goList = () =>{
  console.log(route, router)
  router.push('/list')
}
const userStore = useUserStore()
</script>

<template>
  <div>
    <hr>
    <router-view></router-view>
    <hr>
    <hr>
    我是App
    <test-demo></test-demo>
    <el-button @click="$router.push('/home')">跳首页</el-button>
    <button @click="goList">跳列表页</button>
    <el-button type="success">success</el-button>
    <el-button type="primary">primary</el-button>
    <p>{{ userStore.token }}</p>
    <el-button @click="userStore.setToken('qwerqazasdasdsadxzccxzxc')">登录</el-button>
    <el-button @click="userStore.removeToken">退出</el-button>
  </div>
</template>

<style scoped>

</style>

<script setup>
// 错误
// const goList= () =>{
//   this.$router.push('/list')
// }
// 在Vue3中，setup语法糖中没有this
import { useRoute , useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()

const goList = () =>{
  console.log(route, router)
  router.push('/list')
}
</script>

<template>
  <div>我是App
    <button @click="$router.push('/home')">跳首页</button>
    <button @click="goList">跳列表页</button>
  </div>
</template>

<style scoped>

</style>

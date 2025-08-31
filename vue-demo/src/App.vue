<script setup>
import CenterCom from '@/components/bottom.vue'
import { provide, ref } from 'vue';

// 1. 跨层传递普通数据
provide('theme-color', 'pink')
// 2、传递响应式数据
const count = ref(100)
provide('count', count)

</script>

<template>
    <h1>我是顶层组件</h1>
    <h2>testgithub</h2>
    <CenterCom></CenterCom>
</template>
<script setup>
import { inject } from 'vue';
const themeColor = inject('theme-color')
const count = inject('count')
const changeCount = inject('changeCount')
const clickFn = () => {
    changeCount()
}
</script>

<template>
<div>我是底层组件-- {{ themeColor }}--{{ count }}</div>
<button @click="clickFn">更改数据</button>
</template>
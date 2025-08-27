<script setup>
import { inject } from 'vue';
const themeColor = inject('theme-color')
const count = inject('count')
</script>

<template>
<div>我是底层组件-- {{ themeColor }}--{{ count }}</div>
</template>
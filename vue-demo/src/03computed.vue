<script setup>
import { computed, ref } from 'vue'

const list = ref([1,2,3,4,5,6,7,8])

const computedList = computed(() => {
  return list.value.filter(item => item > 2)
})

// 修改数组
const addFn = () => {
  list.value.push(9)
}
</script>

<template>
    <div>
    <div>原始数组：{{ list }}</div>
    <div>计算属性过滤后的数组：{{ computedList }}</div>
    <button @click="addFn" type="button">修改</button>
    </div>
</template>
  
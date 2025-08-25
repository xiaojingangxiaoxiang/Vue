<script setup>
// reactive: 接受一个对象并返回该对象的响应式副本
// ref: 接受一个基本类型(基本类型或者复杂类型)的值并返回该值的响应式副本
// 本质是在原有传入数据的基础上，外包了一层对象，包装成复杂类型
// 底层，包成复杂类型之后，再借助reactive实现响应式
// 注意点：脚本访问数据，需要通过.value访问
// template访问数据，直接访问即可
import { reactive } from 'vue'
import { ref } from 'vue'

const count1 = ref(0)
console.log(count1.value) // {value: 0}
const state = reactive({
  count: 0
})
const setCount = () => {
  state.count++
}
const setCount1 = () => {
  count1.value++
}


</script>

<template>
    <div>
        <div> {{ state.count }} </div>
        <button @click="setCount">+1</button>
    </div>
    <div>
        <div> {{ count1 }} </div>
        <button @click="setCount1">+1</button>
    </div>
</template>
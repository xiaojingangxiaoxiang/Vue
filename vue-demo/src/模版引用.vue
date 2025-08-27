<script setup>
import { ref } from 'vue';
import TestCom from '@/components/test-com.vue'
//模版引用
//1、调用ref函数
// 2、通过ref标识进行绑定
// 3、通过ref.value访问到绑定元素
const inp = ref(null)

const clickFn = () => {
    inp.value.focus()
}

const testRef = ref(null)
const getCom = () => {
    console.log(testRef.value)
}
</script>

<template>
    <div>
        <input ref="inp" type="text">
        <button @click="clickFn">点击聚焦输入框</button>
    </div>
    <TestCom ref="testRef"></TestCom>
    <button @click="getCom">获取组件</button>
</template>
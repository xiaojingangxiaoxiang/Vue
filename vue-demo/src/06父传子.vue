<script setup>
// 父传子
// 1. 给子组建，添加属性的方式传值
// 2. 在子组建，通过props接收

// 子传父
// 1、emit事件触发
// 2、在父组件中通过@监听
import SonCom from './components/子传父.vue';
import {ref} from 'vue'
const money = ref(100)
const getMoney = () => {
    money.value += 10
}
const changeFn = (newMoney) => {
    money.value = newMoney
}
</script>

<template>
    <div>
        <h3>
            父组建 - {{ money }}
            <button @click="getMoney">挣钱</button>
        </h3>
        <SonCom @changeMoney="changeFn" car="宝马车":money = "money"></SonCom>
    </div>
</template>
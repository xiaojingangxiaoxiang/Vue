<script setup>
// 父传子
// 1. 给子组建，添加属性的方式传值
// 2. 在子组建，通过props接收
const props = defineProps({
    car : String,
    money : Number
})
const emit = defineEmits(['changeMoney'])
console.log(props)

const buy = () => {
    emit('changeMoney', 5)
}
</script>

<template>
    <div class="son">我是子组建{{ car }} - {{ money }}</div>
    <button @click="buy">花钱</button>
</template>

<style scoped>
.son {
    border: 1px solid #000;
    padding: 30px;
}
</style>
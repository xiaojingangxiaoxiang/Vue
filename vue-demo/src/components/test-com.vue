<script setup>
const count = 999
const sayHi = () => {
    console.log("hi!")
}
defineExpose({
    count,
    sayHi
})
</script>

<template>
    <div>测试组建</div>
</template>
<script setup>
    import { ref, watch } from 'vue'
    const count = ref(0)
    const nickName = ref('张三')

    const changeCount = () => {
        count.value++
    }

    const changeNickName = () => {
        nickName.value = '李四'
    }

    // 1 监视单个数据变化
    // 监视的是对象
    // immediate: 立即执行一次
    // deep: 深度监视,针对复杂类型
    watch(count, (newVal, oldVal) => {
        console.log('count变化了', newVal, oldVal)
    },
    {
        immediate: true, // 立即执行一次
    })

    const userInfo = ref({
        name: '张三',
        age: 18
    })

    // 2 监视多个数据变化
    watch([count, nickName], ([newCount, newNickName], [oldCount, oldNickName]) => {
        console.log('count或nickName变化了', newCount, oldCount, newNickName, oldNickName)
    })

    const changeUserInfo = () => {
        userInfo.value.name = '李四'
        userInfo.value.age++
    }
    watch(userInfo, (newVal, oldVal) => {
        console.log('userInfo变化了', newVal, oldVal)
    },
    {
        deep: true // 深度监视
    })

    // 监听单个数据变化的写法
    watch(userInfo.value.age, (newVal, oldVal) => {
        console.log('age变化了', newVal, oldVal)
    })
</script>

<template>  
    <div>{{ count }}</div>
    <button @click="changeCount" >改数字</button>
    <div>{{ nickName }}</div>
    <button @click="changeNickName">改昵称</button>
    <div>{{ userInfo }}</div>
    <button @click="changeUserInfo">改名字</button>
</template>
   
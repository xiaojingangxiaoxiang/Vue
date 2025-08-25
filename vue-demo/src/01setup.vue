<!-- <script>
export default {
  setup() {
    // 数据
    const message = "Hello Vue 3 + Vite!"
    console.logMessage = () => {
      console.log(message)
    }
    
    return {
      message
    }

  },
  beforeCreate() {
    console.log("App beforeCreate")
  },
}
</script> -->
// 语法糖 setup
<script setup>
  const message = "Hello Vue 3 + Vite!"
  console.logMessage = () => {
    console.log(message)
  }

</script>

<template>
  <div>{{ message }}</div>
</template>
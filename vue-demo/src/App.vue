<script setup>
import { onMounted } from 'vue';

// beforeCreate 和 created 的相关代码
// 一律防灾setup中执行
const getLists = () => {
  setTimeout(() => {
    console.log('模拟获取数据')
  }, 1000)
}
// 一进入页面的请求
getLists()

onMounted(() => {
  console.log('App mounted')
})

onMounted(() => {
  console.log('App mounted 2')
})

</script>
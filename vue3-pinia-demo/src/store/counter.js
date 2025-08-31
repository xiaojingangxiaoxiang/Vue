import { defineStore } from "pinia";
import { computed, ref } from "vue";

// 定义store
export const useCounterStore = defineStore('counter', () => {
    // 声明数据
    const count = ref(0);
    // 声明操作数据的方法 action
    const addCount = () => {
        count.value++;
    }
    const subCount = () => {
        count.value--;
    }
           
    // 声明基于数据派生的计算属性 getters
    const doubleCount = computed(() => 
        count.value * 2
    )
    // 声明数据 state - msg
    const msg = ref("hello pinia");

    return {
        count,
        doubleCount,
        msg,
        addCount,
        subCount,
        
    }
},
{
    // persist: true // 开启数据持久化
    persist: {
        enabled: true, // 开启数据持久化
        strategies: [
            {
                key: 'counter', // 存储的key
                storage: localStorage, // 存储的位置
                paths: ['count'] // 需要存储的数据
            }
        ]
    }
}
);
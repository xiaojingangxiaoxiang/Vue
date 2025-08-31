import {defineStore} from 'pinia'
import {ref} from 'vue'
import aoxis from 'axios'

export const useChannelStore = defineStore('channel', () => {
//声明数据
const channelList = ref([])
//声明操作数据的方法 action
const getList = async () => {
    //支持异步
    const { data : { data }} = await aoxis.get('http://geek.itheima.net/v1_0/channels')
    channelList.value = data.channels
    console.log(data.channels)
}
//声明getters相关
return {
    channelList, 
    getList,
}
})
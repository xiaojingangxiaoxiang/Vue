import { createRouter, 
  createWebHistory, 
  
 } from 'vue-router'


// createRouter 创建路由实例
// 配置history模式
// 1. history模式：createWebHistory  地址栏不带#
// 2. hash模式：createWebHashHistory  地址栏带#
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/loginPage.vue') }, // 登录页
    { path: '/', component: () => import('@/views/layout/layoutContainer.vue'), 
      redirect: '/article/manage', // 重定向
      children : [
        { path: '/article/manage', component: () => import('@/views/article/articleManage.vue') }, // 文章管理
        { path: '/article/channel', component: () => import('@/views/article/articleChannel.vue') }, // 频道管理
        { path: '/user/profile', component: () => import('@/views/user/userProfile.vue') }, // 个人详情
        { path: '/user/avatar', component: () => import('@/views/user/userAvatar.vue') }, // 更换头像
        { path: '/user/password', component: () => import('@/views/user/userPassword.vue') }, // 重置密码
      ]
    }, // 布局页
  ],
})

export default router

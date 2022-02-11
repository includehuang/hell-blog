import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    { // 首页
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/Home'),
    },
    { // 博客
        path: '/blog',
        name: 'Blog',
        component: () => import('@/views/home/Home'),
    },
    { // 作品
        path: '/works',
        name: 'Works',
        component: () => import('@/views/home/Home'),
    },
    { // 关于我
        path: '/me',
        name: 'Me',
        component: () => import('@/views/home/Home'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

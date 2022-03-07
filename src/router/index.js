import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    { // 首页
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/Home'),
    },
    { // 博客
        path: '/blog',
        name: 'Blog',
        redirect: '/blog/index',
        component: () => import('@/views/blog/Blog'),
        children: [
            {
                path: '/blog/index',
                name: 'BlogPage',
                component: () => import('@/views/blog/BlogPage'),
            },
            {
                path: '/blog/reader',
                name: 'BlogReader',
                component: () => import('@/views/reader/Reader'),
            },
        ]
    },
    { // 作品
        path: '/work',
        name: 'Work',
        component: () => import('@/views/work/Work'),
    },
    { // 作品
        path: '/project',
        name: 'Project',
        component: () => import('@/views/work/Work'),
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

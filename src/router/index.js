import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('@/views/auth/Login.vue');
const HomeView = () => import('@/views/HomeView.vue');
const About = () => import('@/views/AboutView.vue');

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
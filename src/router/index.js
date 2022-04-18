import { createRouter, createWebHistory } from 'vue-router'
import { logged } from '@/enviroments/logged';

const Login = () => import('@/views/auth/Login.vue');
const HomeView = () => import('@/views/HomeView.vue');
const About = () => import('@/views/AboutView.vue');

var isLogged = logged();

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    isLogged = logged();

    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (!isLogged) {
            next({
                path: '/login'
            })
        }
        else {
            next()
        }
    }
    else {
        if(isLogged && to.fullPath == '/login') {
            next({
                path: '/'
            })
        }
        else {
            next()
        }
    }
})

export default router
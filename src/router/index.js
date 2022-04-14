import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('@/views/auth/Login.vue');
const HomeView = () => import('@/views/HomeView.vue');
const About = () => import('@/views/AboutView.vue');

const token = localStorage.getItem('token');
var isLogged = false;

if(token != null) {
    isLogged = true;
}

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
    if(to.meta.requiresAuth) {
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
        next()
    }
})

export default router
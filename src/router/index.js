import { createRouter, createWebHistory } from 'vue-router'
import { logged } from '@/enviroments/logged';

const Login = () => import('@/views/auth/Login.vue');
const HomeView = () => import('@/views/HomeView.vue');
const ClientesIndex = () => import('@/views/clientes/ClientesIndex.vue');
const ClientesAdd = () => import('@/views/clientes/ClientesAdd.vue');
const ClientesEdit = () => import('@/views/clientes/ClientesEdit.vue');
const DevedoresIndex = () => import('@/views/devedores/DevedoresIndex.vue');


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
        path: '/clientes',
        name: 'clientes',
        component: ClientesIndex,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/cliente/add',
        name: 'clienteadd',
        component: ClientesAdd,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/cliente/edit/:id',
        name: 'clienteedit',
        component: ClientesEdit,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/devedores',
        name: 'devedores',
        component: DevedoresIndex,
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
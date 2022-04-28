import { createRouter, createWebHistory } from 'vue-router'
import { logged } from '@/enviroments/logged';

const Register = () => import('@/views/users/Register.vue');
const Login = () => import('@/views/auth/Login.vue');
const HomeView = () => import('@/views/HomeView.vue');
const ClientesIndex = () => import('@/views/clientes/ClientesIndex.vue');
const ClientesAdd = () => import('@/views/clientes/ClientesAdd.vue');
const ClientesEdit = () => import('@/views/clientes/ClientesEdit.vue');
const DevedoresIndex = () => import('@/views/devedores/DevedoresIndex.vue');
const DevedoresAdd = () => import('@/views/devedores/DevedoresAdd.vue');
const DevedoresEdit = () => import('@/views/devedores/DevedoresEdit.vue');
const ClientesDevedoresIndex = () => import('@/views/clientes-devedores/ClientesDevedoresIndex.vue');
const ClientesDevedoresAdd = () => import('@/views/clientes-devedores/ClientesDevedoresAdd.vue');
const ClientesDevedoresEdit = () => import('@/views/clientes-devedores/ClientesDevedoresEdit.vue');

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
        path: '/devedor/add',
        name: 'devedoradd',
        component: DevedoresAdd,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/devedor/edit/:id',
        name: 'devedoredit',
        component: DevedoresEdit,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/debitos',
        name: 'debitos',
        component: ClientesDevedoresIndex,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/debito/add',
        name: 'debitoadd',
        component: ClientesDevedoresAdd,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/debito/edit/:id',
        name: 'debitoedit',
        component: ClientesDevedoresEdit,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
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
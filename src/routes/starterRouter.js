import Vue from 'vue';
import Router from 'vue-router';
import DashboardLayout from '../views/Starter/SampleLayout.vue';
import Starter from '../views/Starter/SamplePage.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';


Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   redirect: '/dashboard',
    //   component: DashboardLayout,
    //   children: [
    //     {
    //       path: 'dashboard',
    //       name: 'dashboard',
    //       components: { default: Starter }
    //     }
    //   ]
    // }
    {
        path: '/',
        redirect: 'login',
        component: AuthLayout,
        children: [
          {
            path: '/login',
            name: 'login',
            component: AuthLayout
          },
          {
            path: '/register',
            name: 'register',
            component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
          },
          { path: '*', component: NotFound }
        ]
      }

  ],
  scrollBehavior: (to, from ,savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

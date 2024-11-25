import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from './stores/user'

import LandingPage from './page/LandingPage.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./page/Home.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./page/SignUp.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./page/Login.vue'),
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: () => import('./page/ForgetPassword.vue'),
    },
    {
      path: '/otp',
      name: 'otp',
      component: () => import('./page/OTPPage.vue'),
    },
    {
      path: '/changepassword',
      name: 'changepassword',
      component: () => import('./page/ChangePassword.vue'),
    },
 /*    {
      path: '/signup',
      name: 'signup',
      component: () => import('./page/SignUp.vue'),
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./page/SignIn.vue'),
    },
    {
      path: '/passwordresubmit-email',
      name: 'passwordresubmit-email',
      component: () => import('./page/PasswordResubmitEmail.vue'),
    },
    {
      path: '/passwordresubmit-password',
      name: 'passwordresubmit-password',
      component: () => import('./page/PasswordResubmitPassword.vue'),
    }, */

  ],
});
/* router.beforeEach((to, from, next) => {
  const user = useUserStore()
  if(to.matched.some((record)=> record.meta.requiresAuth)){
    if(user.userToken){
      next()
      return
    }
    next("signin")
  }
  else if(to.matched.some((record)=> record.meta.admin)){
    if(user.token && user.userType == 1){
      next()
      return
    }
    next("login")
  }
  else{
    next()
  }
}) */

export default router;

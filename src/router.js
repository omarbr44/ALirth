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
    {
      path: '/stream/:id',
      name: 'stream',
      component: () => import('./page/StreamPage.vue'),
    },
    {
      path: '/stream-video/:id',
      name: 'stream-video',
      component: () => import('./page/StreamVideo.vue'),
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('./page/Categories.vue'),
    },
    {
      path: '/category-detailes/:id',
      name: 'category-detailes',
      component: () => import('./page/CategoryDetailes.vue'),
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: () => import('./page/TeachersIndex.vue'),
    },
    {
      path: '/teacher-view/:id',
      name: 'teacher-view',
      component: () => import('./page/TeacherView.vue'),
    },
    {
      path: '/stream-index',
      name: 'stream-index',
      component: () => import('./page/StreamIndex.vue'),
    },
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

<template>
    <div class=" absolute top-0 w-full z-40">
        <nav class="flex justify-center items-center gap-16 py-8 px-10 d-ltr w-full z-10">
            <div class="flex items-center gap-4">
                <RouterLink 
                  to=""
                  class=" bg-site-primary text-white py-3 px-4 rounded-lg"
                  >
                  تسجيل حساب جديد
                </RouterLink>
                <RouterLink 
                  to="/login"
                  class=" bg-white text-site-primary py-3 px-4 rounded-lg"
                  >
                  تسجيل الدخول
                </RouterLink>
            </div>
            <RouterLink 
              to=""
              class="text-site-secondary flex items-center gap-2"
              >
              <p>القائمة المفضلة</p>
              <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5019 2.40513C20.3072 1.21638 18.7127 0.562379 17.0132 0.562379C15.3204 0.562379 13.7372 1.21263 12.5544 2.39388L12.0932 2.85588L11.6319 2.39463C10.4454 1.20963 8.85842 0.557129 7.16117 0.557129C5.46542 0.557129 3.87542 1.20888 2.68292 2.39463C0.218422 4.85838 0.216922 8.87913 2.68292 11.3571L11.5629 20.2251C11.7092 20.3706 11.9012 20.4441 12.0932 20.4441C12.2852 20.4441 12.4764 20.3706 12.6234 20.2251L21.5049 11.3549C23.9657 8.88213 23.9649 4.86738 21.5019 2.40513ZM19.9097 9.76713C19.7627 9.91413 19.5707 9.98838 19.3779 9.98838C19.1867 9.98838 18.9954 9.91563 18.8484 9.77013C18.5552 9.47763 18.5537 9.00363 18.8462 8.70963C19.8347 7.71588 19.8377 6.04338 18.8522 5.05788C18.5589 4.76463 18.5589 4.29063 18.8522 3.99738C19.1454 3.70413 19.6194 3.70413 19.9127 3.99738C21.4719 5.55663 21.4704 8.19963 19.9097 9.76713Z" fill="#131413"/>
              </svg>
            </RouterLink>
            <div class="flex items-center gap-9 text-site-secondary">
                <RouterLink 
                  to=""
                  class=""
                  >
                  المحاضرين
                </RouterLink>
                <RouterLink 
                  to=""
                  class=""
                  >
                  البرامج
                </RouterLink>
                <RouterLink 
                  to=""
                  class=""
                  >
                  الفئات
                </RouterLink>
                <RouterLink 
                  to=""
                  class="flex gap-2 items-center"
                  >
                  <div class=" size-1 rounded-full bg-red-600"></div>
                  <span>بث مباشر</span>
                </RouterLink>
                <RouterLink 
                  to=""
                  class=""
                  >
                  الرئيسية
                </RouterLink>
            </div>
            <RouterLink 
              to="/"
              class=""
              >
              <img src="/img/Logo.png" alt="Logo">
            </RouterLink>
        </nav>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style scoped>

</style>
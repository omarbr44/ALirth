<template>
<div class="absolute top-0 w-full z-40 dark:bg-black dark:bg-opacity-60">
    <nav class="flex justify-between items-center py-4 px-6 lg:px-10 lg:gap-16 w-full z-10">
      <!-- Logo -->
      <RouterLink to="/" class="flex-shrink-0">
        <img src="/img/Logo.png" alt="Logo" class="h-10" />
      </RouterLink>

      <!-- Dark/Light Mode Toggle Button -->
      <button
        @click="toggleDarkMode"
        class="p-2 text-site-secondary dark:text-white focus:outline-none"
      >
        <svg
          v-if="!isDarkMode"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>

      <!-- Mobile Menu Toggle Button -->
      <button
        @click="toggleMenu"
        class="lg:hidden p-2 text-site-secondary dark:text-white focus:outline-none"
      >
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Desktop Menu Items -->
      <div class="hidden lg:flex items-center gap-9 text-site-secondary dark:text-white">
        <RouterLink to="/">الرئيسية</RouterLink>
        <RouterLink to="/live" class="flex gap-2 items-center">
          <div class="size-1 rounded-full bg-red-600"></div>
          <span>بث مباشر</span>
        </RouterLink>
        <RouterLink to="/categories">الفئات</RouterLink>
        <RouterLink to="/programs">البرامج</RouterLink>
        <RouterLink to="/teachers">المحاضرين</RouterLink>
      </div>

      <!-- Favorite Menu (Desktop) -->
      <RouterLink
        to="/favorites"
        class="hidden lg:flex items-center gap-2 text-site-secondary dark:text-white"
      >
        <p>القائمة المفضلة</p>
        <svg
          width="24"
          height="21"
          viewBox="0 0 24 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5019 2.40513C20.3072 1.21638 18.7127 0.562379 17.0132 0.562379C15.3204 0.562379 13.7372 1.21263 12.5544 2.39388L12.0932 2.85588L11.6319 2.39463C10.4454 1.20963 8.85842 0.557129 7.16117 0.557129C5.46542 0.557129 3.87542 1.20888 2.68292 2.39463C0.218422 4.85838 0.216922 8.87913 2.68292 11.3571L11.5629 20.2251C11.7092 20.3706 11.9012 20.4441 12.0932 20.4441C12.2852 20.4441 12.4764 20.3706 12.6234 20.2251L21.5049 11.3549C23.9657 8.88213 23.9649 4.86738 21.5019 2.40513ZM19.9097 9.76713C19.7627 9.91413 19.5707 9.98838 19.3779 9.98838C19.1867 9.98838 18.9954 9.91563 18.8484 9.77013C18.5552 9.47763 18.5537 9.00363 18.8462 8.70963C19.8347 7.71588 19.8377 6.04338 18.8522 5.05788C18.5589 4.76463 18.5589 4.29063 18.8522 3.99738C19.1454 3.70413 19.6194 3.70413 19.9127 3.99738C21.4719 5.55663 21.4704 8.19963 19.9097 9.76713Z"
            fill="currentColor"
          />
        </svg>
      </RouterLink>

      <!-- Auth Buttons (Desktop) -->
      <div class="hidden lg:flex items-center gap-4">
        <RouterLink
          to="/signup"
          class="bg-site-primary text-white py-3 px-4 rounded-lg"
        >
          تسجيل حساب جديد
        </RouterLink>
        <RouterLink
          to="/login"
          class="bg-white text-site-primary py-3 px-4 rounded-lg dark:bg-gray-800 dark:text-white"
        >
          تسجيل الدخول
        </RouterLink>
      </div>

      <!-- Mobile Menu (Dropdown) -->
      <div
        v-if="isMenuOpen"
        class="lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg"
      >
        <RouterLink to="/" class="block px-4 py-2 text-site-secondary dark:text-white">الرئيسية</RouterLink>
        <RouterLink to="/live" class="block px-4 py-2 text-site-secondary dark:text-white flex items-center gap-2">
          <div class="size-1 rounded-full bg-red-600"></div>
          <span>بث مباشر</span>
        </RouterLink>
        <RouterLink to="/categories" class="block px-4 py-2 text-site-secondary dark:text-white">الفئات</RouterLink>
        <RouterLink to="/programs" class="block px-4 py-2 text-site-secondary dark:text-white">البرامج</RouterLink>
        <RouterLink to="/teachers" class="block px-4 py-2 text-site-secondary dark:text-white">المحاضرين</RouterLink>
        <RouterLink to="/favorites" class="block px-4 py-2 text-site-secondary dark:text-white flex items-center gap-2">
          <p>القائمة المفضلة</p>
          <svg
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5019 2.40513C20.3072 1.21638 18.7127 0.562379 17.0132 0.562379C15.3204 0.562379 13.7372 1.21263 12.5544 2.39388L12.0932 2.85588L11.6319 2.39463C10.4454 1.20963 8.85842 0.557129 7.16117 0.557129C5.46542 0.557129 3.87542 1.20888 2.68292 2.39463C0.218422 4.85838 0.216922 8.87913 2.68292 11.3571L11.5629 20.2251C11.7092 20.3706 11.9012 20.4441 12.0932 20.4441C12.2852 20.4441 12.4764 20.3706 12.6234 20.2251L21.5049 11.3549C23.9657 8.88213 23.9649 4.86738 21.5019 2.40513ZM19.9097 9.76713C19.7627 9.91413 19.5707 9.98838 19.3779 9.98838C19.1867 9.98838 18.9954 9.91563 18.8484 9.77013C18.5552 9.47763 18.5537 9.00363 18.8462 8.70963C19.8347 7.71588 19.8377 6.04338 18.8522 5.05788C18.5589 4.76463 18.5589 4.29063 18.8522 3.99738C19.1454 3.70413 19.6194 3.70413 19.9127 3.99738C21.4719 5.55663 21.4704 8.19963 19.9097 9.76713Z"
              fill="currentColor"
            />
          </svg>
        </RouterLink>
        <div class="flex flex-col gap-2 px-4 py-2">
          <RouterLink
            to="/signup"
            class="bg-site-primary text-white py-2 px-4 rounded-lg text-center"
          >
            تسجيل حساب جديد
          </RouterLink>
          <RouterLink
            to="/login"
            class="bg-white text-site-primary py-2 px-4 rounded-lg text-center dark:bg-gray-800 dark:text-white"
          >
            تسجيل الدخول
          </RouterLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute()

onMounted(() => {
  // Check localStorage for dark mode preference
  const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'enabled') {
      isDarkMode.value = true;
      document.documentElement.classList.add('dark');
    }
})
const isMenuOpen = ref()
const isDarkMode = ref()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
  localStorage.setItem('darkMode', isDarkMode.value ? 'enabled' : 'disabled')
}
// Toggle dark mode
document.documentElement.classList.toggle('dark');
</script>

<style scoped>

</style>
<template>
    <div class="bg-[#F8F8F7] relative flex justify-center items-center">
        <img src="/img/typo.png" class=" w-[800px] h-full left-0 absolute">
        <div v-if="!signupSuccess" class="flex flex-col items-center my-40 z-10">
            <h1 class=" text-site-secondary font-bold text-3xl mb-2">تسجيل حساب جديد</h1>
            <p class=" text-site-grey-secondary-secondary mb-10">الرجاء ادخال البيانات التالية</p>
            <form class="w-[400px]">
                <div class="mb-5">
                    <label for="email" class="block text-site-grey-secondary mb-2">البريد الإلكتروني</label>
                    <input
                    name="email"
                    type="email"
                    required
                    placeholder="email@email.com"
                    class="w-full bg-[#F8F8F7] h-[48px] py-2 px-6 rounded-full border"
                    :class=" false ? 'border-[#EF4444]' : 'border-[#EBE9E5]'"
                    >
                    <p v-if="false" class="error-text">Error Text is displayed here, up 2 lines</p>
                </div>
                <div class="mb-5">
                    <label for="name" class="block text-site-grey-secondary mb-2">الإسم</label>
                    <input
                    name="name"
                    type="text"
                    required
                    placeholder="احمد محمد"
                    class="w-full bg-[#F8F8F7] h-[48px] py-2 px-6 rounded-full border"
                    :class=" false ? 'border-[#EF4444]' : 'border-[#EBE9E5]'"
                    >
                    <p v-if="false" class="error-text">Error Text is displayed here, up 2 lines</p>
                </div>
                <div class="mb-5">
                    <label for="password" class="block text-site-grey-secondary mb-2">كلمة المرور</label>
                    <input
                    name="password"
                    type="password"
                    required
                    placeholder="********"
                    class="w-full bg-[#F8F8F7] h-[48px] py-2 px-6 rounded-full border border-[#EBE9E5]"
                    :class=" false ? 'border-[#EF4444]' : 'border-[#EBE9E5]'"
                    >
                    <p v-if="false" class="error-text">Error Text is displayed here, up 2 lines</p>
                </div>
                <div class="mb-5">
                    <label for="repassword" class="block text-site-grey-secondary mb-2">تأكيد كلمة المرور</label>
                    <input
                    name="repassword"
                    type="password"
                    required
                    placeholder="********"
                    class="w-full bg-[#F8F8F7] h-[48px] py-2 px-6 rounded-full border border-[#EBE9E5]"
                    :class=" false ? 'border-[#EF4444]' : 'border-[#EBE9E5]'"
                    >
                    <p v-if="false" class="error-text">Error Text is displayed here, up 2 lines</p>
                </div>
                <div class="mb-5">
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-site-primary bg-[#F8F8F7] accent-site-primary border-gray-300 rounded focus:ring-site-primary dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-checkbox" class="ms-2 text-sm font-medium text-site-primary dark:text-gray-300">سياسة الشروط والأحكام</label>
                    </div>
                </div>
                <button 
                class="w-full py-5 bg-site-primary text-white rounded-full mt-5"
                @click="signupSuccess = true"
                >
                    تأكيد
                </button>
                <RouterLink 
                to="/"
                class="w-full py-5 bg-[#F8F8F7] text-site-primary border border-site-primary rounded-full mt-5 block text-center"
                >
                    رجوع
                </RouterLink>
            </form>
        </div>
        <div class="flex flex-col items-center my-56 z-10" v-else>
            <div class=" size-28 bg-site-primary rounded-full flex justify-center items-center">
                <CheckIcon />
            </div>
            <h1 class=" text-site-secondary text-3xl my-6">تم انشاء الحساب بنجاح</h1>
            <RouterLink 
            to="/"
            class="w-full py-3 bg-[#F8F8F7] text-site-primary border border-site-primary rounded-full mt-5 block text-center"
            >
            الذهاب للصفحة الرئيسة
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import CheckIcon from '../components/icon/CheckIcon.vue'
const signupSuccess = ref(false)

</script>
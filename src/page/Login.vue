<template>
    <div class="bg-[#F8F8F7] relative flex justify-center items-center min-h-screen lg:mt-0 mt-10">
        <!-- Background Image (Hidden on small screens) -->
        <img src="/img/typo.png" class="sm:hidden block w-[800px] h-full left-0 absolute">

        <!-- Main Content -->
        <div class="flex flex-col items-center w-full px-4 py-10 lg:my-40 z-10">
            <!-- Heading -->
            <h1 class="text-site-secondary font-bold text-2xl lg:text-3xl mb-2">تسجيل الدخول</h1>
            <p class="text-site-grey-secondary text-sm lg:text-base mb-6 lg:mb-10">الرجاء ادخال البيانات التالية</p>

            <!-- Form -->
            <form class="w-full max-w-[400px]">
                <!-- Email Input -->
                <div class="mb-5">
                    <label for="email" class="block text-site-grey-secondary mb-2">البريد الإلكتروني</label>
                    <input
                        v-model="user.email"
                        name="email"
                        type="email"
                        placeholder="email@email.com"
                        class="w-full bg-[#F8F8F7] h-[48px] py-2 px-6 rounded-full border"
                        :class="requestConditions?.error?.email ? 'border-[#EF4444]' : 'border-[#EBE9E5]'"
                    >
                    <p v-if="requestConditions?.error?.email" class="error-text">{{ requestConditions.error.email[0] }}</p>
                </div>

                <!-- Password Input -->
                <div class="mb-5">
                    <label for="password" class="block text-site-grey-secondary mb-2">كلمة المرور</label>
                    <input
                        v-model="user.password"
                        name="password"
                        type="password"
                        placeholder="********"
                        class="w-full bg-[#F8F8F7] h-[48px] py-2 px-6 rounded-full border"
                        :class="requestConditions?.error?.password ? 'border-[#EF4444]' : 'border-[#EBE9E5]'"
                    >
                    <p v-if="requestConditions?.error?.password" class="error-text">{{ requestConditions.error.password[0] }}</p>
                </div>

                <!-- Forgot Password Link -->
                <RouterLink
                    to="/forgetpassword"
                    class="font-bold text-site-primary w-full text-center block mb-5"
                >
                    اعادة ضبط الرقم السري
                </RouterLink>

                <!-- Login Button -->
                <button
                    class="w-full py-3 lg:py-5 bg-site-primary text-white rounded-full mt-5 flex justify-center items-center"
                    @click.prevent="signinRequest"
                >
                    <span v-if="!requestConditions.loading">تأكيد</span>
                    <LoaderIcon v-else />
                </button>

                <!-- Sign Up Button -->
                <RouterLink
                    to="signup"
                    class="w-full py-3 lg:py-5 bg-[#F8F8F7] text-site-primary border border-site-primary rounded-full mt-5 block text-center"
                >
                    تسجيل حساب جديد
                </RouterLink>

                <!-- Google Sign-In Button -->
                <RouterLink
                    to=""
                    class="w-full py-3 lg:py-5 bg-[#F8F8F7] border border-[#EBE9E5] rounded-full mt-5 flex gap-2 items-center justify-center"
                >
                    <span class="text-site-secondary font-bold text-base lg:text-lg">Sign Up with Google</span>
                    <span>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z" fill="#FFC107"/>
                            <path d="M3.65234 7.3455L6.93784 9.755C7.82684 7.554 9.97984 6 12.4993 6C14.0288 6 15.4203 6.577 16.4798 7.5195L19.3083 4.691C17.5223 3.0265 15.1333 2 12.4993 2C8.65834 2 5.32734 4.1685 3.65234 7.3455Z" fill="#FF3D00"/>
                            <path d="M12.5002 22C15.0832 22 17.4302 21.0115 19.2047 19.404L16.1097 16.785C15.1057 17.5455 13.8577 18 12.5002 18C9.89916 18 7.69066 16.3415 6.85866 14.027L3.59766 16.5395C5.25266 19.778 8.61366 22 12.5002 22Z" fill="#4CAF50"/>
                            <path d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.7555 15.1185 17.036 16.083 16.108 16.7855L16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z" fill="#1976D2"/>
                        </svg>
                    </span>
                </RouterLink>
            </form>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router';

import { ref } from 'vue';
import { usePostRequest } from '../composables/useRequest';
import LoaderIcon from '../components/icon/loaderIcon.vue';
import { useUserStore } from '../stores/user';

const router = useRouter()
const userStore = useUserStore()

const requestConditions = ref({
    data: null,
    loading: false,
    error: null,
    message: null,
})
const user = ref({
    email: null,
    password: null,
})
const signinRequest = async () => {
    requestConditions.value.loading = true
    const { Data, Error} = await usePostRequest('accounts/login/',user.value)
    requestConditions.value.loading = false
    requestConditions.value.data = Data.value
    if(Error.value)
        requestConditions.value.error = Error.value
    else if(requestConditions.value.data) {
        userStore.signIn(requestConditions.value.data.authtoken,requestConditions.value.data.is_superuser,requestConditions.value.data.full_name,requestConditions.value.data.email,requestConditions.value.data.package_name,requestConditions.value.data.package_number)
        router.push('/')
    }

}
</script>
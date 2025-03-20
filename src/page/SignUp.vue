<template>
    <div class="bg-[#F8F8F7] relative flex justify-center items-center min-h-screen lg:mt-0 mt-12">
        <!-- Background Image (Hidden on small screens) -->
        <img src="/img/typo.png" class="sm:hidden block w-[800px] h-full left-0 absolute">

        <!-- Main Content -->
        <div v-if="!signupSuccess" class="flex flex-col items-center w-full px-4 py-10 lg:my-40 z-10">
            <!-- Heading -->
            <h1 class="text-site-secondary font-bold text-2xl lg:text-3xl mb-2">تسجيل حساب جديد</h1>
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
                        required
                        placeholder="email@email.com"
                        class="w-full bg-[#F8F8F7] h-[48px] py-2 px-6 rounded-full border"
                        :class="false ? 'border-[#EF4444]' : 'border-[#EBE9E5]'"
                    >
                    <p v-if="requestConditions?.error?.email" class="error-text">{{ requestConditions.error.email }}</p>
                </div>

                <!-- Name Input -->
                <div class="mb-5">
                    <label for="name" class="block text-site-grey-secondary mb-2">الإسم</label>
                    <input
                        v-model="user.first_name"
                        name="name"
                        type="text"
                        required
                        placeholder="احمد محمد"
                        class="w-full bg-[#F8F8F7] h-[48px] py-2 px-6 rounded-full border"
                        :class="false ? 'border-[#EF4444]' : 'border-[#EBE9E5]'"
                    >
                    <p v-if="requestConditions?.error?.first_name" class="error-text">{{ requestConditions.error.first_name }}</p>
                </div>

                <!-- Password Input -->
                <div class="mb-5">
                    <label for="password" class="block text-site-grey-secondary mb-2">كلمة المرور</label>
                    <input
                        v-model="user.password"
                        name="password"
                        type="password"
                        required
                        placeholder="********"
                        class="w-full bg-[#F8F8F7] h-[48px] py-2 px-6 rounded-full border"
                        :class="false ? 'border-[#EF4444]' : 'border-[#EBE9E5]'"
                    >
                    <p v-if="requestConditions?.error?.password" class="error-text">{{ requestConditions.error.password }}</p>
                </div>

                <!-- Confirm Password Input -->
                <div class="mb-5">
                    <label for="repassword" class="block text-site-grey-secondary mb-2">تأكيد كلمة المرور</label>
                    <input
                        v-model="user.confirm_password"
                        name="repassword"
                        type="password"
                        required
                        placeholder="********"
                        class="w-full bg-[#F8F8F7] h-[48px] py-2 px-6 rounded-full border"
                        :class="false ? 'border-[#EF4444]' : 'border-[#EBE9E5]'"
                    >
                    <p v-if="requestConditions?.error?.confirm_password" class="error-text">{{ requestConditions.error.confirm_password }}</p>
                </div>

                <!-- Terms and Conditions Checkbox -->
                <div class="mb-5">
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-site-primary bg-[#F8F8F7] accent-site-primary border-gray-300 rounded focus:ring-site-primary dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-checkbox" class="ms-2 text-sm font-medium text-site-primary dark:text-gray-300">سياسة الشروط والأحكام</label>
                    </div>
                </div>

                <!-- Non-Field Errors -->
                <p v-if="requestConditions?.error?.non_field_errors" class="error-text">{{ requestConditions.error.non_field_errors }}</p>

                <!-- Submit Button -->
                <button
                    class="w-full py-3 lg:py-5 bg-site-primary text-white rounded-full mt-5 flex justify-center items-center"
                    @click.prevent="signUpRequest"
                >
                    <span v-if="!requestConditions.loading">تأكيد</span>
                    <LoaderIcon v-else />
                </button>

                <!-- Back Link -->
                <RouterLink
                    to="/"
                    class="w-full py-3 lg:py-5 bg-[#F8F8F7] text-site-primary border border-site-primary rounded-full mt-5 block text-center"
                >
                    رجوع
                </RouterLink>
            </form>
        </div>

        <!-- Success Message -->
        <div v-else class="flex flex-col items-center w-full px-4 py-10 lg:my-56 z-10">
            <div class="size-20 lg:size-28 bg-site-primary rounded-full flex justify-center items-center">
                <CheckIcon />
            </div>
            <h1 class="text-site-secondary text-2xl lg:text-3xl my-6">تم انشاء الحساب بنجاح</h1>
            <RouterLink
                to="/"
                class="w-full max-w-[400px] py-3 bg-[#F8F8F7] text-site-primary border border-site-primary rounded-full mt-5 block text-center"
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
import { usePostRequest } from '../composables/useRequest';
import LoaderIcon from '../components/icon/loaderIcon.vue';
/* import router from '../../router';
 */import { useUserStore } from '../stores/user';

const userStore = useUserStore()
const signupSuccess = ref(false)

const requestConditions = ref({
    data: null,
    loading: false,
    error: null,
    message: null,
})
const user = ref({
    first_name: null,
    email: null,
    password: null,
    confirm_password: null,
})
const signUpRequest = async () => {
    requestConditions.value.loading = true
    const { Data, Error} = await usePostRequest('accounts/register/',user.value)
    requestConditions.value.loading = false
    requestConditions.value.data = Data.value
    if(Error.value?.errors)
        requestConditions.value.error = Error.value?.errors
    else if(requestConditions.value.data) {
        userStore.signIn(requestConditions.value.data.authtoken,requestConditions.value.data.is_superuser,requestConditions.value.data.full_name,requestConditions.value.data.email,requestConditions.value.data.package_name,requestConditions.value.data.package_number)
        signupSuccess.value = true
    }

}
</script>
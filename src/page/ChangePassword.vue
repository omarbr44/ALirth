<template>
    <div class="bg-[#F8F8F7] relative flex justify-center items-center">
        <img src="/img/typo.png" class=" w-[800px] h-full left-0 absolute">
        <div class="flex flex-col items-center my-36 z-10">
            <p class=" text-site-grey-secondary text-2xl font-medium mb-10">تغير كلمة الدخول</p>
            <form class="w-[400px]">
                <div class="mb-5 relative">
                    <label for="password" class="block text-site-grey-secondary mb-2">كلمة الدخول السابقة</label>
                    <input
                    name="password"
                    type="password"
                    ref="passwordInput"
                    placeholder="********"
                    class="w-full bg-[#F8F8F7] h-[48px] py-2 px-6 rounded-full border border-[#EBE9E5]"
                    :class=" false ? 'border-[#EF4444]' : 'border-[#EBE9E5]'"
                    >
                    <button  @click.prevent="togglePasswordVisible" class="absolute translate-x-[40px] translate-y-[13px]">
                        <svg v-show="!passwordVisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9A9384" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                        <svg v-show="passwordVisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9A9384" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>
                    <p v-if="false" class="error-text">Error Text is displayed here, up 2 lines</p>
                </div>
                <div class="mb-5">
                    <label for="password" class="block text-site-grey-secondary mb-2">كلمة الدخول الجديدة</label>
                    <input
                    name="password"
                    type="password"
                    ref="rePasswordInput"
                    placeholder="********"
                    class="w-full bg-[#F8F8F7] h-[48px] py-2 px-6 rounded-full border border-[#EBE9E5]"
                    :class=" true ? 'border-[#EF4444]' : 'border-[#EBE9E5]'"
                    >
                    <button  @click.prevent="toggleRePasswordVisible" class="absolute translate-x-[40px] translate-y-[13px]">
                        <svg v-show="!rePasswordVisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9A9384" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                        <svg v-show="rePasswordVisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9A9384" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>
                    <p v-if="false" class="error-text">Error Text is displayed here, up 2 lines</p>
                </div>
                <button 
                class="w-full py-5 bg-site-primary text-white rounded-full mt-5"
                >
                    تأكيد
                </button>
                <RouterLink 
                to="/otp"
                class="w-full py-5 bg-[#F8F8F7] text-site-primary border border-site-primary rounded-full mt-5 block text-center"
                >
                    رجوع
                </RouterLink>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const passwordInput = ref(null)
const passwordVisible = ref(false)
const togglePasswordVisible = () => {  

    if (passwordInput.value.type === "password") {
        passwordInput.value.type = "text";
        passwordVisible.value = true
    } else {
        passwordInput.value.type = "password";
        passwordVisible.value = false
    }
}
const rePasswordInput = ref(null)
const rePasswordVisible = ref(false)
const toggleRePasswordVisible = () => {  

    if (rePasswordInput.value.type === "password") {
        rePasswordInput.value.type = "text";
        rePasswordVisible.value = true
    } else {
        rePasswordInput.value.type = "password";
        rePasswordVisible.value = false
    }
}
</script>
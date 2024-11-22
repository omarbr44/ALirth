<template>
    <div class="bg-[#F8F8F7] relative flex justify-center items-center">
        <img src="/img/typo.png" class=" w-[800px] h-full left-0 absolute">
        <div class="flex flex-col items-center my-36 z-10">
            <p class=" text-site-grey-secondary text-2xl font-medium mb-10">اعادة ضبط الرقم السري</p>
            <form class="w-[400px]">
                <div class="mb-5">
                    <label for="email" class="block text-site-grey-secondary mb-2">البريد الإلكتروني</label>
                    <input
                    name="email"
                    type="email"
                    placeholder="email@email.com"
                    class="w-full bg-[#F8F8F7] h-[48px] py-2 px-6 rounded-full border"
                    :class=" false ? 'border-[#EF4444]' : 'border-[#EBE9E5]'"
                    >
                    <p v-if="false" class="error-text">Error Text is displayed here, up 2 lines</p>
                </div>
                <RouterLink  to="otp"
                class="w-full py-5 bg-site-primary text-white rounded-full mt-5 block text-center"
                >
                    تأكيد
                </RouterLink>
  <!--               <button 
                class="w-full py-5 bg-site-primary text-white rounded-full mt-5"
                >
                    تأكيد
                </button> -->
                <RouterLink 
                to="login"
                class="w-full py-5 bg-[#F8F8F7] text-site-primary border border-site-primary rounded-full mt-5 block text-center"
                >
                    رجوع
                </RouterLink>
                <RouterLink 
                to=""
                class="w-full py-5 bg-[#F8F8F7] border border-[#EBE9E5] rounded-full mt-5 flex gap-2 items-center justify-center"
                >
                    <span class=" text-site-secondary font-bold text-lg">Sign Up with Google</span>
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
import { RouterLink } from 'vue-router';


</script>
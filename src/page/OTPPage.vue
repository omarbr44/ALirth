<template>
    <div class="bg-[#F8F8F7] relative flex justify-center items-center">
        <img src="/img/typo.png" class=" w-[800px] h-full left-0 absolute">
        <div class="flex flex-col items-center my-36 z-10">
            <p class=" text-site-grey-secondary text-2xl font-medium mb-10">تم ارسال رقم التحقق</p>
            <form class="w-[400px]">
                <div class="mb-5 d-ltr">
                    <v-otp-input
                    ref="otpInput"
                    class="justify-center"
                    input-classes="otp-input"
                    :conditionalClass="['one', 'two', 'three', 'four']"
                    separator=""
                    inputType="letter-numeric"
                    :num-inputs="4"
                    v-model:value="bindValue"
                    :should-auto-focus="true"
                    :should-focus-order="true"
                    :placeholder="['-', '-', '-', '-']"
                    />
                    <button class=" ml-14 my-5">إعادة ارسال</button>
                    <p v-if="false" class="error-text">Error Text is displayed here, up 2 lines</p>
                </div>
                <div class="bg-[#E2F2FF] text-site-secondary mt-5 w-full flex justify-between p-3 rounded-xl text-sm">
                    <div class="flex items-center gap-3">
                        <InfoIcon />
                        <p>يتم ارسال رمز التحقق البريد الإلكتروني الاساسي المسجل لدينا</p>
                    </div>
                    <XIcon />
                </div>
                <RouterLink  to="changepassword"
                class="w-full py-5 bg-site-primary text-white rounded-full mt-5 block text-center"
                >
                    تأكيد
                </RouterLink>
<!--                 <button 
                class="w-full py-5 bg-site-primary text-white rounded-full mt-5"
                >
                    تأكيد
                </button> -->
                <RouterLink 
                to="/forgetpassword"
                class="w-full py-5 bg-[#F8F8F7] text-site-primary border border-site-primary rounded-full mt-5 block text-center"
                >
                    رجوع
                </RouterLink>
            </form>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import InfoIcon from '../components/icon/InfoIcon.vue';
import XIcon from '../components/icon/XIcon.vue';


</script>
<style>
.otp-input {
  width: 51px;
  height: 51px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  background-color: #F8F8F7;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 100%;
  text-align: center;
}
/* Background colour of an input field with value */
.otp-input.is-complete {
    background-color: #F8F8F7;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
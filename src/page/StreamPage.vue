<template>
    <div class="bg-black overflow-hidden">
        <template v-if="!pageLoad">
            <!-- Hero Section -->
            <section class="hero-section bg-center h-screen w-full flex flex-col justify-end" :style="{ backgroundImage: `url(${episodes[0].image})` }">
                <div class="w-full lg:w-2/4 px-4 lg:px-16">
                    <div class="flex flex-col lg:flex-row gap-4 items-center">
                        <p class="text-white text-sm">{{ turnSecondsToHour(episodes[0].time) }}</p>
                        <p class="text-white text-sm">Season 1 | {{ episodes[0].name }}</p>
                        <p class="text-white text-sm">{{ episodes[0].create_at.slice(0,4) }}</p>
                    </div>
                    <p class="text-white text-sm my-5">
                        {{ episodes[0].description }}
                    </p>
                    <div class="w-full flex flex-col bg-[#131209] rounded-full -translate-y-1">
                        <div class="w-[70%] flex bg-site-primary rounded-full py-1"></div>
                    </div>
                    <div class="w-full flex justify-between items-center">
                        <p class="text-white text-sm">60%</p>
                        <p class="text-white text-sm">{{ turnSecondsToHour(episodes[0].time) }}</p>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row items-center px-4 lg:px-16 py-4 justify-between mt-4 bg-black bg-opacity-80">
                    <div class="flex items-center gap-4">
                        <RouterLink 
                            :to="'/stream-video/'+episodes[0].id"
                            class="bg-site-primary text-white py-3 px-4 rounded-3xl"
                        >
                            استكمال المشاهدة
                        </RouterLink>
<!--                         <button class="flex justify-center items-center p-2 border rounded-full border-white">
                            <HeartIcon />
                        </button> -->
                    </div>
<!--                     <button class="flex items-center gap-4 text-white mt-4 lg:mt-0">
                        <span class="text-lg">share</span>
                        <ShareIcon />
                    </button> -->
                </div>
            </section>

            <!-- Cards Section -->
            <section class="cards-section my-10 px-4 lg:px-16">
                <div class="flex flex-col lg:flex-row items-center gap-4 text-[#BFBCB0]">
                    <p class="text-site-primary border-b border-site-primary pb-1">الحلقات</p>
<!--                     <p class="pb-1">المزيد من المعلومات</p>
                    <p class="pb-1">ذات صلة</p>
                    <p class="pb-1">عن الشيخ محمد</p> -->
                </div>
                <div class="w-full h-[1px] bg-[#807D6B]"></div>
                <div class="select-container my-10">
                    <select v-model="seasonValue">
                        <option value="" selected>اختر الخطة</option>
                        <option v-for="(season,index) in seasons" :key="index" :value="season.id">{{ season.name }}</option>
                    </select>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-5 my-10">
                    <RouterLink v-for="(ep,index) in episodes" :key="index" :to="'/stream-video/'+ep.id" class="bg-site-dark-primary w-full min-h-[312px] border border-[#2D2D2D] rounded-[20px]">
                        <img :src="ep.image ? ep.image :'/img/Course-Images.png'" alt="Course-Images" class="w-full h-2/5">
                        <div class="w-full flex bg-[#C0C0C0] rounded-full -translate-y-1">
                            <div class="w-[70%] flex bg-site-primary rounded-full py-1"></div>
                        </div>
                        <div class="flex px-4 justify-between items-center my-2">
                            <h1 class="text-2xl font-semibold gradiant-text" style="background-image: linear-gradient(90deg, #FFFFFF 0%, #C4A159 100%);">
                                عنوان الحلقة
                            </h1>
                            <button>
                                <DotsIcon />
                            </button>
                        </div>
                        <div class="flex px-4 justify-between items-center mb-4">
                            <p class="text-white font-bold">{{ ep.name }}</p>
                            <div class="bg-white text-site-primary text-xs rounded-3xl px-3 py-2">
                                {{ ep.season }}
                            </div>
                        </div>
                        <hr>
                        <div class="flex px-4 items-center justify-between my-4">
                            <div class="flex gap-2 items-center">
                                <img src="/img/profile-img-course.png" alt="profile-img">
                                <p class="text-white">{{ ep.instructor.name }}</p>
                            </div>
                            <div class="text-white text-s flex items-center gap-1">
                                <span>{{ turnSecondsToHour(ep.time) }}</span>
                                <ClockIcon />
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </section>
        </template>
        <div v-else class="h-screen flex justify-center items-center">
            <LoaderIcon />
        </div>

        <!-- Footer -->
        <footer class="bg-site-dark-primary w-full rounded-s-3xl rounded-e-3xl pt-10">
            <div class="flex flex-col lg:flex-row justify-evenly w-full px-4 lg:px-0">
                <div class="mb-8 lg:mb-0">
                    <img src="/img/Logo.png" alt="logo">
                    <p class="text-white font-medium text-2xl my-3">Alerth Alnabawi</p>
                    <p class="text-white mb-5 w-full lg:w-1/2">support@Alerth.com
                        +1 (040) 2351 3690
                    </p>
                    <div class="flex gap-6 items-center w-full">
                        <svg width="26" height="27" viewBox="0 0 26 27" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <!-- SVG Path -->
                        </svg>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- SVG Path -->
                        </svg>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- SVG Path -->
                        </svg>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- SVG Path -->
                        </svg>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- SVG Path -->
                        </svg>
                    </div>
                </div>
                <div class="text-white mb-8 lg:mb-0">
                    <p class="font-bold mb-4">الروابط</p>
                    <a class="mb-2 block">الرئيسية</a>
                    <a class="mb-2 block">اتصل بنا</a>
                    <a class="mb-2 block">مركز خدمة العملاء</a>
                    <a class="mb-2 block">الشروط والأحكام</a>
                    <a class="mb-2 block">سياسة الخصوصية</a>
                </div>
                <div>
                    <p class="font-bold mb-4 text-white">تحميل التطبيق</p>
                    <img class="mb-2" src="/img/download-app.png" alt="download-app">
                    <img src="/img/download-app2.png" alt="download-app">
                </div>
            </div>
            <div class="w-full bg-site-primary text-white text-center font-bold py-6 mt-8">جميع الحقوق محفوظة 2024</div>
        </footer>
    </div>
</template>

<script setup>
import HeartIcon from '../components/icon/HeartIcon.vue'
import ShareIcon from '../components/icon/ShareIcon.vue'
import DotsIcon from '../components/icon/3DotsIcon.vue'
import ClockIcon from '../components/icon/ClockIcon.vue'
import { onMounted, ref, watch } from 'vue';
import { useGetRequest } from '../composables/useRequest';
import { RouterLink,useRoute } from 'vue-router';
import turnSecondsToHour from '../composables/useSecondsToHour';
import LoaderIcon from '../components/icon/loaderIcon.vue';

const route = useRoute()
const program = ref()
const episodes = ref()
const seasons = ref()
const seasonValue = ref()
const pageLoad = ref(true)

onMounted(async ()=>{
  const { Data} = await useGetRequest('programes/'+route.params.id)
  program.value = Data.value.data
  const { Data:seasonss} = await useGetRequest('seasons/?program='+route.params.id)
  seasons.value = seasonss.value.data
  const { Data:eps} = await useGetRequest('episodes/?season='+seasons.value[0].id)
  episodes.value = eps.value.data.result
  seasonValue.value = seasons.value[0].id
  pageLoad.value = false

})

watch(seasonValue, async ()=>{
    const { Data } = await useGetRequest('episodes/?season='+seasonValue.value)
    episodes.value = Data.value.data.result
    console.log(episodes.value)
})
</script>

<style scoped>
.hero-section {
    background-size: cover;
}
.select-container {
    position: relative;
    width: 100%;
    max-width: 300px;
}
.select-container select {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    color: white;
    border: 1px solid #ccc;
    border-radius: 20px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: black;
    cursor: pointer;
}
.select-container::after {
    content: '▼';
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    pointer-events: none;
    color: white;
}
</style>
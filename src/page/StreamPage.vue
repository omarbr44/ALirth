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
                    <div v-for="(ep,index) in episodes" :key="index" class="bg-site-dark-primary w-full min-h-[312px] border border-[#2D2D2D] rounded-[20px]">
                              <RouterLink 
                                :to="'/stream-video/'+ep.id">
                                <img :src="ep.image ? ep.image :'/img/Course-Images.png'" alt="Course-Images" class="w-full h-2/5 rounded-[20px]">
                              </RouterLink>
                        <div class="w-full flex bg-[#C0C0C0] rounded-full -translate-y-1">
                            <div class="w-[70%] flex bg-site-primary rounded-full py-1"></div>
                        </div>
                        <div class="flex px-4 justify-between items-center my-2">
                            <h1 class="text-2xl font-semibold gradiant-text" style="background-image: linear-gradient(90deg, #FFFFFF 0%, #C4A159 100%);">
                                عنوان الحلقة
                            </h1>
                            <div class="relative" ref="dropdownRef">
    <!-- Button -->
    <button 
      @click="toggleDropdown(index)"
      class="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <DotsIcon />
    </button>

    <!-- Dropdown Menu -->
    <transition
  enter-active-class="transition ease-out duration-100"
  enter-from-class="transform opacity-0 scale-95"
  enter-to-class="transform opacity-100 scale-100"
  leave-active-class="transition ease-in duration-75"
  leave-from-class="transform opacity-100 scale-100"
  leave-to-class="transform opacity-0 scale-95"
>
<div
      v-show="openStates[index]"
      class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100"
    >
      <button
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-start"
        @click="openFavoriteModal(ep.id, index)"
      >
        إضافة إلى المفضلة
      </button>
      <RouterLink 
        :to="'/stream-video/'+ep.id"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-start"
      >
        الذهاب إلى {{ ep.name }}
      </RouterLink>
      <RouterLink 
        :to="'/teacher-view/'+ep.instructor.id"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-start"
      >
        الذهاب إلى {{ ep.instructor.name }}
      </RouterLink>
    </div>
</transition>

  </div>

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
                    </div>
                </div>
            </section>
            <!-- Modal Overlay -->
            <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <!-- Modal Content -->
              <div class="bg-white dark:bg-gray-800 rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
                <h2 class="text-lg font-bold mb-4 dark:text-white">اختر قائمة التشغيل</h2>
                <form @submit.prevent="addTofavorite">
                    <div class="">
                        <div v-for="(list,index) in playlists" :key="index" class="flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700">
                            <input id="bordered-radio-1" v-model="selectedPlaylist" type="radio" :value="list.id" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600">
                            <label for="bordered-radio-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ list.name }}</label>
                        </div>
                    </div>
                    <div class="flex justify-between mt-7">
                        <button
                            class="p-2 dark:text-white bg-site-primary rounded focus:outline-none font-bold"
                        >
                            <span v-if="!loadingRequest">إضافة</span>
                            <LoaderIcon v-else />
                        </button>
                        <!-- Close Button -->
                        <button
                          @click="closeModal"
                          class="p-2 bg-red-500 text-white rounded focus:outline-none"
                        >
                        <span>إغلاق</span>
                        </button>
                    </div>
                </form>
              </div>
            </div>
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
import { useGetRequest, usePostRequest } from '../composables/useRequest';
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

  /* document.addEventListener('click', handleClickOutside); */
})

watch(seasonValue, async ()=>{
    const { Data } = await useGetRequest('episodes/?season='+seasonValue.value)
    episodes.value = Data.value.data.result
    console.log(episodes.value)
})

const openStates = ref({}); // Track open state for each item
const dropdownRef = ref(null);

const toggleDropdown = (index) => {
  openStates.value = {
    ...openStates.value,
    [index]: !openStates.value[index]
  };
};

const closeDropdown = (index) => {
  openStates.value = {
    ...openStates.value,
    [index]: false
  };
};

const loadingRequest = ref(false)

/* const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
}; */

const isModalOpen = ref(false)
const playlists = ref()
const selectedEp = ref()
const selectedPlaylist = ref()

const openFavoriteModal = async (id, index) => {
    selectedEp.value = id

    closeDropdown(index)

    const { Data } = await useGetRequest('accounts/play_lists/')
    playlists.value = Data.value.data.result

    isModalOpen.value = true
}

const closeModal = () => {
    isModalOpen.value = false
}

const addTofavorite = async () => {
    loadingRequest.value = true

    const body = {
        playlist: selectedPlaylist.value, 
        episode: selectedEp.value, 
    }
    const { Data, Error} = await usePostRequest('accounts/episode_addition/', body)

    loadingRequest.value = false
    closeModal()
}
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
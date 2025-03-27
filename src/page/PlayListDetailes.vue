<template>
    <div class="dark:bg-black overflow-hidden w-full">
      <section v-if="!pageLoad" class="cards-section mt-64 mb-20 px-28 md:px-20 sm:px-8 ">
            <h1 class="text-5xl sm:text-3xl text-site-primary font-bold mt-12 text-center">{{ playlist.name }}</h1>
            <section class="cards-section my-10 px-4 lg:px-16">
                <div v-if="episodes.length" class="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-5 my-10">
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
                <div v-else>
                    <h1 class="text-5xl sm:text-3xl text-site-primary font-bold mt-12 text-center">لا توجد حلقات في القائمة</h1>
                </div>
            </section>
      </section>
      <div v-else class=" h-screen flex justify-center items-center">
          <LoaderIcon />
      </div> 
      <footer class="bg-black w-full rounded-s-3xl rounded-e-3xl pt-10">
        <div class="">
          <!-- Footer Content -->
          <div class="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 px-20">
            <!-- Logo and Contact Info -->
            <div class="text-center lg:text-left">
              <img src="/img/Logo.png" alt="logo" class="mx-auto lg:mx-0" />
              <p class="text-white font-medium text-2xl my-3">Alerth Alnabawi</p>
              <p class="text-white mb-5">
                support@Alerth.com<br />
                +1 (040) 2351 3690
              </p>
              <div class="flex justify-center lg:justify-start gap-6">
                <!-- Social Icons -->
                <a href="#" class="text-white hover:text-site-primary transition-colors">
                  <svg width="26" height="27" viewBox="0 0 26 27" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <!-- SVG Path -->
                  </svg>
                </a>
                <a href="#" class="text-white hover:text-site-primary transition-colors">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <!-- SVG Path -->
                  </svg>
                </a>
                <a href="#" class="text-white hover:text-site-primary transition-colors">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <!-- SVG Path -->
                  </svg>
                </a>
                <a href="#" class="text-white hover:text-site-primary transition-colors">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <!-- SVG Path -->
                  </svg>
                </a>
              </div>
            </div>

            <!-- Links Section -->
            <div class="text-center lg:text-left">
              <p class="font-bold mb-4 text-white">الروابط</p>
              <div class="flex flex-col gap-2">
                <a href="#" class="text-white hover:text-site-primary transition-colors">الرئيسية</a>
                <a href="#" class="text-white hover:text-site-primary transition-colors">اتصل بنا</a>
                <a href="#" class="text-white hover:text-site-primary transition-colors">مركز خدمة العملاء</a>
                <a href="#" class="text-white hover:text-site-primary transition-colors">الشروط والأحكام</a>
                <a href="#" class="text-white hover:text-site-primary transition-colors">سياسة الخصوصية</a>
              </div>
            </div>

            <!-- Download App Section -->
            <div class="text-center lg:text-left">
              <p class="font-bold mb-4 text-white">تحميل التطبيق</p>
              <div class="flex flex-col gap-2">
                <img src="/img/download-app.png" alt="download-app" class="mx-auto lg:mx-0" />
                <img src="/img/download-app2.png" alt="download-app" class="mx-auto lg:mx-0" />
              </div>
            </div>
          </div>

          <!-- Copyright Section -->
          <div class="w-full bg-site-primary text-white text-center font-bold py-6 mt-8">
            جميع الحقوق محفوظة 2024
          </div>
        </div>
      </footer>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useGetRequest } from '../composables/useRequest';
import { RouterLink,useRoute } from 'vue-router';
import LoaderIcon from '../components/icon/loaderIcon.vue';
import turnSecondsToHour from '../composables/useSecondsToHour';
import ClockIcon from '../components/icon/ClockIcon.vue';

const route = useRoute()
const playlist = ref()
const episodes = ref([])
const pageLoad = ref(true)

onMounted(async ()=>{
  const { Data } = await useGetRequest('accounts/episode_addition/?playlist=' + route.params.id)
  playlist.value = Data.value.data.result
  for (const ep of playlist.value) {
  const { Data } = await useGetRequest('episodes/' + ep.episode)
  episodes.value.push(Data.value.data)
}
  pageLoad.value = false
})
</script>

<style>

</style>
<template>
    <div class="dark:bg-black overflow-hidden w-full">
      <section v-if="!pageLoad" class="cards-section mt-64 mb-20 px-28 md:px-20 sm:px-8 ">
            <h1 class="text-5xl sm:text-3xl text-site-primary font-bold mt-12 text-center">{{ category.name }}</h1>
            <h1 class="text-5xl sm:text-3xl dark:text-white font-bold mt-20 translate-y-[15px]"> الحلقات الأكثر <span class=" text-site-primary">مشاهدة</span></h1>
            <div class="flex items-center gap-5 gap-y-10 my-10 flex-wrap">
                <div v-for="index in 4" class=" bg-site-dark-primary w-[23%] sm:w-full md:w-[47%] min-h-[312px] border border-[#2D2D2D] rounded-[20px]">
                        <img src="/img/Course-Images.png" class="w-full" alt="Course-Images">
                        <div class="w-full flex bg-[#C0C0C0] rounded-full -translate-y-1">
                            <div class="w-[70%] flex bg-site-primary rounded-full py-1"></div>
                        </div>

                        <div class="flex px-4 justify-between items-center my-2">
                            <h1 class=" text-2xl font-semibold gradiant-text"
                            style="background-image: linear-gradient(90deg, #FFFFFF 0%, #C4A159 100%);"
                            >
                                عنوان الحلقة
                            </h1>
                            <button>
                                <DotsIcon />
                            </button>
                        </div>
                        <div class="flex px-4 justify-between items-center mb-4">
                            <p class=" text-white font-bold" >الحلقة ال ١٩</p>
                            <div class=" bg-white text-site-primary text-xs rounded-3xl px-3 py-2">
                                الموسم الأول
                            </div>
                        </div>
                        <hr>
                        <div class="flex px-4 items-center justify-between my-4">
                            <div class="flex gap-2 items-center">
                                <img src="/img/profile-img-course.png" alt="profile-img">
                                <p class="text-white">أحمد بن سميط</p>
                            </div>
                            <div class="text-white text-s flex items-center gap-1">
                                <span>1h 47m</span> 
                                <ClockIcon />  
                            </div>
                        </div>
                </div>
            </div>
            <div class="w-full border-b text-white p-2 mt-20 flex items-center gap-3">
                <button class="text-site-primary font-semibold">البرامج</button>
                <!-- <button>الحلقات</button> -->
            </div>
            <div class="flex items-center gap-5 gap-y-10 my-10 flex-wrap">
                <RouterLink v-for="(program,index) in programes" :key="index" :to="'/stream/'+program.id" class=" bg-site-dark-primary w-[30%] sm:w-full md:w-[47%] min-h-[312px] border border-[#2D2D2D] rounded-[20px]">
                        <img :src="program.image" class="w-full rounded-[20px]" alt="Course-Images">
                        <!-- <div class="w-full flex bg-[#C0C0C0] rounded-full -translate-y-1">
                            <div class="w-[70%] flex bg-site-primary rounded-full py-1"></div>
                        </div> -->

                        <div class="flex px-4 justify-between items-center my-2">
                            <h1 class=" text-2xl font-semibold gradiant-text"
                            style="background-image: linear-gradient(90deg, #FFFFFF 0%, #C4A159 100%);"
                            >
                                {{ program.name }}
                            </h1>
                            <button>
                                <DotsIcon />
                            </button>
                        </div>
                        <div class="flex px-4 gap-1 items-center my-3 justify-end">
                          <div v-for="(tag,indexx) in program.name_index" :key="indexx" class=" bg-site-primary text-white text-xs rounded-3xl px-3 py-2">
                              {{ tag.name }}
                          </div>
                        </div>
                        <p class="px-4 text-white mb-3">{{ program.description }}</p>
                        <hr>
                        <div class="flex px-4 items-center justify-between my-4">
                            <div class="flex gap-2 items-center">
                                <img :src="program.instructor.image" alt="profile-img" class=" w-12">
                                <p class="text-white">{{ program.instructor.name }}</p>
                            </div>
                            <div class=" bg-[#EBE9E5] text-site-primary text-xs rounded-3xl px-2 py-1 min-w-max">
                            متوفر {{ program.season_count }} مواسم
                        </div>
                        </div>
                </RouterLink>
            </div>
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

const route = useRoute()
const category = ref()
const programes = ref()
const pageLoad = ref(true)

onMounted(async ()=>{
  const { Data} = await useGetRequest('categories/'+route.params.id)
  category.value = Data.value.data
  const { Data:programess} = await useGetRequest('programes/?index='+route.params.id)
  programes.value = programess.value.data.result
  pageLoad.value = false
/*   const { Data:programess} = await useGetRequest('programes/?episodes='+route.params.id)
  programes.value = programess.value.data.result */
})
</script>

<style>

</style>
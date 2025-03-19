<template>
    <div class="bg-[#F8F8F7] overflow-hidden">
      <!-- Hero Swiper Section -->
      <section class="hero-swiper">
        <swiper-container class="mySwiper" init="false">
          <swiper-slide v-for="(data, index) in homeData?.carousel" :key="index">
            <div
              class="bg-center h-screen flex flex-col justify-center bg-no-repeat"
              :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.image_web})` }"
            >
              <div class="px-28 md:px-20 sm:px-8">
                <p class="text-site-primary text-lg sm:text-base">{{ data.program.description }}</p>
                <h1 class="text-white font-bold text-6xl lg:text-4xl md:text-3xl sm:text-2xl my-4">
                  {{ data.program.name }}
                </h1>
                <div class="flex items-center gap-10 mt-10 sm:gap-4">
                  <RouterLink
                    :to="'/stream/' + data.program.id"
                    class="flex items-center justify-center gap-2 bg-site-primary rounded-full px-12 py-4 sm:px-8 sm:py-3"
                  >
                    <VideoPlayIcon />
                    <span class="text-white font-semibold">شاهد الان</span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- Custom Pagination -->
          <div class="custom-pagination">
            <button class="swiper-pagination-bullet bg-white p-3 w-fit" data-index="0">
              <h1 class="text-lg sm:text-base">{{ homeData?.carousel[0].program?.name }}</h1>
              <p class="text-site-grey-secondary mb-2 sm:text-sm">{{ homeData?.carousel[0].program?.description.slice(0, 70) }}</p>
              <div class="swiper-pagination-bullet-outerdiv flex justify-between items-center">
                <div class="flex items-center gap-1 swiper-pagination-bullet-innerdiv">
                  <CalenderIcon class="w-6 h-6 sm:w-4 sm:h-4" />
                  <span class="text-site-grey-secondary sm:text-sm">كل جمعة</span>
                </div>
                <div class="swiper-pagination-bullet-button sm:text-sm">شاهد</div>
              </div>
            </button>
          </div>
          <div class="custom-pagination2">
            <button class="swiper-pagination-bullet bg-white p-3 w-fit" data-index="1">
              <h1 class="text-lg sm:text-base">{{ homeData?.carousel[1].program?.name }}</h1>
              <p class="text-site-grey-secondary mb-2 sm:text-sm">{{ homeData?.carousel[1].program?.description.slice(0, 70) }}</p>
              <div class="swiper-pagination-bullet-outerdiv flex justify-between items-center">
                <div class="flex items-center gap-1 swiper-pagination-bullet-innerdiv">
                  <CalenderIcon class="w-6 h-6 sm:w-4 sm:h-4" />
                  <span class="text-site-grey-secondary sm:text-sm">كل جمعة</span>
                </div>
                <div class="swiper-pagination-bullet-button sm:text-sm">شاهد</div>
              </div>
            </button>
          </div>
          <div class="custom-pagination3">
            <button class="swiper-pagination-bullet bg-white p-3 w-fit" data-index="2">
              <h1 class="text-lg sm:text-base">{{ homeData?.carousel[2].program?.name }}</h1>
              <p class="text-site-grey-secondary mb-2 sm:text-sm">{{ homeData?.carousel[2].program?.description.slice(0, 70) }}</p>
              <div class="swiper-pagination-bullet-outerdiv flex justify-between items-center">
                <div class="flex items-center gap-1 swiper-pagination-bullet-innerdiv">
                  <CalenderIcon class="w-6 h-6 sm:w-4 sm:h-4" />
                  <span class="text-site-grey-secondary sm:text-sm">كل جمعة</span>
                </div>
                <div class="swiper-pagination-bullet-button sm:text-sm">شاهد</div>
              </div>
            </button>
          </div>
          <!-- Repeat for custom-pagination2 and custom-pagination3 -->
        </swiper-container>
      </section>
  
      <!-- Continue Watching Section -->
      <template v-if="!pageLoad">
        <section v-if="homeData?.stop_places.length" class="cards-section my-10 px-28 md:px-20 sm:px-8">
          <h1 class="text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-site-secondary font-bold mt-40 translate-y-[15px]">
            متابعة <span class="text-site-primary">المشاهدة</span>
          </h1>
          <swiper-container class="mySwiper2" pagination="true" init="false">
            <swiper-slide v-for="(slide, index) in episodsContinue" :key="index" class="flex gap-2 pt-16 sm:pt-8">
              <RouterLink
                v-for="(ep, indexx) in slide"
                :key="ep.episode"
                :to="'/stream-video/' + ep.episode"
                class="bg-white w-1/4 lg:w-1/3 md:w-1/2 sm:w-full min-h-[360px] border border-[#E9EAF0] rounded-[20px]"
              >
                <img :src="ep.image" alt="Course-Images" class="w-full h-2/5 object-cover" />
                <div class="w-full flex bg-[#C0C0C0] rounded-full -translate-y-1">
                  <div class="w-[70%] flex bg-site-primary rounded-full py-1"></div>
                </div>
                <div class="flex px-4 justify-between items-center my-2">
                  <h1
                    class="text-2xl lg:text-xl md:text-lg sm:text-base font-semibold gradiant-text"
                    style="background-image: linear-gradient(90deg, #131413 0%, #C4A159 100%);"
                  >
                    {{ ep.name }}
                  </h1>
                  <button>
                    <DotsIcon class="w-6 h-6 sm:w-4 sm:h-4" />
                  </button>
                </div>
                <div class="flex px-4 justify-between items-center mb-4">
                  <p class="text-site-secondary font-bold sm:text-sm">{{ ep.name }}</p>
                  <div class="bg-[#F8F3EA] text-site-primary text-xs rounded-3xl px-3 py-2 sm:px-2 sm:py-1">
                    {{ ep.season }}
                  </div>
                </div>
                <hr />
                <div class="flex px-4 items-center justify-between my-4">
                  <div class="flex gap-2 items-center">
                    <img src="/img/profile-img-course.png" alt="profile-img" class="w-8 h-8 sm:w-6 sm:h-6" />
                    <p class="text-[#999999] sm:text-sm">{{ ep.instructor.name }}</p>
                  </div>
                  <div class="text-site-primary text-s flex items-center gap-1 sm:text-xs">
                    <span>{{ turnSecondsToHour(ep.time) }}</span>
                    <ClockIcon class="w-4 h-4 sm:w-3 sm:h-3" />
                  </div>
                </div>
              </RouterLink>
            </swiper-slide>
          </swiper-container>
        </section>
  
        <!-- Label Sections -->
        <section v-for="(section, index) in homeData?.labes" :key="index" class="cards-section-3 my-10 px-28 md:px-20 sm:px-8">
          <h1 class="text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-site-secondary font-bold mt-16 translate-y-[15px]">
            {{ section.name }}
          </h1>
          <swiper-container :class="'mySwiper4' + index" pagination="true" init="false">
            <swiper-slide v-for="(slide, slideIndex) in episods[index]" :key="slideIndex" class="flex gap-2 pt-16 sm:pt-8">
              <RouterLink
                v-for="(ep, epIndex) in slide"
                :key="epIndex"
                :to="section.type_label ? '/stream/' + ep.id : '/stream-video/' + ep.id"
                class="w-1/4 lg:w-1/3 md:w-1/2 sm:w-full h-48 rounded-[20px] bg-contain flex justify-center items-center relative"
              >
                <img :src="ep.image" alt="image" class="w-full h-full absolute" />
                <VideoPlayIcon class="relative z-10" />
              </RouterLink>
            </swiper-slide>
          </swiper-container>
        </section>
  
        <!-- Video Section -->
        <section class="Video-section my-10 px-28 md:px-20 sm:px-8">
          <h1 class="text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-site-secondary font-bold mb-10">
            البث <span class="text-site-primary">المباشر</span>
          </h1>
          <img class="px-20 md:px-10 sm:px-4" src="/img/Video-section.png" alt="video" />
        </section>
  
        <!-- Footer -->
        <footer class="bg-white w-full rounded-s-3xl rounded-e-3xl pt-10">
          <div class="flex justify-evenly w-full flex-wrap px-28 md:px-20 sm:px-8">
            <div class="w-1/3 lg:w-1/2 sm:w-full mb-8 sm:mb-6">
              <img src="/img/Logo.png" alt="logo" class="w-24 h-auto sm:w-20" />
              <p class="text-site-secondary font-medium text-2xl lg:text-xl md:text-lg sm:text-base my-3">
                Alerth Alnabawi
              </p>
              <p class="text-[#222222] mb-5 w-1/2 lg:w-full sm:w-full sm:text-sm">
                support@Alerth.com +1 (040) 2351 3690
              </p>
              <div class="flex gap-6 items-center w-full">
                <!-- SVG Icons (Replace with your SVGs) -->
              </div>
            </div>
            <div class="w-1/3 lg:w-1/2 sm:w-full mb-8 sm:mb-6">
              <p class="font-bold mb-4 sm:text-lg">الروابط</p>
              <a class="mb-2 block sm:text-sm">الرئيسية</a>
              <a class="mb-2 block sm:text-sm">اتصل بنا</a>
              <a class="mb-2 block sm:text-sm">مركز خدمة العملاء</a>
              <a class="mb-2 block sm:text-sm">الشروط والأحكام</a>
              <a class="mb-2 block sm:text-sm">سياسة الخصوصية</a>
            </div>
            <div class="w-1/3 lg:w-1/2 sm:w-full mb-8 sm:mb-6">
              <p class="font-bold mb-4 sm:text-lg">تحميل التطبيق</p>
              <img class="mb-2 w-48 sm:w-36" src="/img/download-app.png" alt="download-app" />
              <img class="w-48 sm:w-36" src="/img/download-app2.png" alt="download-app" />
            </div>
          </div>
          <div class="w-full bg-site-primary text-white text-center font-bold py-6 mt-8 sm:text-sm">
            جميع الحقوق محفوظة 2024
          </div>
        </footer>
      </template>
    </div>
    <div v-if="pageLoad" class="h-screen flex justify-center items-center">
      <LoaderIcon />
    </div>
  </template>

<script setup>
import { onMounted, watch, watchEffect } from 'vue';
import { ref, nextTick  } from 'vue';
import { useGetRequest, useGetRequestNoToken } from '../composables/useRequest';
import CalenderIcon from '../components/icon/CalenderIcon.vue';
import VideoPlayIcon from '../components/icon/VideoPlayIcon.vue';
import ArrowIcon from '../components/icon/ArrowIcon.vue';
import DotsIcon from '../components/icon/3DotsIcon.vue';
import ClockIcon from '../components/icon/ClockIcon.vue';
import { RouterLink } from 'vue-router';
import turnSecondsToHour from '../composables/useSecondsToHour';
import LoaderIcon from '../components/icon/loaderIcon.vue';

const homeData = ref()
const episods = ref([])
const episodsContinue = ref([])
const pageLoad = ref(true)

onMounted( async ()=>{
    const { Data, Error} = await useGetRequestNoToken('homev2/')
    homeData.value = Data.value.data
    pageLoad.value = false

/*     const { Data, Error} = await useGetRequest('home/')
    homeData.value = home.value.data */
    let counter = 0
/*     homeData.value.labes.sort((a, b) => a.sort - b.sort)
    for (let j = 0; j < homeData.value.labes.length; j++) {
  const programs = homeData.value.type_label ? homeData.value.labes[j].programs : homeData.value.labes[j].episodes;
  for (let i = 0; i < programs.length; i += 4) {
    if(i == 0)
        episods.value[j] = []
    episods.value[j].push([programs.slice(i, i + 4)]);
  }
}
console.log(episods.value) */

/*     console.log(episods.value) */
    counter = 0
    for (let i = 0; i < homeData.value.stop_places.length; i+=4) {
        episodsContinue.value.push(homeData.value.stop_places.slice(i,i+4))
        counter++
    }
    if(homeData.value.stop_places.length) {
        const swiperEl2 = document.querySelector('.mySwiper2');
        const params2 = {
            injectStyles: [`
            .swiper-pagination {
                justify-content: center !important;
                display: flex !important;
                top: 0 !important;
                left: 0 !important;
                right: 40% !important;
            }
            .swiper-pagination-bullet {
                width: 2rem;
                height: 6px;
                border-radius: 8px;
                background-color: #DBD9D1
            }
      
            .swiper-pagination-bullet-active {
                 background-color: #C4A159
            }
            `],
          }  
        Object.assign(swiperEl2, params2)
        swiperEl2.initialize();
    }

   /* const swiperEl3 = document.querySelector('.mySwiper3');
    const params3 = {
        injectStyles: [`
        .swiper-pagination {
            justify-content: center !important;
            display: flex !important;
            top: 0 !important;
            left: 0 !important;
            right: 40% !important;
        }
        .swiper-pagination-bullet {
            width: 2rem;
            height: 6px;
            border-radius: 8px;
            background-color: #262626;
            opacity: 1;
        }
  
        .swiper-pagination-bullet-active {
             background-color: #C4A159
        }
        `],
      }  
     Object.assign(swiperEl3, params3)
    swiperEl3.initialize(); */
})

watchEffect(() => {
      if (homeData?.value?.labes) {
        homeData.value.labes.sort((a, b) => a.sort - b.sort)
        episods.value = homeData.value.labes.map(label => {
          const programs = label.type_label ? label.programs : label.episodes;
          const chunks = [];
          for (let i = 0; i < programs.length; i += 4) {
            chunks.push(programs.slice(i, i + 4));
          }
          return chunks;
        });
        pageLoad.value = false

      }
    });

    const initializeSwipers = () => {
  nextTick(() => {
    homeData.value.labes.forEach((_, index) => {
      const swiperEl = document.querySelector(`.mySwiper4${index}`);
      if (swiperEl) {
        Object.assign(swiperEl, {
          injectStyles: [
            `
            .swiper-pagination {
              justify-content: center !important;
              display: flex !important;
              top: 0 !important;
              left: 0 !important;
              right: 40% !important;
            }
            .swiper-pagination-bullet {
              width: 2rem;
              height: 6px;
              border-radius: 8px;
              background-color: #262626;
              opacity: 1;
            }
            .swiper-pagination-bullet-active {
              background-color: #C4A159;
            }
            `
          ],
        });
        swiperEl.initialize();
      }
    });
  });
};

     // Initialize Swipers after the DOM has been updated
     watchEffect(() => {
      if (episods.value.length > 0) {
        initializeSwipers();
      }
    });

watch(homeData, ()=> {
    const swiperEl = document.querySelector('.mySwiper');
    const customPagination1 = document.querySelector('.custom-pagination');
    const customPagination2 = document.querySelector('.custom-pagination2');
    const customPagination3 = document.querySelector('.custom-pagination3');
    const params = {
        injectStyles: [`
        .swiper-pagination {
            justify-content: center !important;
            display: flex !important;
        }
            @media(max-width: 700px) {
  .swiper-pagination {
    display: none !important;
  }
}
        .swiper-pagination-bullet {
            opacity: 1;
            width: 20%;
            height: 145px;
            border-radius: 0;
            background: white;
            text-align: justify;
            padding: 0 1rem !important;
            padding-bottom: 0.5rem !important;
            margin: 0 2rem !important;
            border-radius: 1rem;
        }
  
        .swiper-pagination-bullet h1 {
            font-size: large;
            font-family: "Tajawal", sans-serif;
            font-weight: 700;
            font-style: normal;
        }
        .swiper-pagination-bullet p {
            font-family: "Tajawal", sans-serif;
            font-weight: 400;
            font-style: normal;
            color: #807D6B;
        }
        .swiper-pagination-bullet-outerdiv {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #807D6B
        }
        .swiper-pagination-bullet-innerdiv {
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: "Tajawal", sans-serif;
            font-weight: 400;
            font-style: normal;
        }
        .swiper-pagination-bullet-button {
            text-align: center;
            background-color: #c4a159;
            padding: 5px 0;
            color: white;
            border-radius: 5rem;
            width: 35%;
            font-family: "Tajawal", sans-serif;
            font-weight: 400;
            font-style: normal;
        }
  
        .swiper-pagination-bullet-active {
            border: 3px solid #c4a159 !important;
        }
        `],
        pagination: {
          clickable: true,
          renderBullet: function (index, className) {
            /* return '<span class="' + className + '">' + (index + 1) + "</span>"; */
            if(index == 0) {
                return customPagination1.innerHTML;
            }
            if(index == 1) {
                return customPagination2.innerHTML;
            }
            if(index == 2)
                return customPagination3.innerHTML;
          },
        },
      }  
    Object.assign(swiperEl, params)
    swiperEl.initialize();
    pageLoad.value = false

})

/* watch(episods, ()=> {
    const swiperEl4 = document.querySelector('.mySwiper4');
    const params4 = {
        injectStyles: [`
        .swiper-pagination {
            justify-content: center !important;
            display: flex !important;
            top: 0 !important;
            left: 0 !important;
            right: 40% !important;
        }
        .swiper-pagination-bullet {
            width: 2rem;
            height: 6px;
            border-radius: 8px;
            background-color: #262626;
            opacity: 1;
        }
  
        .swiper-pagination-bullet-active {
             background-color: #C4A159
        }
        `],
      }
      console.log(swiperEl4)
    if(swiperEl4) {
        Object.assign(swiperEl4, params4)
        swiperEl4.initialize();
    }
}, {deep: true}) */

const onSwiperReady = ()=> {
    const swiperEl4 = document.querySelector('.mySwiper40');
    console.log(swiperEl4)
}
</script>
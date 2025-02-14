<template>
  <div class="dark:bg-black overflow-hidden w-full">
    <section class="cards-section mt-64 mb-20 px-28 md:px-20 sm:px-8 ">
      <div class="w-full flex sm:flex-col justify-center items-center gap-7">
        <div class="w-1/2 sm:w-full">
          <img src="/img/Subtract.png" alt="img">
        </div>
        <div class="w-1/2 sm:w-full">
          <h1 class="text-7xl md:text-4xl sm:text-3xl dark:text-white text-site-dark-primary font-bold">
            الدكتور 
          <br>
            أحمد بن سميط
          </h1>
          <p class="text-[#9E9C9C] mt-5">بترومسيلة تتحرك نحو آفاق وطنية جديدة وكوادرها اكتسبت خبراتها من شركات عالمية قال الأستاذ محمد أحمد بن سميط المدير العام التنفيذي لشركة بترومسيلة أن الشركة تتحرك نحو آفاق وطنية جديدة عبر تكليفها من قبل الدولة ببناء محطتي كهرباء جديدة في مدينه عدن بقدرة 264 ميجاوات وساحل حضرموت بقدرة 100 ميجاوات.Dec 18, 2018</p>
          <div class="mt-24 md:mt-16 sm:mt-10 translate-x-36 md:translate-x-20 sm:translate-x-0">
            <p class="font-bold text-site-primary mb-5">الأكثر مشاهدة</p>
            <div class="flex sm:flex-wrap gap-5">
              <img src="/img/Video-thumbnail.png" alt="img" class="w-1/4 sm:w-[45%]">
              <img src="/img/Video-thumbnail.png" alt="img" class="w-1/4 sm:w-[45%]">
              <img src="/img/Video-thumbnail.png" alt="img" class="w-1/4 sm:w-[45%]">
              <img src="/img/Video-thumbnail.png" alt="img" class="w-1/4 sm:w-[45%]">
            </div>
          </div>
        </div>
      </div>
      <div class="w-full border-b text-white p-2 mt-20 flex items-center gap-3">
                <button class="text-site-primary font-semibold">البرامج</button>
                <button>الحلقات</button>
            </div>
            <div class="flex items-center gap-5 gap-y-10 my-10 flex-wrap">
                <div v-for="index in 10" class=" bg-site-dark-primary w-[23%] sm:w-full md:w-[47%] min-h-[312px] border border-[#2D2D2D] rounded-[20px]">
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
    </section>  
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
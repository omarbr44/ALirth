<template>
  <div class="dark:bg-black overflow-hidden w-full">
    <section class="mt-64 mb-20 px-28 md:px-18 sm:px-14 ">
      <h1 class="text-4xl md:text-3xl sm:text-2xl font-bold mb-14">
        <span class="dark:text-white text-site-dark-primary">البث </span>
        <span class="text-site-primary">المباشر</span>
      </h1>
      <div class="my-24">
        <video src="/img/wefadah-signin.webm" id="video" class="w-full h-full"></video>
      </div>
      <div>
        <div
          v-for="index in 6" 
          class="w-full flex lg:flex-row flex-col items-center gap-6 mb-16">
          <div class="flex lg:w-[40%] w-full items-center justify-center gap-6">
            <h1 class="text-7xl dark:text-white text-site-dark-primary">{{ index }}</h1>
            <img src="/img/Video-thumbnail.png" alt="img" class="">
          </div>
          <div class="lg:w-[45%] w-full">
            <p class="font-bold text-site-primary mb-3">الان</p>
            <h1 class="text-2xl dark:text-white text-site-dark-primary">🏆 حفل اختتام الدورة التعليمية الأولى بمعهد الرحمة بالأردن</h1>
            <p class="dark:text-white text-site-dark-primary my-2">أسهل طريقة لتعليم أبناءك أسماء الله الحسنىإنّ لله تسعة وتسعين اسماً من حفظها، وعرفها، أو عمل بمقتضاها، وتدبر معناها دخل الجنة، ولكن الأهم من عامل الحفظ هو عامل الاقتداء بها.</p>
            <div>
              <span class="text-site-grey-secondary">20 الحلقة</span>
              <span class="mx-4 dark:text-white text-site-dark-primary text-6xl">.</span>
              <span class="text-site-grey-secondary">59:00 دقيقة</span>
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
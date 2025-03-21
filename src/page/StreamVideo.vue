<template>
    <div class="flex flex-col lg:flex-row h-fit w-full bg-site-dark-primary">
        <template v-if="pageLoaded">
            <!-- Video Container -->
            <div class="w-full lg:w-[70%]"
                 :class="videoFull ? 'w-full' : ''">
                <div class="flex justify-between items-center pt-10 px-4 lg:px-10">
                    <div class="flex gap-4 items-center text-white">
                        <button @click="videoFull = !videoFull" class="bg-[#262011] p-3">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.3867 1.15556L20.3978 3.32222L17.2376 6.5C16.663 7.07778 16.663 7.94444 17.2376 8.52222C17.8122 9.1 18.674 9.1 19.2486 8.52222L22.4088 5.34444L24.5635 7.36667C25.1381 7.94444 25.8564 7.51111 25.8564 6.93333V0.722222C25.8564 0.288889 25.5691 0 25.1381 0H18.9613C18.3867 0 17.9558 0.722222 18.3867 1.15556ZM1.14917 7.36667L3.16022 5.34444L6.32044 8.52222C6.89503 9.1 7.75691 9.1 8.33149 8.52222C8.90608 7.94444 8.90608 7.07778 8.33149 6.5L5.31492 3.32222L7.32597 1.15556C7.90055 0.722222 7.46961 0 6.89503 0H0.718232C0.287293 0 0 0.288889 0 0.722222V6.93333C0 7.51111 0.718232 7.94444 1.14917 7.36667ZM7.32597 24.7L5.17127 22.6778L8.33149 19.5C8.90608 18.9222 8.90608 18.0556 8.33149 17.4778C7.75691 16.9 6.89503 16.9 6.32044 17.4778L3.16022 20.6556L1.00552 18.6333C0.718232 18.0556 0 18.4889 0 19.0667V25.2778C0 25.7111 0.287293 26 0.718232 26H6.89503C7.46961 26 7.90055 25.2778 7.32597 24.7ZM24.7072 18.4889L22.5525 20.5111L19.3923 17.3333C18.8177 16.7556 17.9558 16.7556 17.3812 17.3333C16.8066 17.9111 16.8066 18.7778 17.3812 19.3556L20.5414 22.5333L18.5304 24.7C18.0994 25.1333 18.3867 26 19.105 26H25.2818C25.7127 26 26 25.7111 26 25.2778V19.0667C25.8564 18.4889 25.1381 18.0556 24.7072 18.4889Z" fill="white"/>
                            </svg>
                        </button>
                        <!-- <button class="bg-[#262011] p-3">
                            <ShareIcon />
                        </button> -->
                    </div>
<!--                     <RouterLink
                    class="flex items-center gap-3 text-white"
                    to="">
                    <span>back</span>
                    <span>></span>
                    </RouterLink> -->
                </div>
                <div class="w-full pb-8 pt-24 px-4">
                    <video ref="video" onclick="play(event)" :src="currentEpisode.video_file" id="video" class="w-full h-full rounded-lg"></video>
                </div>
                <div class="timeline px-2">
                    <div class="bar">
                        <div class="inner"></div>
                    </div>
                </div>
                <div class="mt-8 pb-5 pl-4 lg:pl-16 pr-4 lg:pr-10 flex items-center justify-between bg-site-dark-primary" v-if="pageLoaded">
        <div class="flex gap-4 lg:gap-8 items-center">
            <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.76172 7.22V16.79C3.76172 18.75 5.89172 19.98 7.59172 19L11.7417 16.61L15.8917 14.21C17.5917 13.23 17.5917 10.78 15.8917 9.8L11.7417 7.4L7.59172 5.01C5.89172 4.03 3.76172 5.25 3.76172 7.22Z" fill="#9A9384"/>
                <path d="M20.2383 18.93C19.8283 18.93 19.4883 18.59 19.4883 18.18V5.82001C19.4883 5.41001 19.8283 5.07001 20.2383 5.07001C20.6483 5.07001 20.9883 5.41001 20.9883 5.82001V18.18C20.9883 18.59 20.6583 18.93 20.2383 18.93Z" fill="#9A9384"/>
                </svg>
            </button>
            <button @click="forward(event)">
                <VideoForward />
            </button>
            <button class="rounded-full p-1 bg-site-primary size-10 lg:size-14 flex items-center justify-center" @click="play(event)">
                <VideoPlayIcon v-if="videoStopped"/>
                <VideoPauseIcon v-else />
            </button>
            <button @click="rewind(event)">
                <VideoBackward />
            </button>
            <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.2409 7.22V16.79C20.2409 18.75 18.1109 19.98 16.4109 19L12.2609 16.61L8.11094 14.21C6.41094 13.23 6.41094 10.78 8.11094 9.8L12.2609 7.4L16.4109 5.01C18.1109 4.03 20.2409 5.25 20.2409 7.22Z" fill="#9A9384"/>
                <path d="M3.76172 18.93C3.35172 18.93 3.01172 18.59 3.01172 18.18V5.82001C3.01172 5.41001 3.35172 5.07001 3.76172 5.07001C4.17172 5.07001 4.51172 5.41001 4.51172 5.82001V18.18C4.51172 18.59 4.17172 18.93 3.76172 18.93Z" fill="#9A9384"/>
                </svg>
            </button>
        </div>
        <div class="flex items-center gap-4">
<!--             <button>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.497 0.75337C16.497 0.468417 16.332 0.198462 16.077 0.0784819C15.807 -0.0564956 15.507 -0.0115031 15.282 0.168467L8.63672 5.46259L16.497 13.3213V0.75337Z" fill="#AFAB9C"/>
                <path d="M20.7806 19.7192L1.27992 0.222482C0.98741 -0.0699695 0.511893 -0.0699695 0.219383 0.222482C-0.0731276 0.514933 -0.0731276 0.990354 0.219383 1.28281L4.93855 6.00252H4.49904C4.03402 6.00252 3.629 6.21249 3.35899 6.54243C3.13399 6.79739 2.99898 7.14233 2.99898 7.50227V13.5013C2.99898 14.3261 3.67401 15.001 4.49904 15.001H7.97916L15.2844 20.8351C15.4194 20.94 15.5844 21 15.7494 21C15.8544 21 15.9744 20.97 16.0794 20.925C16.3345 20.8051 16.4995 20.5351 16.4995 20.2502V17.5611L19.7186 20.7796C19.8656 20.9265 20.0576 21 20.2496 21C20.4416 21 20.6336 20.9265 20.7806 20.7811C21.0731 20.4871 21.0731 20.0132 20.7806 19.7192Z" fill="#AFAB9C"/>
                </svg>
            </button> -->
<!--             <button class="flex items-center text-white gap-2">
                <span>الحلقات</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#BFBCB0"/>
                <path d="M21.4795 17.86H2.51953C2.10953 17.86 1.76953 17.52 1.76953 17.11C1.76953 16.7 2.10953 16.36 2.51953 16.36H21.4795C21.8895 16.36 22.2295 16.7 22.2295 17.11C22.2295 17.52 21.8995 17.86 21.4795 17.86Z" fill="#BFBCB0"/>
                <path d="M21.4795 7.85999H2.51953C2.10953 7.85999 1.76953 7.51999 1.76953 7.10999C1.76953 6.69999 2.09953 6.35999 2.51953 6.35999H21.4795C21.8895 6.35999 22.2295 6.69999 22.2295 7.10999C22.2295 7.51999 21.8995 7.85999 21.4795 7.85999Z" fill="#BFBCB0"/>
                <path d="M6.96875 22.21C6.55875 22.21 6.21875 21.87 6.21875 21.46V17.11C6.21875 16.7 6.55875 16.36 6.96875 16.36C7.37875 16.36 7.71875 16.7 7.71875 17.11V21.46C7.71875 21.88 7.37875 22.21 6.96875 22.21Z" fill="#BFBCB0"/>
                <path d="M12 22.72C11.59 22.72 11.25 22.38 11.25 21.97V17.11C11.25 16.7 11.59 16.36 12 16.36C12.41 16.36 12.75 16.7 12.75 17.11V21.97C12.75 22.38 12.41 22.72 12 22.72Z" fill="#BFBCB0"/>
                <path d="M16.9688 22.27C16.5588 22.27 16.2188 21.93 16.2188 21.52V17.11C16.2188 16.7 16.5588 16.36 16.9688 16.36C17.3787 16.36 17.7188 16.7 17.7188 17.11V21.52C17.7188 21.94 17.3787 22.27 16.9688 22.27Z" fill="#BFBCB0"/>
                <path d="M6.96875 7.20999C6.55875 7.20999 6.21875 6.86999 6.21875 6.45999V2.10999C6.21875 1.69999 6.55875 1.35999 6.96875 1.35999C7.37875 1.35999 7.71875 1.69999 7.71875 2.10999V6.45999C7.71875 6.87999 7.37875 7.20999 6.96875 7.20999Z" fill="#BFBCB0"/>
                <path d="M12 7.71999C11.59 7.71999 11.25 7.37998 11.25 6.96999V2.10999C11.25 1.69999 11.59 1.35999 12 1.35999C12.41 1.35999 12.75 1.69999 12.75 2.10999V6.96999C12.75 7.37998 12.41 7.71999 12 7.71999Z" fill="#BFBCB0"/>
                <path d="M12 18.78C11.59 18.78 11.25 18.44 11.25 18.03V7.03C11.25 6.62 11.59 6.28 12 6.28C12.41 6.28 12.75 6.62 12.75 7.03V18.03C12.75 18.44 12.41 18.78 12 18.78Z" fill="#BFBCB0"/>
                <path d="M16.9688 7.26999C16.5588 7.26999 16.2188 6.92999 16.2188 6.51999V2.10999C16.2188 1.69999 16.5588 1.35999 16.9688 1.35999C17.3787 1.35999 17.7188 1.69999 17.7188 2.10999V6.51999C17.7188 6.93999 17.3787 7.26999 16.9688 7.26999Z" fill="#BFBCB0"/>
                </svg>
            </button> -->
        </div>
    </div>
            </div>

            <!-- Sidebar -->
            <div class="px-4 lg:px-6 flex flex-col gap-6 overflow-auto mt-8 lg:mt-24 mb-16 h-[35rem]"
                 :class="videoFull ? 'hidden' : ''">
                 <div class="select-container my-10">
                    <select v-model="seasonValue">
                        <option value="" selected>اختر الخطة</option>
                        <option v-for="(season,index) in seasons" :key="index" :value="season.id">{{ season.name }}</option>
                    </select>
                </div>
                <RouterLink v-for="(ep,index) in episodes" :key="index" :to="'/stream-video/'+ep.id" class="flex items-center gap-4">
                    <img :src="ep.image ? ep.image :'/img/Course-Images.png'" alt="img" class="w-32 h-18 rounded-lg">
                    <div>
                        <p class="text-white font-semibold mb-4">{{ ep.name }}</p>
                        <p class="text-[#BFBCB0] text-sm">{{ turnSecondsToHour(ep.time) }}</p>
                    </div>
                </RouterLink>
            </div>       
        </template>
        <div v-else class="h-screen w-full flex justify-center items-center">
            <LoaderIcon />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, useTemplateRef, watch } from 'vue';
import ShareIcon from '../components/icon/ShareIcon.vue';
import { RouterLink, useRoute } from 'vue-router';
import VideoPlayIcon from '../components/icon/VideoPlayIcon.vue';
import VideoPauseIcon from '../components/icon/VideoPauseIcon.vue';
import VideoBackward from '../components/icon/VideoBackward.vue';
import VideoForward from '../components/icon/VideoForward.vue';
import { useGetRequest, usePostRequest } from '../composables/useRequest';
import turnSecondsToHour from '../composables/useSecondsToHour';
import LoaderIcon from '../components/icon/loaderIcon.vue';

// Select the HTML5 video
const video = useTemplateRef('video')
const videoStopped = ref(true)
const videoFull = ref(false)
const pageLoaded = ref(false)
const route = useRoute()
const currentEpisode = ref()
const episodes = ref()
const seasons = ref()
const seasonValue = ref()

onMounted(async ()=>{
    const { Data, Error} = await useGetRequest('episodes/'+route.params.id)
    currentEpisode.value = Data.value.data
    const { Data:seasonss} = await useGetRequest('seasons/?program='+currentEpisode.value.program.id)
    seasons.value = seasonss.value.data
    const { Data:eps} = await useGetRequest('episodes/?season='+seasons.value[0].id)
    episodes.value = eps.value.data.result
    seasonValue.value = seasons.value[0].id
    pageLoaded.value = true
})
// add vidoe setting after browser load vid
watch(video, ()=> {
    // update the progress bar
video.value.addEventListener("timeupdate", () => {
    let curr = (video.value.currentTime / video.value.duration) * 100
    if(video.value.ended){
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
    }
    document.querySelector('.inner').style.width = `${curr}%`
})
    video.value.currentTime = currentEpisode.value.stop_time ? currentEpisode.value.stop_time : 0
})

// react to params changes
watch(
  () => route.params.id,
  async (newId, oldId) => {
    pageLoaded.value = false

    const { Data, Error} = await useGetRequest('episodes/'+newId)
    currentEpisode.value = Data.value.data
    const { Data:seasonss} = await useGetRequest('seasons/?program='+currentEpisode.value.program.id)
    seasons.value = seasonss.value.data
    const { Data:eps} = await useGetRequest('episodes/?season='+seasons.value[0].id)
    episodes.value = eps.value.data.result
    seasonValue.value = seasons.value[0].id
    pageLoaded.value = true
  }
)

const stoppingTimeObj = ref({
    episode: route.params.id,
    stopping_place_status: 1,
    stop_time: 0,
})
// pause or play the video
const play = (e) => {
    console.log(video.value.currentTime)
    // Condition when to play a video
    if(video.value.paused){
        video.value.play()
        videoStopped.value = false
    }
    else{
        video.value.pause()
        videoStopped.value = true
        sendStopTime()
    }
}
const sendStopTime = async () => {
    stoppingTimeObj.value.stop_time = Math.floor(video.value.currentTime)
    stoppingTimeObj.value.stopping_place_status = stoppingTimeObj.value.stop_time == currentEpisode.value.time ? 2 : 1
    const { Data, Error} = await usePostRequest('accounts/stopping_place/',stoppingTimeObj.value) 
}
// trigger fullscreen
/* const fullScreen = (e) => {
    video.value.requestFullscreen()
} */

// download the video
/* const download = (e) => {
    e.preventDefault()
    let a = document.createElement('a')
    a.href = video.value.src 
    a.target = "_blank"
    a.download = ""
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
} */
// rewind the current time
const rewind = (e) => {
    video.value.currentTime = video.value.currentTime - ((video.value.duration/100) * 5)
}
// forward the current time
const forward = (e) => {
    video.value.currentTime = video.value.currentTime + ((video.value.duration/100) * 5)
}
// set the pause button to display:none by default

</script>

<style scoped>
.container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container #video {
    border-radius: 20px;
}
.container .controls {
    position: absolute;
    bottom: 40px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    opacity: 0.2;
    transition: opacity 0.4s;
}
.container:hover .controls {
    opacity: 1;
}
.container .controls button {
    background: transparent;
    color: #fff;
    font-weight: bolder;
    text-shadow: 2px 1px 2px #000;
    border: none;
    cursor: pointer;
}
.timeline {
    flex: 1;
    display: flex;
    align-items: center;
    border: none;
    border-right: 3px solid #ccc;
    border-left: 3px solid #ccc;
}
.timeline .bar{
    margin-right: 1rem;
    background: #C4A159;
    height: 4px;
    flex: 1;
}
.timeline .bar .inner{
    background: #5E5A45;
    width: 0%;
    height: 100%;
}
.fa {
    font-size: 20px !important;
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
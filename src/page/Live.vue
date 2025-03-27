<template>
    <div class="flex justify-center items-center h-screen w-full bg-site-dark-primary">
        <div class="lg:w-[38rem] md:w-[27rem] sm:w-[18rem] pb-8 pt-24 px-4">
            <video ref="videoPlayer" id="videoPlayer" controls></video>
        </div>   
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Mpegts from 'mpegts.js';

// Select the HTML5 video
const videoPlayer = ref(null);



onMounted(async ()=>{

  if (Mpegts.getFeatureList().mseLivePlayback) {
        var videoElement = document.getElementById('videoPlayer');
        var player = Mpegts.createPlayer({
            type: 'mse',  // could also be mpegts, m2ts, flv
            isLive: true,
            url: 'http://82.212.74.2:8000/live/7407'
        });
        player.attachMediaElement(videoElement);
        player.load();
        player.play();
    }

    pageLoaded.value = true
})
</script>
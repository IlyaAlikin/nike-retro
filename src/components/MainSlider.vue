<template>
  <section class="main-slider">
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :modules="modules"
      :pagination="{
        clickable: true,
      }"
      class="main-slider__slider"
    >
      <swiper-slide>
        <MainSliderSlide slideColor="green" />
      </swiper-slide>
      <swiper-slide>
        <MainSliderSlide slideColor="green" />
      </swiper-slide>
      <swiper-slide>
        <MainSliderSlide slideColor="green" />
      </swiper-slide>
    </swiper>
  </section>
</template>
<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import MainSliderSlide from "./MainSliderSlide.vue";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination];
</script>
<style scoped>
.slide-main-slider__container {
  position: relative;
}

.column-text__title {
  position: relative;
}
</style>

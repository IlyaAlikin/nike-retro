<template>
  <section class="main-slider">
    <swiper
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
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
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import MainSliderSlide from "./MainSliderSlide.vue";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination];
</script>
<style scoped>
.swiper-pagination {
  position: relative;
}
.slide-main-slider__container {
  position: relative;
  /* z-index: 10; */
}

.column-text__title {
  position: relative;
  /* z-index: 10; */
}
</style>

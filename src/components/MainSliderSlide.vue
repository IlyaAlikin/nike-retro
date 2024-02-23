<template>
  <div class="main-slider__slide slide-main-slider" :class="slideColor">
    <div class="slide-main-slider__container">
      <div class="slide-main-slider__big-circle"></div>
      <div
        class="slide-main-slider__small-circle slide-main-slider__small-circle--left"
      ></div>
      <div
        class="slide-main-slider__small-circle slide-main-slider__small-circle--right"
      ></div>
      <div class="slide-main-slider__wrapper">
        <div class="slide-main-slider__column column-text">
          <h1 class="column-text__title">
            RETRO LOW
            <span> VOODOO </span>
          </h1>
          <div class="column-text__description">
            The Nike Dunk Low SE Jackpot GS is a low-cut sneaker with hints of
            grey, white, blue, and red.
          </div>
          <button class="column-text__btn">SHOP NOW!</button>
        </div>
        <div class="slide-main-slider__column column-img">
          <div class="column-img__img">
            <img src="../assets/img/sneakers-vodoo.png" alt="" />
          </div>
          <button class="column-text__btn column-text__btn_adaptive">
            SHOP NOW!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  slideColor: String,
  // primatyDecorColor: String,
  // additionalDecorColor: String
});
</script>
<style scoped>
.green {
  background: #72b778;
  overflow: hidden;
}

.slide-main-slider__wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 0px 95px 0px;
}
.column-img__img {
  max-width: 800px;
  transform: rotate(-15deg);
}

.column-img__img img {
  width: 100%;
}

.column-text {
  flex: 1 0 571px;
  position: relative;
  /* z-index: 0; */
}

.column-text__title {
  color: #fff;
  font-size: clamp(60px, 8vw, 140px);
  font-style: normal;
  font-weight: 400;
  line-height: 160px;
  margin-bottom: 30px;
}

.column-text__title span {
  color: #000;
  display: inline-block;
  background: #e5be67;
  padding: 26px 40px;
}

.column-text__description {
  color: #fff;
  font-size: clamp(16px, 1.3vw, 20px);
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  margin-bottom: 40px;
}

.column-text__btn {
  color: #151414;
  font-size: clamp(40px, 5vw, 60px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 5px 16px;
  background: #fff;
  font-family: "Anton", sans-serif;
}

.slide-main-slider__big-circle {
  width: 708px;
  height: 708px;
  background: #e5be67;
  border-radius: 50%;
  position: absolute;
  z-index: 0;
  top: 36px;
  right: 37px;
}

.slide-main-slider__small-circle {
  width: 214px;
  height: 214px;
  background: rgba(229, 190, 103, 0.5);
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
}

.slide-main-slider__small-circle--left {
  left: 0;
  bottom: -120px;
}

.slide-main-slider__small-circle--right {
  right: 7px;
  bottom: 6px;
}

.column-text__btn_adaptive {
  display: none;
}

@media (max-width: 1180px) {
  .column-text__title span {
    padding: 14px 36px;
  }

  .column-text {
    flex: 1 1 44%;
  }

  .slide-main-slider__big-circle {
    width: calc(65vw);
    height: calc(65vw);
  }
}

@media (max-width: 992px) {
  .slide-main-slider__wrapper {
    flex-direction: column;
    gap: 60px;
  }

  .column-text,
  .column-text__title {
    text-align: center;
    line-height: 160%;
  }

  .column-text {
    flex: 1 1 100%;
  }
  .column-text__title span {
    display: block;
    margin: 0 auto;
    text-align: center;
    max-width: 300px;
    padding: 0px 20px;
  }

  .slide-main-slider__big-circle {
    top: 30%;
  }

  .column-text__description {
    max-width: 450px;
  }

  .column-text__btn {
    display: none;
  }

  .column-text__btn_adaptive {
    display: block;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    margin-top: 210px;
  }
}

@media (max-width: 576px) {
  .column-text__description {
    display: none;
  }

  .slide-main-slider__wrapper {
    gap: 25px;
  }

  .slide-main-slider__wrapper {
    padding: 20px 0px 60px 0px;
  }

  .column-text__btn_adaptive {
    margin-top: 120px;
  }

  .slide-main-slider__big-circle {
    top: 35%;
  }

  .slide-main-slider__small-circle {
    width: 160px;
    height: 160px;
  }
}
</style>

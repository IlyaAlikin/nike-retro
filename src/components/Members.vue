<template>
  <section class="members" :class="classCard">
    <div class="members__container">
      <p class="members__title">Members : Free Shipping on Orders $50+</p>
      <a href="#" class="members__link">Join now</a>
    </div>
  </section>
</template>
<script setup>
defineProps({
  classCard: String,
});
</script>
<style scoped>
.members {
  margin-top: 100px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.members__title {
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 8px;
  color: #240404;
}

.members__link {
  font-size: 20px;
  font-weight: 600;
  text-decoration-line: underline;
  display: block;
  text-align: center;
  color: #240404;
}

.black {
  background-color: #151414;
}

.black .members__title {
  color: #fff;
}

.black .members__link {
  color: #fff !important;
}
</style>

<template>
  <div class="new-arrivals">
    <div class="new-arrivals__title-section">
      <h1 class="new-arrivals__title">NEW ARRIVALS</h1>
    </div>
    <div class="new-arrivals__content">
      <div class="new-arrivals__filters"></div>
      <div class="new-arrivals__products"></div>
    </div>
    <CardList />
  </div>
</template>
<script setup>
import CardList from "../components/CardList.vue";
</script>
<style scoped></style>

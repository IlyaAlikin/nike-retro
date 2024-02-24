<template>
  <div class="new-arrivals">
    <div class="new-arrivals__container">
      <div class="title-section new-arrivals__title-section">
        <h2 class="section__title new-arrivals__title">new arrivals</h2>
        <div class="title-section__link">See all items</div>
      </div>
      <div class="new-arrivals__slider">
        <Card
          imageUrl="/sneakers/sneakers-1.png"
          name="Air Jordan 1 Retro Low Voodoo"
          description="Men’s shoes"
          :price="379.99"
          :isFavorite="true"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Card from "../components/Card.vue";
</script>
<style scoped>
.new-arrivals {
  margin-top: 100px;
}
</style>

<template>
  <div class="card-list">
    <div class="card-list__wrapper">
      <Card
        imageUrl="/sneakers/sneakers-1.png"
        name="Air Jordan 1 Retro Low Voodoo"
        description="Men’s shoes"
        :price="379.99"
        :isFavorite="true"
      />
      <Card
        imageUrl="/sneakers/sneakers-1.png"
        name="Air Jordan 1 Retro Low Voodoo"
        description="Men’s shoes"
        :price="379.99"
        :isFavorite="true"
      />
      <Card
        imageUrl="/sneakers/sneakers-1.png"
        name="Air Jordan 1 Retro Low Voodoo"
        description="Men’s shoes"
        :price="379.99"
        :isFavorite="true"
      /><Card
        imageUrl="/sneakers/sneakers-1.png"
        name="Air Jordan 1 Retro Low Voodoo"
        description="Men’s shoes"
        :price="379.99"
        :isFavorite="true"
      /><Card
        imageUrl="/sneakers/sneakers-1.png"
        name="Air Jordan 1 Retro Low Voodoo"
        description="Men’s shoes"
        :price="379.99"
        :isFavorite="true"
      />
    </div>
  </div>
</template>
<script setup>
import Card from "./Card.vue";
</script>
<style scoped>
.card-list__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}
</style>

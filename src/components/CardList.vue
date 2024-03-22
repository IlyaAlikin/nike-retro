<template>
  <div class="card-list">
    <div class="card-list__wrapper">
      <Card
        v-for="item in items"
        :name="item.title"
        :key="item.id"
        :price="item.price"
        :imageUrl="item.imageUrl"
        :isFavorite="true"
      />
    </div>
  </div>
</template>
<script setup>
import Card from "./Card.vue";

defineProps({
  items: Array,
});
</script>
<style scoped>
.card-list__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}
</style>

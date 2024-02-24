<template>
  <div class="card">
    <div class="card__img">
      <img :src="imageUrl" alt="" />
      <div class="card__like">
        <img :src="isFavorite ? '/favorite.svg' : '/unfavorite.svg'" alt="" />
      </div>
    </div>
    <div class="card__description description-card">
      <div class="description-card__name">
        {{ name }}
      </div>
      <div class="description-card__for">
        {{ description }}
      </div>
      <div class="description-card__price">{{ price }}€</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  imageUrl: String,
  name: String,
  description: String,
  price: Number,
  isFavorite: Boolean,
});
</script>
<style scoped>
.card {
  position: relative;
}

.card__img {
  position: relative;
  background: #f6f6f6;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.card__like {
  position: absolute;
  top: 5px;
  left: 5px;
}

.card__description {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}
.description-card {
}
.description-card__name {
  font-size: 20px;
  font-weight: 700;
}
.description-card__for {
  font-size: 20px;
  color: #838383;
}
.description-card__price {
  font-size: 20px;
  font-weight: 800;
}
</style>

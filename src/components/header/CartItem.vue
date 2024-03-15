<template>
  <div class="cart-item">
    <img src="/sneakers/sneakers-1.png" alt="" class="cart-item__img" />
    <div class="cart-item__text">
      <div class="cart-item__name">Air Jordan 1 Retro Low Voodoo</div>
      <div class="cart-item__price">379.99€</div>
    </div>
    <button class="cart-item__remove">
      <font-awesome-icon icon="fa-solid fa-xmark" class="close-icon" />
    </button>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 5px 20px 5px 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
}
.cart-item__img {
  max-width: 160px;
}
.cart-item__name {
  font-size: 20px;
  font-weight: 600;
}
.cart-item__text {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.cart-item__price {
  font-size: 16px;
}
.close-icon {
  font-size: 18px;
}
</style>

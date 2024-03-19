<template>
  <div class="cart-list">
    <CartItem />
    <CartItem />
    <CartItem />
    <CartItem />
    <CartItem />
    <CartItem />
    <CartItem />
    <CartItem />
    <CartItem />
    <CartItem />
  </div>
</template>
<script setup>
import CartItem from "./CartItem.vue";
</script>
<style scoped>
.cart-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
  overflow-y: auto;
  max-height: 70vh;
}

@media (max-width: 767px) {
  .cart-list {
    max-height: 60vh;
  }
}

@media (max-height: 767px) {
  .cart-list {
    max-height: 50vh;
  }
}

@media (max-width: 565px) {
  .cart-item__img {
    max-width: 100px;
  }

  .cart-list {
    padding-right: 10px;
  }

  .cart-item {
    padding: 5px 15px 5px 5px;
  }
}

@media (max-width: 374px) {
  .cart-list {
    gap: 10px;
  }
}
</style>

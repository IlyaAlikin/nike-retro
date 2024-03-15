<template>
  <div class="cart-list">
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
}
</style>

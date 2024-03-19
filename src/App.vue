<template>
  <Header />
  <Members class-card="" />
  <Main />
  <NewArrivals />
</template>
<script lang="ts" setup>
import Header from "./components/header/Header.vue";
import Members from "./components/Members.vue";
import Main from "./pages/Main.vue";
import NewArrivals from "./pages/NewArrivals.vue";
</script>
<style scoped></style>

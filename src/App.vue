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

import { onMounted, watch, ref } from "vue";
import axios from "axios";

const items = ref([]);

const sortBy = ref("");
const searchQuery = ref("");

onMounted(async () => {
  try {
    const data = await axios.get("https://c80b820f0f628302.mokky.dev/items");
    items.value = data;

    console.log(items.value);
    // .then((response) => console.log(response) );
  } catch (error) {
    console.error(error);
  }
});

watch(sortBy, async () => {
  try {
    const data = await axios.get(
      "https://c80b820f0f628302.mokky.dev/items?sortBy=" + sortBy.value
    );
    items.value = data;

    console.log(items.value);
    // .then((response) => console.log(response) );
  } catch (error) {
    console.error(error);
  }
});
</script>
<style scoped></style>

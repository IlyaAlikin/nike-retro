<template>
  <div class="new-arrivals">
    <div class="new-arrivals__title-section">
      <h1 class="new-arrivals__title">NEW ARRIVALS</h1>
    </div>
    <div class="new-arrivals__content">
      <div class="new-arrivals__filters"></div>
      <div class="new-arrivals__products"></div>
    </div>
    <CardList :items="items" />
  </div>
</template>
<script setup>
import CardList from "../components/CardList.vue";

const items = [
  {
    id: 1,
    title: "Большй Гранитный Плащ",
    price: "$825",
    imageUrl: "/sneakers/sneakers-1.png",
  },
  {
    id: 2,
    title: "Свободный Неодимовый Ремень",
    price: "$192",
    imageUrl: "/sneakers/sneakers-2.png",
  },
  {
    id: 3,
    title: "Грубый Кожанный Ремень",
    price: "$509",
    imageUrl: "/sneakers/sneakers-1.png",
  },
  {
    id: 4,
    title: "Интеллектуальный Резиновый Ножницы",
    price: "$895",
    imageUrl: "/sneakers/sneakers-1.png",
  },
  {
    id: 5,
    title: "Потрясающий Бетонный Автомобиль",
    price: "$679",
    imageUrl: "/sneakers/sneakers-1.png",
  },
  {
    id: 6,
    title: "Большой Бетонный Майка",
    price: "$937",
    imageUrl: "/sneakers/sneakers-1.png",
  },
  {
    id: 7,
    title: "Интеллектуальный Меховой Куртка",
    price: "$651",
    imageUrl: "/sneakers/sneakers-1.png",
  },
  {
    id: 8,
    title: "Грубый Бетонный Майка",
    price: "$597",
    imageUrl: "/sneakers/sneakers-1.png",
  },
  {
    id: 9,
    title: "Интеллектуальный Резиновый Автомобиль",
    price: "$443",
    imageUrl: "/sneakers/sneakers-1.png",
  },
  {
    id: 10,
    title: "Маленький Гранитный Компьютер",
    price: "$379",
    imageUrl: "/sneakers/sneakers-1.png",
  },
  {
    id: 11,
    title: "Маленький Кожанный Кепка",
    price: "$264",
    imageUrl: "/sneakers/sneakers-1.png",
  },
  {
    id: 12,
    title: "Грубый Гранитный Клатч",
    price: "$558",
    imageUrl: "/sneakers/sneakers-1.png",
  },
  {
    id: 13,
    title: "Практичный Хлопковый Ножницы",
    price: "$533",
    imageUrl: "/sneakers/sneakers-1.png",
  },
  {
    id: 14,
    title: "Интеллектуальный Пластиковый Кепка",
    price: "$784",
    imageUrl: "/sneakers/sneakers-1.png",
  },
  {
    id: 15,
    title: "Потрясающий Гранитный Компьютер",
    price: "$148",
    imageUrl: "/sneakers/sneakers-1.png",
  },
  {
    id: 16,
    title: "Лоснящийся Хлопковый Свитер",
    price: "$733",
    imageUrl: "/sneakers/sneakers-1.png",
  },
  {
    id: 17,
    title: "Маленький Бетонный Портмоне",
    price: "$360",
    imageUrl: "/sneakers/sneakers-1.png",
  },
  {
    id: 18,
    title: "Маленький Деревянный Плащ",
    price: "$958",
    imageUrl: "/sneakers/sneakers-1.png",
  },
  {
    id: 19,
    title: "Фантастический Пластиковый Ножницы",
    price: "$350",
    imageUrl: "/sneakers/sneakers-1.png",
  },
  {
    id: 20,
    title: "Практичный Гранитный Носки",
    price: "$591",
    imageUrl: "/sneakers/sneakers-1.png",
  },
];
</script>
<style scoped></style>

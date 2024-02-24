<template>
  <button @click="openDrawer()" class="drawer-open">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="36"
      viewBox="0 0 34 36"
      fill="none"
      class="tool-header"
    >
      <g clip-path="url(#clip0_283_622)">
        <path
          d="M24.7229 33.7251H8.81042C7.82505 33.7308 6.84959 33.5282 5.94796 33.1307C5.04633 32.7331 4.23887 32.1495 3.5785 31.4182C2.91812 30.6868 2.41974 29.8242 2.11599 28.8868C1.81224 27.9494 1.70999 26.9583 1.81594 25.9787L2.95254 15.487C3.13838 13.7681 3.9542 12.179 5.24261 11.0262C6.53101 9.87346 8.2007 9.23868 9.92954 9.24438H23.6037C25.3356 9.23435 27.0096 9.86718 28.3017 11.0204C29.5938 12.1736 30.4121 13.7651 30.5982 15.487L31.7348 25.9787C31.841 26.9598 31.7383 27.9523 31.4335 28.891C31.1287 29.8296 30.6287 30.6931 29.9665 31.4247C29.3042 32.1564 28.4946 32.7396 27.5908 33.1361C26.6871 33.5325 25.7097 33.7333 24.7229 33.7251Z"
          stroke="#303037"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.0078 16.239H22.0253"
          stroke="#303037"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.5156 16.239H11.5331"
          stroke="#303037"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.5215 9.24448V7.49586C11.5215 6.10457 12.0742 4.77027 13.058 3.78648C14.0418 2.80269 15.3761 2.25 16.7673 2.25C18.1586 2.25 19.4929 2.80269 20.4767 3.78648C21.4605 4.77027 22.0132 6.10457 22.0132 7.49586V9.24448"
          stroke="#303037"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_283_622">
          <rect
            width="33"
            height="35"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  </button>
  <div class="drawer">
    <div class="drawer__body">
      <div class="drawer__header">
        <h3 class="drawer__title">Cart</h3>
        <font-awesome-icon icon="fa-solid fa-house" />
        <button class="drawer__close-btn"></button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const openDrawer = () => {
  console.log("sdfdf");
};
</script>
<style scoped>
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
.drawer__body {
  position: fixed;
  top: 0;
  right: 0;
  display: block;
  z-index: 10;
  width: 380px;
  height: 100vh;
  background-color: #fff;
}
.drawer__header {
}
.drawer__title {
}
.drawer__close-btn {
}

.drawer-open {
  display: block;
  position: relative;
  cursor: pointer;
}
</style>

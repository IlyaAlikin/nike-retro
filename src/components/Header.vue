<template>
  <header class="header">
    <div class="header__container">
      <div class="header__content">
        <div class="header__menu">
          <div class="header__column logo-column">
            <div class="header__logo">
              <img src="../assets/img/logo.svg" alt="" />
            </div>
          </div>
          <div class="header__column">
            <nav class="header__nav" id="headerList">
              <ul class="header__list list-header">
                <li class="link-header">New arrivals</li>
                <li class="link-header">Men</li>
                <li class="link-header">Women</li>
                <li class="link-header">Kids</li>
                <li class="link-header">Collection</li>
              </ul>
            </nav>
          </div>
          <div class="header__column">
            <div class="header__tools tools-header">
              <div class="header__search tools-header__column">
                <a href="#" class="tools-header__link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    fill="none"
                    viewBox="0 0 34 34"
                    class="tool-header"
                  >
                    <g clip-path="url(#clip0_283_585)">
                      <path
                        d="M25.583 25.5834L32.2497 32.25"
                        stroke="#303037"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.5833 28.9167C22.9471 28.9167 28.9167 22.9471 28.9167 15.5833C28.9167 8.21954 22.9471 2.25 15.5833 2.25C8.21954 2.25 2.25 8.21954 2.25 15.5833C2.25 22.9471 8.21954 28.9167 15.5833 28.9167Z"
                        stroke="#303037"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_283_585">
                        <rect
                          width="33"
                          height="33"
                          fill="white"
                          transform="translate(0.5 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
              <div class="header__favourites tools-header__column">
                <a href="#" class="tools-header__link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="30"
                    viewBox="0 0 32 30"
                    fill="none"
                    class="tool-header"
                  >
                    <path
                      d="M16.9333 28.1979C16.3246 28.3814 15.6754 28.3814 15.0667 28.1979C10.7167 26.6646 1 20.5312 1 9.99788C1 8.24886 1.55031 6.54418 2.57298 5.1253C3.59565 3.70642 5.03884 2.64528 6.6981 2.09219C8.35737 1.5391 10.1486 1.5221 11.8181 2.0436C13.4875 2.56511 14.9506 3.59867 16 4.99788C17.0494 3.59867 18.5125 2.56511 20.1819 2.0436C21.8514 1.5221 23.6426 1.5391 25.3019 2.09219C26.9612 2.64528 28.4043 3.70642 29.427 5.1253C30.4497 6.54418 31 8.24886 31 9.99788C31 20.5312 21.2833 26.6646 16.9333 28.1979Z"
                      stroke="#303037"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <div class="header__cart tools-header__column">
                <a href="#" class="tools-header__link">
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
                </a>
              </div>
            </div>
            <button class="header__burger" id="burger" @click="openMenu()">
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
function openMenu() {
  let burger = document.getElementById("burger");
  let menu = document.getElementById("headerList");

  burger.classList.toggle("active");
  menu.classList.toggle("active");
}
</script>
<style scoped>
.header {
  height: 100px;
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #b4b4b3;
  padding: 0px 60px;
}
.header__container {
  height: inherit;
}
.header__content {
  height: inherit;
}
.header__menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: inherit;
}
.header__column {
  height: inherit;
  display: flex;
  align-items: center;
}
.header__column:nth-child(1) {
  border-right: 1px solid #b4b4b3;
  padding-right: 40px;
}
.header__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}
.link-header {
  font-weight: 500;
  font-size: 24px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.link-header:hover {
  color: #72b778;
}

.header__tools {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: inherit;
}

.tools-header__column {
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #b4b4b3;
  padding-left: 25px;
  padding-right: 25px;
}

.tools-header__column:last-child {
  border-right: 1px solid #b4b4b3;
}

.tool-header:hover {
  transition: all 0.3s ease-out;
  filter: invert(65%) sepia(14%) saturate(1043%) hue-rotate(75deg)
    brightness(97%) contrast(92%);
}

.header__burger {
  display: none;
}

@media (max-width: 1439px) {
  .header {
    padding: 0px 40px;
  }

  .link-header {
    font-size: 20px;
  }

  .tool-header {
    width: 28px;
    height: 28px;
  }

  .header__column:nth-child(1) {
    border: none;
  }
}

@media (max-width: 1024px) {
  .link-header {
    font-size: 18px;
  }

  .header__logo img {
    width: 70px;
  }

  .tool-header {
    width: 24px;
    height: 24px;
  }
  .tools-header__column {
    padding: 0px 20px;
  }

  .header {
    padding: 0px 30px;
  }

  .tools-header__column,
  .tools-header__column:last-child {
    border: none;
  }

  .header__column:nth-child(1) {
    padding: 0;
  }
}

@media (max-width: 992px) {
  .header {
    padding: 0px;
  }

  .tools-header__column {
    padding: 0px 15px;
  }
  .link-header {
    font-size: 16px;
  }
}

@media (max-width: 767px) {
  .logo-column,
  .header__tools {
    position: relative;
    z-index: 5;
  }

  .header__nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    z-index: 4;
    top: -100vh;
    transition: all 0.3s ease;
  }
  .header__nav.active {
    top: 0;
  }

  .header__list {
    padding-top: 100px;
    flex-direction: column;
    text-align: left;
  }

  .link-header {
    font-size: 20px;
  }

  .header__burger {
    display: block;
    width: 26px;
    height: 20px;
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .header__burger span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #000;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  .header__burger::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
    top: 0;
    left: 0;
    transition: all 0.3s ease;
  }

  .header__burger::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
    bottom: 0;
    left: 0;
    transition: all 0.3s ease;
  }

  .header__burger.active span {
    transform: scale(0);
  }

  .header__burger.active::before {
    transform: rotate(45deg);
    bottom: 9px;
  }

  .header__burger.active::after {
    transform: rotate(-45deg);
    top: 9px;
  }

  .header__logo img {
    width: 60px;
  }
}
</style>

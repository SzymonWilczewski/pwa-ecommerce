<script setup>
const dropdown = ref(false);
</script>

<template>
  <div class="menu" id="menu">
    <div class="menu__items">
      <NuxtLink
        class="menu__item menu__dropdown"
        to="/"
        @mouseover="dropdown = true"
        @mouseleave="dropdown = false"
      >
        Sklep
      </NuxtLink>

      <Transition>
        <div
          class="menu__dropdown-list"
          @mouseover="dropdown = true"
          @mouseleave="dropdown = false"
          v-show="dropdown"
        >
          <div class="menu__dropdown-item">
            <NuxtLink to="/">Kolekcja</NuxtLink>
          </div>

          <div class="menu__dropdown-item">
            <NuxtLink to="/">Sukienki | Kombinezony</NuxtLink>
          </div>

          <div class="menu__dropdown-item">
            <NuxtLink to="/">Bluzki | Koszule</NuxtLink>
          </div>

          <div class="menu__dropdown-item">
            <NuxtLink to="/">Marynarki</NuxtLink>
          </div>

          <div class="menu__dropdown-item">
            <NuxtLink to="/">Płaszcze | Kurtki</NuxtLink>
          </div>

          <div class="menu__dropdown-item">
            <NuxtLink to="/">Spodnie</NuxtLink>
          </div>

          <div class="menu__dropdown-item">
            <NuxtLink to="/">Spódnice</NuxtLink>
          </div>

          <div class="menu__dropdown-item">
            <NuxtLink to="/">Swetry</NuxtLink>
          </div>

          <div class="menu__dropdown-item">
            <NuxtLink to="/">Golfy</NuxtLink>
          </div>

          <div class="menu__dropdown-item">
            <NuxtLink to="/">Rabat 10%</NuxtLink>
          </div>
        </div>
      </Transition>

      <NuxtLink class="menu__item" to="/">Kolekcja zimowa</NuxtLink>
      <NuxtLink class="menu__item" to="/">Stylizacje wieczorowe</NuxtLink>
      <NuxtLink class="menu__item" to="/">Stylizacje codzienne</NuxtLink>
      <NuxtLink class="menu__item" to="/">Kolekcja świąteczna</NuxtLink>
      <NuxtLink class="menu__item" to="/">Wyprzedaż</NuxtLink>
      <NuxtLink class="menu__item" to="/">Nowości</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.menu {
  padding: 0px 40px 10px 40px;
  margin: 0 150px;
}

.menu__items {
  display: flex;
  position: relative;
}
.menu__items a {
  font-family: "Merriweather", serif;
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
}

.menu__item {
  position: relative;
  padding: 12px 0 25px 0;
  margin: 0 20px;
}
.menu__item:first-of-type {
  margin-left: 0;
}
.menu__item::before {
  content: "";
  background: black;
  height: 2px;
  width: 0;
  transition: width 0.4s ease-in-out;
  position: absolute;
  bottom: 13px;
  left: 0;
}
.menu__item:hover::before {
  width: 100%;
}

.menu__dropdown::after {
  content: "";
  background: url("/images/icons/select-chevron.svg") no-repeat center center;
  display: inline-block;
  width: 15px;
  height: 10px;
  background-size: 30px;
  margin-left: 3px;
}

.menu__dropdown-list {
  position: absolute;
  padding: 15px 0;
  background-color: white;
  width: 100%;
  z-index: 999;
  top: 100%;
}
.menu__dropdown-list::before {
  content: "";
  display: block;
  width: 50%;
  height: 100%;
  background-color: #fff;
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -50%;
}
.menu__dropdown-list::after {
  content: "";
  display: block;
  width: 50%;
  height: 100%;
  background-color: #fff;
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  right: -50%;
}

.menu__dropdown-item {
  padding: 6px 8px;
  line-height: 17px;
}
.menu__dropdown-item a {
  position: relative;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 700;
}
.menu__dropdown-item a::after {
  content: "";
  height: 2px;
  width: 0;
  background-color: black;
  transition: width 0.4s ease-in-out;
  position: absolute;
  bottom: -3px;
  left: 0;
}
.menu__dropdown-item:hover a::after {
  width: 100%;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 1200px) {
  .menu {
    margin: 0;
  }
}

@media only screen and (max-width: 1000px) {
  .menu {
    display: none;
    position: absolute;
    padding: 0px 0px 10px 0px;
    margin: 0;
    width: 100%;
    background-color: white;
    z-index: 999;
  }

  .menu__mobile {
    display: block;
  }

  .menu__items {
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid black;
  }
  .menu__items a {
    font-size: 30px;
  }

  .menu__item {
    margin: 0;
  }
  .menu__item::before {
    display: none;
  }

  .menu__dropdown-list {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
  }

  .menu__dropdown-item {
    padding: 14px 0;
  }
  .menu__dropdown-item a {
    font-family: "Merriweather", serif;
    font-size: 16px;
    font-weight: 300;
  }
  .menu__dropdown-item a::after {
    display: none;
  }
}

@media only screen and (max-width: 425px) {
  .menu__items {
    align-items: start;
  }
  .menu__items a {
    font-size: 18px;
    font-weight: 700;
  }

  .menu__item {
    padding: 17px 15px;
  }

  .menu__dropdown-list {
    align-items: start;
  }

  .menu__dropdown-item {
    padding: 14px 25px;
  }

  .menu__dropdown-item a {
    font-size: 16px;
  }
}
</style>

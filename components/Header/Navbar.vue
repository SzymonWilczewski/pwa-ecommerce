<script setup>
const hamburger = ref(false);

const toggleHamburger = () => {
  hamburger.value = !hamburger.value;

  if (hamburger.value) {
    document.getElementById("menu").classList.add("menu__mobile");
  } else {
    document.getElementById("menu").classList.remove("menu__mobile");
  }
};
</script>

<template>
  <div class="navbar">
    <div class="navbar__logo">
      <NuxtLink to="/">
        <img src="/images/clickfashion-logo.png" alt="Logo" />
      </NuxtLink>
    </div>

    <div class="navbar__links">
      <HeaderLanguage class="navbar__language" />
      <HeaderSearch class="navbar__search" />
      <HeaderAccount class="navbar__account" />
      <HeaderWishlist class="navbar__wishlist" />
      <HeaderCart class="navbar__cart" />
      <div class="navbar__hamburger" @click="toggleHamburger">
        <span />
        <span />
        <span />
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 40px;
  margin: 0 150px;
}

.navbar__logo {
  width: 170px;
}

.navbar__logo > a {
  display: flex;
}

.navbar__links {
  display: flex;
  align-items: center;
  height: 26px;
  column-gap: 26px;
}

.navbar__hamburger {
  display: none;
  height: 26px;
  width: 26px;
  cursor: pointer;
}

.navbar__hamburger span {
  display: none;
  height: 2px;
  width: 23px;
  margin: 5px 0;
  background-color: rgba(0, 0, 0, 0.5);
}

@media only screen and (max-width: 1200px) {
  .navbar {
    margin: 0;
  }

  .navbar__logo {
    width: 150px;
  }
}

@media only screen and (max-width: 1000px) {
  .navbar__logo {
    width: 120px;
  }

  .navbar__language,
  .navbar__account,
  .navbar__wishlist {
    display: none;
  }

  .navbar__hamburger {
    display: inline-block;
  }

  .navbar__hamburger span {
    display: flex;
  }
}
</style>

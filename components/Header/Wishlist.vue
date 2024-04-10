<template>
  <div class="wishlist">
    <NuxtLink to="/">
      <img
        class="wishlist__icon"
        src="/images/icons/wishlist.svg"
        alt="Wishlist"
      />
    </NuxtLink>
  </div>
</template>

<style scoped>
.wishlist {
  height: 26px;
}

.wishlist__icon {
  cursor: pointer;
}
</style>

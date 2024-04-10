<script setup>
const deliveryBanner = ref(true);
</script>

<template>
  <div class="delivery-banner" v-if="deliveryBanner">
    <p class="delivery-banner__text">
      <b>Produkty tworzone ręcznie, wysyłka może wydłużyć się do 5 dni</b>
    </p>
    <span
      class="delivery-banner__close"
      @click="deliveryBanner = !deliveryBanner"
    />
  </div>
</template>

<style scoped>
.delivery-banner {
  display: grid;
  place-items: center;
  background-color: black;
  height: 36px;
  padding: 0 36px 0 12px;
}

.delivery-banner__text {
  display: inline-flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: white;
}
.delivery-banner__text:before {
  content: "";
  background: url("/images/icons/bag-delivery.svg") no-repeat center center;
  height: 16px;
  min-width: 16px;
  background-size: 16px;
  margin-right: 12px;
}

.delivery-banner__close {
  position: absolute;
  right: 12px;
  top: 18px;
  transform: translateY(-50%);
  border: 1px solid white;
  border-radius: 50%;
  height: 18px;
  width: 18px;
  cursor: pointer;
}
.delivery-banner__close:before,
.delivery-banner__close:after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  height: 8px;
  width: 1px;
  background-color: white;
}
.delivery-banner__close:before {
  transform: translate(-50%, -50%) rotate(45deg);
}
.delivery-banner__close:after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
</style>

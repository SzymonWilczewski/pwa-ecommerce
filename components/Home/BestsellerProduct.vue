<script setup>
const props = defineProps({
  sku: String,
});

const product = ref();
const loader = ref(true);
const res = await useFetch(`http://localhost:5000/products/${props.sku}`);

onBeforeMount(() => {
  setTimeout(() => {
    product.value = res.data.value;
    loader.value = false;
  }, 0);
});
</script>

<template>
  <div class="bestseller-product" v-if="!loader">
    <NuxtLink to="/">
      <img
        :src="product?.image"
        :alt="product?.name"
        class="bestseller-product__image"
      />
    </NuxtLink>
    <div class="bestseller-product__details">
      <NuxtLink to="/">
        <div class="bestseller-product__link">{{ product?.name }}</div>
      </NuxtLink>
      <div class="bestseller-product__price">
        <div class="bestseller-product__regular-price">
          {{ product?.regularPrice }} zł
        </div>
        <div class="bestseller-product__final-price">
          {{ product?.finalPrice }} zł
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bestseller-product {
  width: 350px;
}

.bestseller-product__image {
  box-shadow: 9px 5px 50px rgba(0, 0, 0, 0.2);
}

.bestseller-product__details {
  padding-top: 18px;
}

.bestseller-product__link {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  text-align: left;
  color: #000;
}

.bestseller-product__price {
  display: flex;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.5px;
}

.bestseller-product__regular-price {
  font-size: 16px;
  line-height: 23px;
  color: #9a9a9a;
  text-decoration: line-through;
  margin-right: 5px;
}

.bestseller-product__final-price {
  font-size: 18px;
  line-height: 26px;
  color: #000;
}

@media only screen and (max-width: 768px) {
  .bestseller-product {
    width: 100%;
  }

  .bestseller-product__image {
    width: 100%;
    height: 440px;
    object-fit: cover;
    box-shadow: none;
  }

  .bestseller-product__details {
    padding-top: 12px;
  }
}
</style>

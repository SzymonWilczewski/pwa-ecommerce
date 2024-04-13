<template>
  <div class="companies">
    <img
      src="/images/catalog/1.png"
      alt="Made in poland"
      class="companies__image"
    />
    <img
      src="/images/catalog/2.png"
      alt="Naturalne materiały"
      class="companies__image"
    />
    <img src="/images/catalog/3.png" alt="Hand Made" class="companies__image" />
    <img
      src="/images/catalog/4.png"
      alt="Oryginalność"
      class="companies__image"
    />
  </div>
</template>

<style scoped>
.companies {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 41px 40px 73px 40px;
  margin: 0 150px;
}

.companies__image {
  object-fit: scale-down;
  height: 130px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
.companies__image:hover {
  transform: scale(1.2);
}

@media only screen and (max-width: 1200px) {
  .companies {
    margin: 0;
  }

  .companies__image {
    max-width: 160px;
  }
}

@media only screen and (max-width: 768px) {
  .companies {
    flex-wrap: wrap;
  }

  .companies__image {
    min-width: 40%;
    max-width: 40%;
  }
}
</style>

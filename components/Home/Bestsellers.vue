<template>
  <div class="bestsellers">
    <div class="bestsellers__wrapper">
      <div class="bestsellers__title">Top Bestsellery</div>
      <div class="bestsellers__subtitle">
        najczęściej wybierane produkty przez naszych klientów
      </div>
      <div class="bestsellers__bg-text">Bestsellery</div>
      <div class="bestsellers__products">
        <HomeBestsellerProduct sku="30-261" />
        <HomeBestsellerProduct sku="70-657" />
        <HomeBestsellerProduct sku="70-950" />
      </div>
      <NuxtLink to="/">
        <div class="bestsellers__link">
          Zobacz więcej
          <svg class="bestsellers__link-arrow" viewBox="0 0 448 512">
            <path
              d="M313.9 216H12c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h301.9v46.1c0 21.4 25.9 32.1 41 17l86.1-86.1c9.4-9.4 9.4-24.6 0-33.9l-86.1-86.1c-15.1-15.1-41-4.4-41 17V216z"
            />
          </svg>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.bestsellers {
  position: relative;
  margin: 100px auto;
  text-align: center;
}

.bestsellers__wrapper {
  margin: 0 150px;
  padding: 0 15px;
}

.bestsellers__title {
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 1.2px;
  margin-bottom: 14px;
  color: #000;
}

.bestsellers__subtitle {
  font-family: "Merriweather", serif;
  font-size: 16px;
  line-height: 1.25;
  margin: 15px 0 50px 0;
  color: #676767;
}

.bestsellers__bg-text {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 252px;
  font-weight: 700;
  line-height: 1.2;
  color: #000;
  opacity: 0.05;
  white-space: nowrap;
  z-index: -1;
}

.bestsellers__products {
  display: flex;
  justify-content: space-between;
}
.bestsellers__products > * {
  flex: 0 0 30%;
}
.bestsellers__products > :nth-child(1) {
  margin-top: 50px;
}
.bestsellers__products > :nth-child(3) {
  margin-top: 180px;
}

.bestsellers__link {
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 254px;
  min-height: 36px;
  color: #000;
  border: 1px solid #000;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  letter-spacing: 1.83px;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0 20px;
}

.bestsellers__link-arrow {
  height: 20px;
}

@media only screen and (max-width: 1200px) {
  .bestsellers__wrapper {
    margin: 0;
  }

  .bestsellers__bg-text {
    font-size: 180px;
  }
}

@media only screen and (max-width: 768px) {
  .bestsellers__products {
    flex-direction: column;
  }

  .bestsellers__products > :nth-child(1),
  .bestsellers__products > :nth-child(3) {
    margin: 0;
  }

  .bestsellers__link {
    position: static;
    margin: 30px auto 0;
  }
}
</style>

<template>
  <div class="banner">
    <img src="/images/catalog/baner_08-04.png" alt="Banner" />
    <div class="banner__content-wrapper">
      <div class="banner__content">
        <div class="banner__content-category">
          Kolekcja 2024 / MODOWE INSPIRACJE
        </div>
        <div class="banner__content-title">CLICK FASHION</div>
        <div class="banner__content-description">
          Ręcznie robione ubrania, naturalne materiały, polska marka
        </div>
        <NuxtLink to="/">
          <div class="banner__content-link">
            WIĘCEJ NOWOŚCI
            <svg class="banner__content-link-arrow" viewBox="0 0 448 512">
              <path
                d="M313.9 216H12c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h301.9v46.1c0 21.4 25.9 32.1 41 17l86.1-86.1c9.4-9.4 9.4-24.6 0-33.9l-86.1-86.1c-15.1-15.1-41-4.4-41 17V216z"
              />
            </svg>
          </div>
        </NuxtLink>
      </div>
    </div>
    <HomeSocials />
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 150px;
  max-height: 700px;
}

.banner img {
  width: 100%;
  object-fit: cover;
}

.banner__content-wrapper {
  display: flex;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
}

.banner__content {
  width: 100%;
  margin: 0 150px;
  margin-top: 80px;
  padding: 0 15px;
}

.banner__content-category {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  max-width: 540px;
  margin-bottom: 8px;
  color: #fff;
}

.banner__content-title {
  font-family: "Montserrat", sans-serif;
  font-size: 72px;
  line-height: 1.2;
  font-weight: 600;
  max-width: 540px;
  margin-bottom: 16px;
  color: #fff;
}

.banner__content-description {
  font-family: "Merriweather", serif;
  font-size: 15px;
  line-height: 26px;
  max-width: 270px;
  margin-bottom: 15px;
  color: #fff;
}

.banner__content-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 190px;
  min-height: 36px;
  color: #fff;
  background: #000;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  letter-spacing: 1.83px;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0 18px 0 20px;
}

.banner__content-link-arrow {
  height: 20px;
  fill: #fff;
}

@media only screen and (max-width: 1920px) {
  .banner {
    margin: 0;
    max-height: 650px;
  }
}

@media only screen and (max-width: 1200px) {
  .banner {
    max-height: 550px;
  }

  .banner__content {
    margin: 0;
    margin-top: 20px;
  }

  .banner__content-title {
    font-size: 50px;
  }
}

@media only screen and (max-width: 768px) {
  .banner {
    min-height: 550px;
  }

  .banner__content-description {
    display: none;
  }
}
</style>

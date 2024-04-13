<template>
  <div class="promotions">
    <div class="promotions__title">Promocje</div>
    <div class="promotions__wrapper">
      <div class="promotions-box">
        <img
          src="/images/catalog/wyprzedaz_1.png"
          alt="KOLEKCJA | 2023"
          class="promotions-box__image"
        />
        <div class="promotions-box__content">
          <div class="promotions-box__title">KOLEKCJA | 2023</div>
          <div class="promotions-box__text">
            Produkty z sezonu 2023 i wcześniejsze
          </div>
          <NuxtLink to="/">
            <div class="promotions-box__link">
              Zobacz
              <svg class="promotions-box__link-arrow" viewBox="0 0 448 512">
                <path
                  d="M313.9 216H12c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h301.9v46.1c0 21.4 25.9 32.1 41 17l86.1-86.1c9.4-9.4 9.4-24.6 0-33.9l-86.1-86.1c-15.1-15.1-41-4.4-41 17V216z"
                />
              </svg>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="promotions-box">
        <img
          src="/images/catalog/wyprzedaz_2.png"
          alt="NOWA KOLEKCJA | 2024"
          class="promotions-box__image"
        />
        <div class="promotions-box__content">
          <div class="promotions-box__title">NOWA KOLEKCJA | 2024</div>
          <div class="promotions-box__text">Najnowsze modele kolekcji 2024</div>
          <NuxtLink to="/">
            <div class="promotions-box__link">
              Zobacz
              <svg class="promotions-box__link-arrow" viewBox="0 0 448 512">
                <path
                  d="M313.9 216H12c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h301.9v46.1c0 21.4 25.9 32.1 41 17l86.1-86.1c9.4-9.4 9.4-24.6 0-33.9l-86.1-86.1c-15.1-15.1-41-4.4-41 17V216z"
                />
              </svg>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.promotions {
  padding: 0 10px;
  margin-bottom: 17px;
}

.promotions__title {
  padding-top: 62px;
  margin-bottom: 60px;
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0.6px;
  line-height: 1.2;
  text-align: center;
  color: #000;
}

.promotions__wrapper {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.promotions-box {
  position: relative;
}

.promotions-box__content {
  position: absolute;
  bottom: 50px;
  left: 50px;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
}

.promotions-box__title {
  color: #fff;
  letter-spacing: 2.3px;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 28px;
}

.promotions-box__text {
  color: #000;
  line-height: 1.42857143;
}

.promotions-box__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 190px;
  min-height: 36px;
  color: #fff;
  background-color: #000;
  border: 1px solid #000;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  letter-spacing: 1.83px;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0 20px;
}

.promotions-box__link-arrow {
  height: 18px;
  fill: #fff;
}

@media only screen and (max-width: 768px) {
  .promotions {
    padding: 0;
  }

  .promotions__title {
    padding-top: 24px;
    margin-bottom: 31px;
    font-size: 28px;
  }
  .promotions__wrapper {
    flex-direction: column;
  }

  .promotions-box__image {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
}
</style>

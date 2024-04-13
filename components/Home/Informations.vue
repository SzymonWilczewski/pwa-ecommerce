<template>
  <div class="informations">
    <div class="informations__content">
      <div class="informations__box">
        <img
          src="/images/icons/discount.svg"
          alt="Discount"
          class="informations__icon"
        />
        <div class="informations__title">Skorzystaj z promocji</div>
        <div class="informations__text">
          Odwiedzając naszą stronę zawsze możesz liczyć na ciekawe promocje
        </div>
      </div>
      <div class="informations__box">
        <img
          src="/images/icons/delivery.svg"
          alt="Delivery"
          class="informations__icon"
        />
        <div class="informations__title">wysyłka</div>
        <div class="informations__text">
          Gwarantujemy wysyłkę w ciągu 24h od zaksięgowania płatności
        </div>
      </div>
      <div class="informations__box">
        <img
          src="/images/icons/privacy.svg"
          alt="Privacy"
          class="informations__icon"
        />
        <div class="informations__title">Bezpieczne zakupy</div>
        <div class="informations__text">
          Kupując w naszym sklepie masz gwarancję bezpiecznych zakupów i
          płatności
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.informations {
  padding: 82px 0 62px;
  background-color: #f9f7f4;
}

.informations__content {
  display: flex;
  justify-content: space-around;
  margin: 0 150px;
  padding: 0 40px;
}

.informations__box {
  max-width: 320px;
  margin-bottom: 18px;
  text-align: center;
  padding: 0 3.6%;
}

.informations__icon {
  height: 80px;
  margin-bottom: 30px;
}

.informations__title {
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1.86px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #000;
  margin-bottom: 20px;
}

.informations__text {
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.6;
}

@media only screen and (max-width: 1200px) {
  .informations__content {
    margin: 0;
  }
}

@media only screen and (max-width: 768px) {
  .informations__content {
    flex-wrap: wrap;
  }
}
</style>

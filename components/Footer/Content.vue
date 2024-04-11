<template>
  <div class="content">
    <div class="content-links">
      <div class="content-links-box">
        <h3 class="content-links-box__title">Poradnik zakupowy</h3>
        <ul class="content-links-box__links">
          <li class="content-links-box__link">
            <NuxtLink to="/">
              <span>Metody płatności</span>
            </NuxtLink>
          </li>

          <li class="content-links-box__link">
            <NuxtLink to="/">
              <span>Formy dostawy</span>
            </NuxtLink>
          </li>

          <li class="content-links-box__link">
            <NuxtLink to="/">
              <span>Reklamacje</span>
            </NuxtLink>
          </li>

          <li class="content-links-box__link">
            <NuxtLink to="/">
              <span>Zwroty, wymiana</span>
            </NuxtLink>
          </li>

          <li class="content-links-box__link">
            <NuxtLink to="/">
              <span>Kontakt</span>
            </NuxtLink>
          </li>

          <li class="content-links-box__link">
            <NuxtLink to="/">
              <span>Testowy link</span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="content-links-box">
        <h3 class="content-links-box__title">Zasady i regulaminy</h3>
        <ul class="content-links-box__links">
          <li class="content-links-box__link">
            <NuxtLink to="/">
              <span>Regulamin sklepu</span>
            </NuxtLink>
          </li>

          <li class="content-links-box__link">
            <NuxtLink to="/">
              <span>Regulamin karty stałego klienta</span>
            </NuxtLink>
          </li>

          <li class="content-links-box__link">
            <NuxtLink to="/">
              <span>Regulamin karty podarunkowej</span>
            </NuxtLink>
          </li>

          <li class="content-links-box__link">
            <NuxtLink to="/">
              <span>Saldo karty podarunkowej</span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="content-links-box">
        <h3 class="content-links-box__title">O nas</h3>
        <ul class="content-links-box__links">
          <li class="content-links-box__link">
            <NuxtLink to="/">
              <span>Regulamin sklepu</span>
            </NuxtLink>
          </li>

          <li class="content-links-box__link">
            <NuxtLink to="/">
              <span>Regulamin karty stałego klienta</span>
            </NuxtLink>
          </li>

          <li class="content-links-box__link">
            <NuxtLink to="/">
              <span>Regulamin karty podarunkowej</span>
            </NuxtLink>
          </li>

          <li class="content-links-box__link">
            <NuxtLink to="/">
              <span>Saldo karty podarunkowej</span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="content-links-box content-social-box">
        <ul class="content-links-box__links">
          <li class="content-links-box__link">
            <NuxtLink to="/">
              <img src="/images/icons/social/fb.svg" alt="Facebook" />
            </NuxtLink>
          </li>

          <li class="content-links-box__link">
            <NuxtLink to="/">
              <img src="/images/icons/social/x.svg" alt="Twitter" />
            </NuxtLink>
          </li>

          <li class="content-links-box__link">
            <NuxtLink to="/">
              <img src="/images/icons/social/instagram.svg" alt="Instagram" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding: 0 40px;
  margin: 0 auto;
  max-width: 1140px;
}

.content-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 48px;
}

.content-links-box {
  flex: 1 0 25%;
  margin-bottom: 49px;
}

.content-links-box__title {
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  letter-spacing: 0.6px;
  line-height: 1.5;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 24px;
  color: #000;
}

.content-links-box__links {
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
}
.content-links-box__links span {
  color: #000;
}

.content-links-box__link {
  margin-bottom: 10px;
  letter-spacing: 0.3px;
  line-height: 1.9;
}

.content-social-box ul {
  display: flex;
  margin-top: 20px;
}

.content-social-box li {
  margin-right: 34px;
}

.content-social-box img {
  height: 30px;
}

@media only screen and (max-width: 1024px) {
  .content-links-box {
    flex: 1 0 30.3%;
    max-width: 30.3%;
  }

  .content-social-box ul {
    max-width: 215px;
    justify-content: space-between;
    margin: 0;
  }

  .content-social-box li {
    margin: 0;
  }
}

@media only screen and (max-width: 425px) {
  .content {
    padding: 0 15px;
  }

  .content-links-box {
    flex: 1 0 45.8%;
    max-width: 45.8%;
  }

  .content-social-box ul {
    max-width: 160px;
    padding-right: 23px;
    margin-top: 30px;
  }
}
</style>

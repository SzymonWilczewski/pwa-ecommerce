<template>
  <div class="newsletter">
    <div class="newsletter-wrapper">
      <div class="newsletter-title">Newsletter</div>
      <div class="newsletter-content">
        <div class="newsletter-text">
          Nie przegap okazji, dołącz do naszego newslettera.
        </div>
        <form class="newsletter-form">
          <div class="newsletter-email">
            <input
              name="email"
              type="email"
              id="newsletter"
              placeholder="Podaj swój adres Email"
            />
          </div>
          <div class="newsletter-submit">
            <button title="Zapisz się!" type="submit">
              Zapisz się!
              <svg class="newsletter-submit-arrow" viewBox="0 0 448 512">
                <path
                  d="M313.9 216H12c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h301.9v46.1c0 21.4 25.9 32.1 41 17l86.1-86.1c9.4-9.4 9.4-24.6 0-33.9l-86.1-86.1c-15.1-15.1-41-4.4-41 17V216z"
                />
              </svg>
            </button>
          </div>
          <div class="newsletter-checkbox">
            <label>
              <input type="checkbox" name="rodoNewsletter" />
              <span>Zapoznałem/am się z polityką prywatności</span>
            </label>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.newsletter {
  position: relative;
  background: #f9f7f4;
}

.newsletter-wrapper {
  padding: 80px 40px;
  margin: 0 150px;
}

.newsletter-wrapper::before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -25px;
  height: 50px;
  width: 1px;
  border-right: 1px solid #000;
}

.newsletter-title {
  font-family: "Merriweather", serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 13px;
  color: #000;
}

.newsletter-text {
  font-family: "Merriweather", serif;
  font-size: 14px;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 28px;
  color: #676767;
}

.newsletter-form {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 560px;
  margin: 0 auto;
}

.newsletter-email input {
  padding-left: 15px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  letter-spacing: 0.3px;
  line-height: 1.42857143;
  border: 1px solid #9a9a9a;
  color: #676767;
  min-height: 46px;
  width: 367px;
}

.newsletter-submit button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 190px;
  min-height: 46px;
  color: #fff;
  background-color: #d9cfce;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  letter-spacing: 2.1px;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0 20px;
  cursor: pointer;
}
.newsletter-submit button:hover {
  filter: brightness(102%);
  padding-right: 17px;
}

.newsletter-submit-arrow {
  height: 20px;
  fill: #fff;
}

.newsletter-checkbox {
  margin-top: 10px;
  margin-right: auto;
}

.newsletter-checkbox label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.newsletter-checkbox input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  cursor: pointer;
}
.newsletter-checkbox input[type="checkbox"]:not(:disabled):checked {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 32 32" xml:space="preserve"><path style="fill: %23274c77" d="M11.941,28.877l-11.941-11.942l5.695-5.696l6.246,6.246l14.364-14.364L32,8.818"/></svg>');
}

.newsletter-checkbox span {
  margin-left: 12px;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  letter-spacing: 0.3px;
  line-height: 1.42857143;
  margin-top: 4px;
}

@media only screen and (max-width: 1200px) {
  .newsletter-wrapper {
    margin: 0;
  }
}

@media only screen and (max-width: 768px) {
  .newsletter-wrapper {
    padding: 65px 15px 40px 15px;
  }

  .newsletter-title {
    font-size: 41px;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-email input {
    width: 100%;
  }

  .newsletter-submit {
    order: 3;
    margin-top: 20px;
  }
}
</style>

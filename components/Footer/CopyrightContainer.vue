<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <div class="copyright-container">
    <div class="copyright-wrapper">
      <small class="copyright-container__copyright">
        <span>© 2023 CLICK FASHION. Wszelkie prawa zastrzeżone.</span>
      </small>

      <div class="copyright-container__gotop" @click="scrollToTop">
        <div class="copyright-container__arrow"></div>
        <!-- <button>Button</button> -->
      </div>

      <span class="copyright-container__proudly">
        <NuxtLink to="/">
          <span>Proudly made by</span>
          <svg
            id="bcf9a02f-b106-47ed-86ae-dbd221e9ed9e"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 505.42 90"
          >
            <path
              class="e0081e77-e708-49d2-b65d-d6c1f312a81c"
              d="M294,13.5,263.12,90h-5.68L294,0l36.48,90h-5.68ZM171.63,0h41.69V5.37H177.19V84.63h36.13V90H171.63ZM93.69,87.61Q87,89.76,76,90H60.22V0H76Q86.62,0,93.34,2.27a37.34,37.34,0,0,1,15.06,9.07q13.89,13.25,13.89,33.78,0,19.58-13.43,32.94A38,38,0,0,1,93.69,87.61Zm10.42-72.45Q93.81,5.6,75.85,5.37H65.78V84.63H75.85q18.65,0,29.3-10.86,11.35-11.7,11.59-28.65Q116.74,27.09,104.11,15.16ZM0,0H5.56V90H0Z"
            ></path>
            <path
              class="e3e73b96-a66a-4d6c-bc07-16b2657fe34c"
              d="M338.25,16.51v-.07a9.72,9.72,0,0,1,9.8-9.84,9.52,9.52,0,0,1,7.53,3.25l-2.71,2.88A6.32,6.32,0,0,0,348,10.38c-3.14,0-5.46,2.71-5.46,6v.07a5.7,5.7,0,0,0,5.64,6,6.57,6.57,0,0,0,4.88-2.31l2.6,2.56a9.5,9.5,0,0,1-7.7,3.53A9.61,9.61,0,0,1,338.25,16.51Z"
            ></path>
            <path
              class="e3e73b96-a66a-4d6c-bc07-16b2657fe34c"
              d="M355.58,16.51v-.07a10,10,0,0,1,20.07-.07v.07a9.84,9.84,0,0,1-10.09,9.8A9.73,9.73,0,0,1,355.58,16.51Zm15.75,0v-.07a5.81,5.81,0,0,0-5.77-6.06c-3.46,0-5.67,2.71-5.67,6v.07a5.8,5.8,0,0,0,5.74,6A5.64,5.64,0,0,0,371.33,16.51Z"
            ></path>
            <path
              class="e3e73b96-a66a-4d6c-bc07-16b2657fe34c"
              d="M377.54,7h4.31V9.85a6.73,6.73,0,0,1,5.74-3.25,6,6,0,0,1,5.63,3.32,7.58,7.58,0,0,1,6.35-3.32c4.1,0,6.59,2.6,6.59,7.2v12h-4.31V15.12c0-3-1.39-4.6-3.81-4.6s-4,1.64-4,4.67V25.82h-4.32V15.09c0-2.93-1.42-4.57-3.81-4.57s-4,1.79-4,4.67V25.82h-4.31Z"
            ></path>
            <path
              class="e3e73b96-a66a-4d6c-bc07-16b2657fe34c"
              d="M408.91,7h4.31V9.85A6.76,6.76,0,0,1,419,6.6a6,6,0,0,1,5.64,3.32,7.55,7.55,0,0,1,6.34-3.32c4.1,0,6.6,2.6,6.6,7.2v12h-4.32V15.12c0-3-1.39-4.6-3.81-4.6s-4,1.64-4,4.67V25.82h-4.31V15.09c0-2.93-1.43-4.57-3.82-4.57s-4,1.79-4,4.67V25.82h-4.31Z"
            ></path>
            <path
              class="e3e73b96-a66a-4d6c-bc07-16b2657fe34c"
              d="M439.25,16.48V16.4c0-5.38,3.82-9.8,9.2-9.8,6,0,9,4.71,9,10.13,0,.39,0,.78-.07,1.21H443.56A5.26,5.26,0,0,0,449,22.71a6.83,6.83,0,0,0,5.1-2.24l2.53,2.24a9.51,9.51,0,0,1-7.7,3.53A9.39,9.39,0,0,1,439.25,16.48Zm13.94-1.39c-.29-2.78-1.93-5-4.78-5-2.64,0-4.49,2-4.88,5Z"
            ></path>
            <path
              class="e3e73b96-a66a-4d6c-bc07-16b2657fe34c"
              d="M459.32,7h4.32v4.25c1.17-2.82,3.35-4.75,6.66-4.6V11.2h-.25c-3.78,0-6.41,2.46-6.41,7.45v7.17h-4.32Z"
            ></path>
            <path
              class="e3e73b96-a66a-4d6c-bc07-16b2657fe34c"
              d="M469.87,16.51v-.07a9.72,9.72,0,0,1,9.81-9.84,9.49,9.49,0,0,1,7.52,3.25l-2.71,2.88a6.32,6.32,0,0,0-4.85-2.35c-3.13,0-5.45,2.71-5.45,6v.07a5.69,5.69,0,0,0,5.63,6,6.57,6.57,0,0,0,4.88-2.31l2.61,2.56a9.87,9.87,0,0,1-17.44-6.2Z"
            ></path>
            <path
              class="e3e73b96-a66a-4d6c-bc07-16b2657fe34c"
              d="M487.2,16.48V16.4c0-5.38,3.82-9.8,9.2-9.8,6,0,9,4.71,9,10.13,0,.39,0,.78-.07,1.21H491.51a5.26,5.26,0,0,0,5.42,4.77,6.83,6.83,0,0,0,5.1-2.24l2.53,2.24a9.51,9.51,0,0,1-7.7,3.53A9.39,9.39,0,0,1,487.2,16.48Zm13.94-1.39c-.29-2.78-1.93-5-4.78-5-2.64,0-4.49,2-4.88,5Z"
            ></path>
          </svg>
        </NuxtLink>
      </span>
    </div>
  </div>
</template>

<style scoped>
.copyright-container {
  position: relative;
  background-color: #000;
}

.copyright-wrapper {
  display: flex;
  align-items: center;
  min-height: 70px;
  max-width: 1190px;
  padding: 0 40px;
  margin: 0 auto;
}

.copyright-container__copyright {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  letter-spacing: 0.5px;
  line-height: 1.2;
  color: #fff;
}

.copyright-container__gotop {
  display: grid;
  place-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 30px;
  width: 40px;
  border: 1px solid #aeb3bf;
  border-radius: 10px;
  cursor: pointer;
}

.copyright-container__arrow {
  display: inline-block;
  border: solid #aeb3bf;
  border-width: 0 2px 2px 0;
  padding: 3px;
  margin-top: 3px;
  transform: rotate(225deg);
}

.copyright-container__proudly {
  margin-left: auto;
}
.copyright-container__proudly a {
  display: flex;
}
.copyright-container__proudly span {
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  line-height: 1.2;
  margin-right: 21px;
}
.copyright-container__proudly svg {
  width: 74px;
}

.copyright-container__proudly .e0081e77-e708-49d2-b65d-d6c1f312a81c {
  fill: #fff;
  fill-rule: evenodd;
}

.copyright-container__proudly .e3e73b96-a66a-4d6c-bc07-16b2657fe34c {
  fill: #fcde51;
}

@media only screen and (max-width: 1024px) {
  .copyright-container__copyright {
    font-size: 11px;
  }
}

@media only screen and (max-width: 768px) {
  .copyright-wrapper {
    flex-direction: column-reverse;
    padding: 55px 15px 0 15px;
  }

  .copyright-container__copyright {
    margin-bottom: 24px;
  }

  .copyright-container__gotop {
    top: 15%;
  }

  .copyright-container__proudly {
    margin: 0 0 25px 0;
  }

  .copyright-container__proudly a {
    flex-direction: column;
  }

  .copyright-container__proudly span {
    font-size: 11px;
    letter-spacing: 0.5px;
    margin-right: 9px;
  }

  .copyright-container__proudly svg {
    margin-top: 10px;
    width: 110px;
    max-width: 110px;
  }
}
</style>

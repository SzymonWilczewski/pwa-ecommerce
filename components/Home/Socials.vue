<template>
  <div class="socials">
    <p class="socials__text">Social media</p>
    <ul class="socials__links">
      <li class="socials__link">
        <NuxtLink to="/">
          <img src="/images/icons/social/fb.svg" alt="Facebook" />
        </NuxtLink>
      </li>
      <li class="socials__link">
        <NuxtLink to="/">
          <img src="/images/icons/social/instagram.svg" alt="Instagram" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.socials {
  position: absolute;
  top: 0;
  right: 0;
  padding: 172px 25px 25px 25px;
  background: #fff;
}

.socials__text {
  position: absolute;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  letter-spacing: 2.2px;
  opacity: 0.5;
  color: #000;
  line-height: 1.2;
  text-transform: uppercase;
  transform: rotate(90deg);
  white-space: nowrap;
  top: 74px;
  right: 0;
  left: 0;
}

.socials__links {
  display: flex;
  flex-direction: column;
}

.socials__link {
  height: 20px;
  width: 20px;
  margin: 20px 0;
}

@media only screen and (max-width: 768px) {
  .socials {
    display: none;
  }
}
</style>

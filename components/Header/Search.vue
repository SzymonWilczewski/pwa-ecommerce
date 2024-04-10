<script setup>
const searchInputRef = ref();
const searchInput = ref(false);

const toggleSearchInput = () => {
  searchInput.value = !searchInput.value;
  nextTick(() => searchInput.value && searchInputRef.value.focus());
};
</script>

<template>
  <div class="search">
    <img
      class="search__icon"
      src="/images/icons/search.svg"
      alt="Search"
      @click="toggleSearchInput"
    />
    <Transition>
      <input
        class="search__input"
        placeholder="Szukaj w sklepie..."
        ref="searchInputRef"
        v-show="searchInput"
      />
    </Transition>
  </div>
</template>

<style scoped>
.search {
  height: 26px;
  position: relative;
}

.search__icon {
  cursor: pointer;
}

.search__input {
  position: absolute;
  right: 30px;
  top: -5px;
  height: 36px;
  width: 300px;
  padding: 0 10px;
  border: 1px solid #9a9a9a;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  transition: opacity 0.4s ease-in-out;
}
.search__input::placeholder {
  text-transform: uppercase;
}
.search__input:focus {
  outline: none;
  box-shadow: 0 0 3px 1px #68a8e0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 768px) {
  .search {
    position: static;
  }

  .search__input {
    top: 100%;
    right: 0;
    width: 100%;
  }
}
</style>

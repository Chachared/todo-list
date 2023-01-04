<script setup lang="ts">
import TheHeader from './components/Header.vue'
import TheBody from './components/Body.vue'
</script>

<template>
  <header>
    <img alt="logo" class="logo" src="./assets/orko.png" width="150" height="150" />

    <div class="wrapper">
      <TheHeader msg="You did it!" />
    </div>
  </header>

  <main>
    <TheBody />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

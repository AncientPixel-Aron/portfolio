<script setup lang="ts">
import HeaderBlock from './components/HeaderBlock.vue'
import FooterBlock from './components/FooterBlock.vue'
</script>

<template>
  <div class="app-shell">
    <HeaderBlock />
    <main class="main">
      <!-- <div class="container"> -->
      <RouterView />
      <!-- </div> -->
    </main>
    <FooterBlock />
  </div>
</template>

<style scoped lang="scss">
.app-shell {
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
  padding: 2rem;
}

.main {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

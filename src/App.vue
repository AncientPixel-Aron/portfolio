<script setup lang="ts">
import HeaderBlock from './components/HeaderBlock.vue'
import FooterBlock from './components/FooterBlock.vue'
</script>

<template>
  <HeaderBlock />
  <div class="main-content">
    <h1>Portfolio</h1>
    <p>Work in progress</p>
  </div>
  <FooterBlock />
</template>

<style scoped lang="scss">
.main-content {
  height: 100%;
  padding: 3.5rem;
  text-transform: uppercase;
}
</style>

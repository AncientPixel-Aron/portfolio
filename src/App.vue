<script setup lang="ts">
import HeaderBlock from './components/HeaderBlock.vue'
import FooterBlock from './components/FooterBlock.vue'
</script>

<template>
  <HeaderBlock />
  <div class="main h-full p-14 uppercase">
    <RouterView />
  </div>
  <FooterBlock />
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
import HeaderBlock from './components/HeaderBlock.vue'
import FooterBlock from './components/FooterBlock.vue'
</script>

<template>
  <div class="flex h-screen min-h-screen flex-col p-8">
    <HeaderBlock />

    <main
      class="scrollbar-hide mx-auto flex min-h-0 w-full flex-1 flex-col items-center gap-6 overflow-y-auto md:px-20 py-6 md:py-8"
    >
      <RouterView />
    </main>

    <FooterBlock />
  </div>
</template>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}
</style>

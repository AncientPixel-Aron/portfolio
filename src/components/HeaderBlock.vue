<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')

const updateTime = () => {
  currentTime.value = new Date().toLocaleTimeString('nl-NL')
}

let interval: ReturnType<typeof setInterval>

onMounted(() => {
  updateTime()
  interval = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div
    class="flex flex-col border border-[var(--color-primary)] text-[var(--color-primary)] uppercase md:flex-row md:flex-nowrap md:items-center md:justify-between"
  >
    <div class="hidden md:block px-4 py-[0.3rem] md:min-w-56 md:shrink-0 md:border-b-0 md:pr-12">
      Security Software V1
    </div>

    <span class="hidden md:block h-full w-px bg-[var(--color-primary)]"></span>

    <div class="px-4 py-[0.3rem] md:min-w-0 md:flex-1 md:border-b-0 md:pl-8 md:pr-12">
      Terminal Access Screen
    </div>

    <span class="hidden md:block h-full w-px bg-[var(--color-primary)]"></span>

    <div class="hidden md:block px-4 py-[0.3rem] md:shrink-0 md:pl-12 md:pr-12">
      {{ currentTime }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

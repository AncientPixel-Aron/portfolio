<script setup lang="ts">
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Current time display
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

// Navigation
const route = useRoute()
const router = useRouter()

const pageName = computed(() =>
  route.meta?.title ? String(route.meta.title) : route.name ? String(route.name) : route.path,
)

const showBack = computed(() => {
  const showBackButton = route.meta?.showBackButton ?? true
  return showBackButton !== undefined ? Boolean(showBackButton) : false
})

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    // Always go back to overview if there is no history to go back to
    router.push('/overview')
  }
}
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
      <div class="flex items-center space-x-3">
        <button
          v-if="showBack"
          @click="goBack"
          class="px-2 py-0.5 border border-[var(--color-primary)] rounded hover:bg-[var(--color-primary)] hover:text-black"
        >
          <ArrowLeftIcon class="h-4 w-4" />
        </button>

        <div class="font-semibold truncate">{{ pageName }}</div>
      </div>
    </div>

    <span class="hidden md:block h-full w-px bg-[var(--color-primary)]"></span>

    <div class="hidden md:block px-4 py-[0.3rem] md:shrink-0 md:pl-12 md:pr-12">
      {{ currentTime }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

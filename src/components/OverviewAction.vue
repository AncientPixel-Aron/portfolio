<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps({
  title: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    default: '85SD4F3Q5541',
  },
  subtitle: {
    type: String,
    default: 'PROGRAM',
  },
  to: { type: [String, Object], required: true },
})
</script>

<template>
  <RouterLink
    :to="to"
    class="group flex aspect-[0.75] w-64 flex-col border border-primary transition-colors duration-150 bg-transparent text-primary hover:bg-primary hover:text-background-primary"
    active-class="bg-primary text-background-primary"
  >
    <!-- Main area -->
    <div class="flex flex-1 items-center justify-center p-6">
      <span class="text-3xl tracking-wide uppercase">
        {{ title }}
      </span>
    </div>

    <!-- Footer -->
    <div class="flex h-12 border-t border-current">
      <div class="hidden md:flex w-[38%] items-center border-r border-current px-2 text-[0.65rem]">
        {{ code }}
      </div>

      <div
        class="flex flex-1 items-center px-2 text-left text-[0.6rem] leading-none uppercase whitespace-pre-line"
      >
        {{ subtitle }}
      </div>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.group {
  background: transparent;
  color: var(--color-primary);

  &:hover,
  &.active,
  &:active {
    background: var(--color-primary);
    color: var(--background-primary);
  }
}
</style>

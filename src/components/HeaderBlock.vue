<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')

const updateTime = () => {
  currentTime.value = new Date().toLocaleTimeString('nl-NL')
}

let interval: number | undefined

onMounted(() => {
  updateTime()
  interval = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="header">
    <div class="text start">Security Software V1</div>
    <span class="divider"></span>
    <div class="text middle full">Terminal Access Screen</div>
    <span class="divider"></span>
    <div class="text end">{{ currentTime }}</div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  text-transform: uppercase;

  .text {
    flex: 0 0 auto;
    padding: 0.3rem 1rem;

    &.full {
      flex: 1 1 auto;
      min-width: 0;
    }

    &.start {
      min-width: 14rem;
      padding-right: 3rem;
    }
    &.middle {
      padding-left: 2rem;
      padding-right: 3rem;
    }
    &.end {
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }
}

.divider {
  display: block;
  width: 1px;
  height: 100%;
  background-color: var(--color-primary);
}
</style>

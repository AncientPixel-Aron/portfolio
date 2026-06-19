<script setup lang="ts">
import router from '@/router'
import { ref, onMounted } from 'vue'

const targetUsername = 'ADMINISTRATOR'
const typingSpeed = 150 // In ms per character
const pauseBeforeClick = 600 // Delay after typing finishes

// States
const maskedUsername = ref('')
const isButtonActive = ref(false)

// Typing animation logic
const startTypingAnimation = () => {
  console.log('Logging in...')
  let currentIndex = 0

  const interval = setInterval(() => {
    if (currentIndex < targetUsername.length) {
      maskedUsername.value += '*'
      currentIndex++
    } else {
      clearInterval(interval)

      setTimeout(() => {
        triggerButtonPress()
      }, pauseBeforeClick)
    }
  }, typingSpeed)
}

// Button press logic
const triggerButtonPress = () => {
  isButtonActive.value = true

  setTimeout(() => {
    isButtonActive.value = false
    handleLogin()
  }, 350)
}

const handleLogin = () => {
  console.log('Routing to Overview')
  router.push({ name: 'overview' }) // Navigate to the OverviewView
}

onMounted(() => {
  startTypingAnimation()
})
</script>

<template>
  <div class="flex h-full items-center justify-center">
    <div class="flex w-full max-w-[31.25rem] flex-col gap-2">
      <label class="text-[1.2rem] font-bold tracking-[0.125rem] text-primary"> USERNAME: </label>

      <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div class="flex h-10 flex-1 items-center border border-primary bg-transparent px-3 py-1">
          <input
            disabled
            v-model="maskedUsername"
            class="w-full bg-transparent text-[1.4rem] leading-none tracking-[0.1875rem] text-primary outline-none uppercase"
          />
        </div>

        <button
          :class="[
            'next-btn h-10 w-fit cursor-pointer border px-6 text-base font-bold tracking-[0.0625rem] transition-all duration-100 self-start',
            isButtonActive ? 'active' : '',
          ]"
          @click="handleLogin"
        >
          NEXT
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.next-btn {
  background: transparent;
  color: var(--color-primary);

  &.active,
  &:active {
    background: var(--color-primary);
    color: var(--background-primary);
  }
}

.blinking {
  animation: blink 0.8s infinite steps(1);
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>

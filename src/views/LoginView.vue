<script setup lang="ts">
import router from '@/router'
import { ref, onMounted } from 'vue'

const targetUsername = 'ADMINISTRATOR'
const typingSpeed = 150 // In ms per character
const pauseBeforeClick = 600 // Delay after typing finishes

// States
const maskedUsername = ref('')
const isCursorBlinking = ref(true)
const isButtonActive = ref(false)

const startTypingAnimation = () => {
  console.log('Logging in...')
  let currentIndex = 0
  isCursorBlinking.value = false

  const interval = setInterval(() => {
    if (currentIndex < targetUsername.length) {
      maskedUsername.value += '*'
      currentIndex++
    } else {
      clearInterval(interval)
      isCursorBlinking.value = true

      setTimeout(() => {
        triggerButtonPress()
      }, pauseBeforeClick)
    }
  }, typingSpeed)
}

const triggerButtonPress = () => {
  isButtonActive.value = true

  setTimeout(() => {
    isButtonActive.value = false
    handleLogin()
  }, 250)
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
  <div class="login-view">
    <div class="login-widget">
      <label class="terminal-label">USERNAME:</label>

      <div class="input-row">
        <div class="input-wrapper">
          <span class="asterisks">{{ maskedUsername }}</span>
          <span :class="['cursor', { blinking: isCursorBlinking }]">_</span>
        </div>

        <button :class="['next-btn', { 'btn-active': isButtonActive }]" @click="handleLogin">
          NEXT
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login-widget {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: 31.25rem;
}

.terminal-label {
  color: var(--color-primary);
  font-size: 1.2rem;
  letter-spacing: 0.125rem;
  font-weight: bold;
}

.input-row {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.input-wrapper {
  flex-grow: 1;
  border: 0.0625rem solid var(--color-primary); // 1px
  background-color: transparent;
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
  box-sizing: border-box;
}

.asterisks {
  color: var(--color-primary);
  font-size: 1.4rem;
  letter-spacing: 0.1875rem;
  line-height: 1;
}

.cursor {
  color: var(--color-primary);
  font-size: 1.4rem;
  margin-left: 0.125rem;

  &.blinking {
    animation: blink 0.8s infinite steps(1);
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.next-btn {
  background-color: transparent;
  color: var(--color-primary);
  border: 0.0625rem solid var(--color-primary); // 1px
  height: 2.5rem;
  padding: 0 1.5rem;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 0.0625rem;
  cursor: pointer;
  transition: all 0.1s ease;

  &.btn-active,
  &:active {
    background-color: var(--color-primary);
    color: var(--background-primary);
  }
}
</style>

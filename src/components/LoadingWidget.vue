<script setup lang="ts"></script>

<template>
  <div class="loading-widget">
    <div class="label">LOADING...</div>
    <div class="loader">
      <span />
      <span />
      <span />
    </div>
  </div>
</template>

<style scoped lang="scss">
.loading-widget {
  text-align: center;
  color: var(--color-primary);
}

.label {
  color: var(--color-primary);
  font-size: 1.2rem;
  letter-spacing: 0.125rem;
  padding: 1rem;
  font-weight: bold;
}

.loader {
  display: inline-flex;
  gap: 0.75rem;
}

.loader span {
  width: 0.75rem;
  height: 0.75rem;
  background: var(--color-primary);
  animation: pulse 0.8s ease-in-out infinite;
}

.loader span:nth-child(2) {
  animation-delay: 0.2s;
}

.loader span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.35;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}
</style>

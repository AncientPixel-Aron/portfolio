<script setup lang="ts"></script>

<template>
  <div class="footer">
    <div class="text start">INTERFACE LOADED</div>
    <div class="text middle full">
      © 2026 <a href="https://github.com/AncientPixel-Aron">Aron v.D</a> - All rights reserved
    </div>
    <div class="text end">BUILD 1.0.0</div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
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
      padding-right: calc(3rem + 1px); /* Account for divider width */
    }
    &.middle {
      padding-left: 2rem;
      padding-right: 3rem;
    }
    &.end {
      padding-left: calc(3rem + 1px); /* Account for divider width */
      padding-right: 3rem;
    }
  }
}
</style>

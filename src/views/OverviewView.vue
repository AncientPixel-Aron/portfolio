<script setup lang="ts">
import OverviewAction from '@/components/OverviewAction.vue'
</script>

<template>
  <div class="h-full flex flex-wrap gap-8 items-center justify-center content-start">
    <OverviewAction
      :title="'PORTFOLIO'"
      :subtitle="'Work Experience'"
      :code="'85SD4F3Q5541'"
      :to="{ name: 'portfolio' }"
    />
    <OverviewAction
      :title="'PC SPECS'"
      :subtitle="'COMPONENTS & HARDWARE'"
      :code="'19AD7P2M8840'"
      :to="{ name: 'pc-specs' }"
    />
    <OverviewAction :title="'UNKNOWN'" :subtitle="'PROGRAM'" :code="'UNKNOWN-001'" :to="'#'" />
    <OverviewAction :title="'UNKNOWN'" :subtitle="'PROGRAM'" :code="'UNKNOWN-002'" :to="'#'" />
  </div>
</template>

<style scoped lang="scss"></style>

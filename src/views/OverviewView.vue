<script setup lang="ts">
import OverviewAction from '@/components/OverviewAction.vue'
</script>

<template>
  <div
    class="overview-container flex flex-wrap h-full gap-8 h-auto items-center justify-center content-start md:content-center overflow-y-auto"
  >
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

<style scoped lang="scss">
.overview-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.overview-container::-webkit-scrollbar {
  display: none;
}
</style>

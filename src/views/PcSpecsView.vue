<script setup lang="ts">
import { ref } from 'vue'
import ImagePreviewModal from '@/components/ImagePreviewModal.vue'

type SpecItem = {
  name: string
  value: string
}

type SpecGroup = {
  title: string
  items: SpecItem[]
}

const specGroups: SpecGroup[] = [
  {
    title: 'Core System',
    items: [
      { name: 'Case', value: 'Fractal North (TG Black)' },
      { name: 'Motherboard', value: 'Asus ProArt X870E-CREATOR WIFI' },
      { name: 'CPU', value: 'AMD Ryzen 7 9800X3D' },
      { name: 'CPU Cooler', value: 'NZXT Kraken Elite' },
    ],
  },
  {
    title: 'Graphics & Memory',
    items: [
      { name: 'GPU', value: 'Asus ProArt GeForce RTX 5080 OC' },
      { name: 'GPU Mount', value: 'NZXT Vertical GPU Mounting Kit' },
      { name: 'RAM', value: 'Corsair Vengeance RGB 64GB (DDR5-6000 CL30)' },
    ],
  },
  {
    title: 'Storage & Cooling & Power',
    items: [
      { name: 'PSU', value: 'Corsair RM1000x (Platinum)' },
      { name: 'Fans', value: '3x Noctua NF-A12x25 G2 PWM <br> 3x Lian Li UNI FAN SL-INF' },
      { name: 'Storage', value: 'Samsung 990 PRO 4TB + 2TB <br> Samsung 980 PRO 1TB' },
    ],
  },
  {
    title: 'Peripherals',
    items: [
      { name: 'Monitor', value: 'Samsung Odyssey OLED G8 G85SD 34"' },
      { name: 'Keyboard', value: 'Glorious GMMK Pro - Custom Silent' },
      { name: 'Mouse', value: 'Logitech G403 Hero <br> Logitech MX Master 2S (Work)' },
      { name: 'Headphone', value: 'Beyerdynamic DT 700 Pro X' },
      { name: 'DAC + Amp', value: 'FiiO K5 Pro ESS' },
      { name: 'Microphone', value: 'Antlion Modmic Wireless' },
      { name: 'Gamepad', value: 'GuliKit KingKong 2 Pro' },
    ],
  },
]

const pcImageSrc = 'src/assets/images/pc-preview.jpeg'
const pcImageAlt = 'My PC setup preview'
const isPreviewOpen = ref(false)

const openPreview = () => {
  isPreviewOpen.value = true
}
</script>

<template>
  <section
    class="grid gap-5 rounded-[1.5rem] border border-primary bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur w-full"
  >
    <div class="space-y-3">
      <p class="m-0 text-[0.78rem] uppercase tracking-[0.28em]">Hardware Showcase</p>
      <h1 class="m-0 text-3xl font-semibold uppercase tracking-[0.04em] sm:text-4xl">
        My PC Setup
      </h1>
      <p class="m-0 leading-7 text-white/70">
        A curated view of the parts powering my daily workflow, gaming sessions, and content
        creation setup.
      </p>
    </div>

    <article
      class="grid gap-5 xl:grid-cols-[1.9fr_1fr] rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur"
    >
      <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        <div class="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-3">
          <span class="text-[0.72rem] uppercase tracking-[0.2em] text-white/60">CPU</span>
          <strong class="text-white">Ryzen 7 9800X3D</strong>
        </div>
        <div class="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-3">
          <span class="text-[0.72rem] uppercase tracking-[0.2em] text-white/60">GPU</span>
          <strong class="text-white">RTX 5080</strong>
        </div>
        <div class="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-3">
          <span class="text-[0.72rem] uppercase tracking-[0.2em] text-white/60">RAM</span>
          <strong class="text-white">64GB DDR5</strong>
        </div>
        <div class="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-3">
          <span class="text-[0.72rem] uppercase tracking-[0.2em] text-white/60">Storage</span>
          <strong class="text-white">7TB Total</strong>
        </div>
      </div>
      <div
        class="group relative overflow-hidden rounded-[1.3rem] border border-white/10 bg-white-950/20"
      >
        <button
          type="button"
          class="absolute inset-0 z-10 cursor-pointer"
          @click="openPreview"
          aria-label="Open PC setup preview"
        ></button>
        <div
          class="absolute inset-0 z-9 flex flex-col items-center justify-center gap-1 bg-black/30"
        >
          <p class="text-[0.72rem] uppercase tracking-[0.2em] text-white/60">Setup Preview</p>
          <h2 class="mt-2 text-xl font-semibold text-white">Click to open full view</h2>
        </div>
        <img
          :src="pcImageSrc"
          :alt="pcImageAlt"
          class="h-38 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>
    </article>
  </section>

  <section class="grid gap-4 md:grid-cols-2 w-full">
    <article
      v-for="group in specGroups"
      :key="group.title"
      class="rounded-[1.2rem] border border-white/10 bg-white/5 p-5 backdrop-blur"
    >
      <h2 class="mb-4 text-sm uppercase tracking-[0.16em]" v-html="group.title"></h2>
      <ul class="flex flex-col gap-3">
        <li
          v-for="item in group.items"
          :key="item.name"
          class="flex flex-col gap-1 border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
        >
          <span
            class="text-[0.78rem] uppercase tracking-[0.16em] text-white/60"
            v-html="item.name"
          ></span>
          <span class="leading-6 text-white/95" v-html="item.value"></span>
        </li>
      </ul>
    </article>
  </section>

  <ImagePreviewModal
    v-model="isPreviewOpen"
    :src="pcImageSrc"
    :alt="pcImageAlt"
    title="Full PC setup preview"
  />
</template>

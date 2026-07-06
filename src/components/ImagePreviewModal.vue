<script setup lang="ts">
interface Props {
  modelValue: boolean
  src: string
  alt?: string
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  alt: 'Image preview',
  title: 'Preview',
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()

const close = () => {
  emit('update:modelValue', false)
}
</script>

<template>
  <div
    v-if="props.modelValue"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    tabindex="0"
  >
    <div class="absolute inset-0" @click.self="close"></div>

    <div
      class="relative z-10 w-full max-w-6xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 backdrop-blur shadow-2xl"
      role="dialog"
      aria-modal="true"
      :aria-label="props.title"
    >
      <button
        type="button"
        class="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/50 px-3 py-2 text-sm text-white transition cursor-pointer hover:border-[var(--color-primary)] hover:bg-black/70"
        @click="close"
      >
        Close
      </button>

      <div
        class="flex h-[min(75vh,calc(100vh-6rem))] w-full items-center justify-center p-3 sm:p-5"
      >
        <img :src="props.src" :alt="props.alt" class="max-h-full w-full object-contain" />
      </div>

      <div class="border-t border-white/10 px-5 py-4 text-sm text-white/70">
        {{ props.title }}
      </div>
    </div>
  </div>
</template>

<template>
  <button
    :class="[
      'px-4 py-2 rounded transition-colors duration-200',
      isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800',
      className
    ]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  active: {
    type: Boolean,
    default: false
  },
  class: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['click'])

const isActive = props.active
const className = props.class

const handleClick = () => {
  emits('click')
}
</script>

<style scoped>
button:hover {
  filter: brightness(0.95);
}

button:active {
  transform: scale(0.98);
}
</style>
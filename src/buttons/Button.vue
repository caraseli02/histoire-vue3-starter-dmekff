<script setup lang="ts">
import { computed, useAttrs } from 'vue'

const attrs = useAttrs()

const props = defineProps<{
  classes?: string
  label?: string
  icon?: string
  iconPos?: string
  iconClass?: string
  badge?: string
  badgeClass?: string
  loading?: boolean
  loadingIcon?: string
}>()

const disabled= computed(() => attrs.disabled || props.loading)
</script>

<template>
  <button type="button" data-cy="primaryBtn" :class="props.classes" :disabled="disabled">
    <span
      class="relative flex item-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
    >
      <slot>
        <span class="p-button-label">{{ label || '&nbsp;' }}</span>
      </slot> 
    </span>
  </button>
</template>

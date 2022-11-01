<script setup>
import { ref } from 'vue'
import { hstEvent } from 'histoire/client'
import LoadingBtn from './LoadingBtn.vue'

const text = ref('Click me')
</script>

<template>
  <Story>
    <LoadingBtn color="purpleBlue" loading @click="hstEvent('click', $event)">
      {{ text }}
    </LoadingBtn>

    <template #controls>
      <HstText title="default slot" v-model="text" />
    </template>
  </Story>
</template>

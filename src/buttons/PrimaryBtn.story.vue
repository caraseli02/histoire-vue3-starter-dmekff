<script setup>
import { ref, computed } from 'vue'
import { hstEvent } from 'histoire/client'
import PrimaryBtn from './PrimaryBtn.vue'

const text = ref('Click me')

const classesSwitch = (color) => {
  const applyForAll = 'relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br'
  switch (color) {
    case 'purpleBlue':
      return `${applyForAll} from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800`
    default:
      return `${applyForAll} from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800`
  }
}
</script>

<template>
  <Story title="Buttons" :layout="{ type: 'grid', width: '300px' }">
    <Variant
      v-for="color in ['default', 'purpleBlue']"
      :key="color"
      :title="color"
    >
    <PrimaryBtn :classes="classesSwitch(color)" @click="hstEvent('click', $event)">
      {{ color }}
    </PrimaryBtn>
    </Variant>
    <Variant
      title="disabled"
    >
    <PrimaryBtn :classes="classesSwitch()" label="Dissabled" disabled @click="hstEvent('click', $event)"/>
    </Variant>
    <template #controls>
      <HstText title="default slot" v-model="text" />
    </template>
  </Story>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const store = useStore()

const options = ref([
  { value: 'All events', text: 'All events' },
  { value: 'Ticket type', text: 'Ticket type' },
  { value: 'Event', text: 'Event' },
  { value: 'Series', text: 'Series' },
])
</script>

<template>
  <div class="" >
    <select v-model="store.sortCategory" class="rounded-md border-2 border-gray-200 py-2.5 pr-32 text-gray-400 sm:text-sm/6">
      <!-- Placeholder option -->
      <option class="text-gray-400" value="" disabled selected hidden>Applies to</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>
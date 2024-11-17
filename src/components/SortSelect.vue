<script setup lang="ts">

const props = defineProps<{
  id: string,
}>();
defineExpose(props)

const store = useStore()

const options = ref([
  { value: 'All events', text: 'All events' },
  { value: 'Ticket type', text: 'Ticket type' },
  { value: 'Event', text: 'Event' },
  { value: 'Series', text: 'Series' },
])
</script>

<template>
  <select :id="props.id" v-model="store.sortCategory" class="flex-grow rounded-md border-2 border-gray-200 text-gray-400 sm:text-sm/6 pl-4">
    <!-- Placeholder option -->
    <option class="text-gray-400" value="" disabled selected hidden>Applies to</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.text }}
    </option>
  </select>
</template>
<script setup lang="ts">

const props = defineProps<{
  id: string,
  selectVal?: string
}>();
defineExpose(props)

const emit = defineEmits<{
  (e: 'submit', value: string): void
}>()

const store = useStore()

const options = ref([
  { value: 'All events', text: 'All events' },
  { value: 'Ticket type', text: 'Ticket type' },
  { value: 'Event', text: 'Event' },
  { value: 'Series', text: 'Series' },
])

const submitSelect = (event: Event) => {
  const payload = (event.target as HTMLInputElement).value
  emit('submit', payload)
}

</script>

<template>
  <select :id="props.id" :value="props.selectVal" @change="submitSelect" class="flex-grow rounded-md border border-gray-200 text-gray-400 font-normal sm:text-sm/6 pl-4">
    <!-- Placeholder option -->
    <option class="text-gray-400" value="" disabled selected hidden>Applies to</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.text }}
    </option>
  </select>
</template>
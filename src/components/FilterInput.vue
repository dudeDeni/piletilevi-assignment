<script setup lang="ts">
import cross from '@/assets/cross.svg'
import search from '@/assets/search.svg'

const props = defineProps<{
  id: string,
  inputVal: string
}>();
defineExpose(props)

const emit = defineEmits<{
  (e: 'submit', value: string): void
}>()

const store = useStore()

const validateInput = (input: string) => {
  // Allow only letters and numbers
  return input.replace(/[^a-zA-Z0-9]/g, '');
};

const submitInput = (event: Event) => {
  const input = (event.target as HTMLInputElement).value
  const payload = validateInput(input)
  emit('submit', payload)
}

const clearSearch = () => {
  emit('submit', '')
}

</script>

<template>
  <div class="relative rounded-md flex items-center">
    <input type="text" name="filter" :id="props.id"
      class="h-full rounded-md border border-gray-200 pl-4 md:pr-32 text-gray-900 font-normal placeholder:text-gray-400 sm:text-sm/6"
      placeholder="Discount name, code" :value="props.inputVal" @input="submitInput">
    <button type="button" class="absolute hidden md:inline right-10 pr-1" @click="clearSearch">
      <img :src="cross" alt="remove" />
    </button>
    <div class="absolute hidden md:flex items-center inset-y-0 right-2 border-l border-gray-200 pl-2">
      <img :src="search" alt="remove" />
    </div>
  </div>
</template>
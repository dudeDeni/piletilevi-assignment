<script setup lang="ts">
import arrow from '@/assets/arrow_down.svg'
import check from '@/assets/check.svg'

const props = defineProps<{
  modelValue?: string
  disabled?: boolean
}>();
defineExpose(props)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const options = ref([
  { value: 'All events', label: 'All events' },
  { value: 'Ticket type', label: 'Ticket type' },
  { value: 'Event', label: 'Event' },
  { value: 'Series', label: 'Series' },
])

const isOpen = ref(false)
const toggleDropdown = () => (isOpen.value = !isOpen.value)

const selectedLabel = computed(() => {
  const selected = options.value.find(opt => opt.value === props.modelValue);
  return selected ? selected.label : 'Applies to';
});

const selectOption = (option: { value: string; label: string }) => {
  emit('update:modelValue', option.value); // Update the value
  isOpen.value = false; // Close dropdown
};

</script>

<template>
  <div class="relative flex-grow rounded-md border border-gray-200 font-normal sm:text-sm">
    <!-- Selected Item -->
    <button 
      :disabled="props.disabled"
      @click="toggleDropdown"
      class="w-full h-full px-4 rounded-md bg-white text-left text-gray-400 flex justify-between items-center"
    >
      <span>{{ selectedLabel }}</span>
      <span>
        <img :src="arrow" />
      </span> <!-- Down arrow -->
    </button>

    <!-- Dropdown List -->
    <div v-if="isOpen" class="absolute w-full mt-0.5 bg-white border border-gray-300 rounded shadow-md z-10">
      <ul>
        <li v-for="(option, index) in options" :key="index" 
          class="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer"
          @click="selectOption(option)"
        >
          <div :class="option.value === props.modelValue ? 'bg-purple check-mark' : 'bg-white check-mark' ">
            <img :src="check"/>
          </div>
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.check-mark {
  border: 1px solid #D6D2E1;
  border-radius: 4px;
  padding-block: 4px;
  padding-inline: 2px;
  margin-right: 8px;
}
</style>
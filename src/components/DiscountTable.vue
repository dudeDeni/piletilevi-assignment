<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import FilterInput from "@/components/FilterInput.vue";
import SortSelect from "@/components/SortSelect.vue";

const store = useStore()
const discounts = computed(() => store.filteredDiscounts)

const clearSearch = () => {
  store.filterName = ''
  store.sortCategory = ''
}

onMounted(async () => {
  await store.dispatchGetDiscounts()
})

</script>

<template>
  <div class="w-3/5 flex gap-3">
    <FilterInput />
    <SortSelect />
    <button class="rounded-md px-4 border-2 border-indigo-900 uppercase text-sm my-0.5" >Search</button>
    <button class="font-medium text-sm text-gray-600" @click="clearSearch">Clear All</button>
  </div>
  <!-- TODO: add loading animation -->
  <div v-if="discounts" class="flex bg-white mt-4 p-6 rounded-md shadow-lg">
    <table class="w-full text-black">
      <thead>
        <tr>
          <th class="w-1/6 text-left">Name</th>
          <th class="w-1/6 text-left">Applies To</th>
          <th class="w-1/6 text-left">Time Period</th>
          <th></th>
          <th class="w-1/6 text-left">Discount Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="discount in discounts" :key="discount.id" class="border-t-2 content-start">
          <td class="w-1/6 text-indigo-600 text-left font-semibold">{{ discount.name }}</td>
          <td class="w-1/6 text-left">{{ discount.category }}</td>
          <td class="w-1/6 text-left">{{ discount.startDate }} - {{ discount.endDate }}</td>
          <td class="w-2/6"></td>
          <td class="w-1/6 text-left">{{ discount.discountAmount }}€</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
td {
  padding-left: 0.5rem;
}
th {
  padding-left: 0.5rem;
}
tbody tr {
  height: 56px; /* Set the height of each row */
}

tbody tr:nth-child(even) {
  background-color: rgb(244, 245, 246);
}
</style>
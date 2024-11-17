<script setup lang="ts">
import FilterInput from "@/components/FilterInput.vue";
import SortSelect from "@/components/SortSelect.vue";
import ListPagination from "@/components/ListPagination.vue";
import ModalCreate from "@/components/ModalCreate.vue";

const store = useStore()
const discounts = computed(() => store.filteredDiscounts)
const modalState = ref(false)

const clearSearch = () => {
  store.filterName = ''
  store.sortCategory = ''
}

const paginatedList = computed(() => {
  const start = (store.activeStep -1) * store.itemsPerPage
  const end = start + store.itemsPerPage
  return discounts.value.slice(start, end)
})

const countPages = computed(() => {
  return Math.ceil(discounts.value.length / store.itemsPerPage)
})


onMounted(async () => {
  await store.dispatchGetDiscounts()
})

</script>

<template>
  <div>
    <div class="flex justify-between mb-3" >
      <div class="text-5xl font-bold" >Discounts</div>
      <button @click="store.toggleModal()" class="text-white font-semibold uppercase bg-indigo-950 rounded-md px-4 text-sm">create new discount </button>
    </div>
    <ModalCreate :is-open="store.isModalOpen"/>
    <div class="w-3/5 flex gap-3 h-10">
      <FilterInput :id="'tableFilter'"/>
      <SortSelect :id="'tableSort'"/>
      <button class="h-full rounded-md px-4 border-2 border-indigo-900 uppercase text-sm">Search</button>
      <button class="font-medium text-sm text-gray-600" @click="clearSearch">Clear All</button>
    </div>
    <!-- TODO: add loading animation -->
    <div v-if="paginatedList.length > 0" class="flex bg-white mt-4 p-6 rounded-md shadow-lg">
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
          <tr v-for="discount in paginatedList" :key="discount.id" class="border-t-2 content-start">
            <td class="w-1/6 text-indigo-600 text-left font-bold">{{ discount.name }}</td>
            <td class="w-1/6 text-left">{{ discount.category }}</td>
            <td class="w-1/6 text-left">{{ discount.startDate }} - {{ discount.endDate }}</td>
            <td class="w-2/6"></td>
            <td class="w-1/6 text-left">{{ discount.discountAmount }}€</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <h1 class="mt-4 p-6" >No results</h1>
    </div>
     <!-- Pagination Controls -->
    <ListPagination 
      v-if="countPages > 1"
      :pages="countPages"
    />
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
  height: 56px;
  /* Set the height of each row */
}

tbody tr:nth-child(even) {
  background-color: rgb(244, 245, 246);
}
</style>
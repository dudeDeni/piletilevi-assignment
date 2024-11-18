<script setup lang="ts">
import { DiscountTabs } from '@/services/types'

import FilterInput from "@/components/FilterInput.vue";
import SortSelect from "@/components/SortSelect.vue";
import ListPagination from "@/components/ListPagination.vue";
import ModalCreate from "@/components/ModalCreate.vue";
import DiscountTableTabs from "@/components/discount/DiscountTableTabs.vue";
import DiscountCurrent from "@/components/discount/DiscountCurrent.vue";
import DiscountUpcoming from "@/components/discount/DiscountUpcoming.vue";
import DiscountArchived from "@/components/discount/DiscountArchived.vue";

const store = useStore()
const discounts = computed(() => store.filteredDiscounts)
const upcomingDiscounts = computed(() => store.getUpcomingDiscounts)

const modalState = ref(false)
const input = ref('')
const select = ref('')

const clearSearch = () => {
  store.filterName = ''
  store.sortCategory = ''
  input.value = ''
  select.value = ''
}

const submitSearch = () => {
  store.filterName = input.value
  store.sortCategory = select.value
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
    <div class="text-base font-normal mb-12 text-start">
      <!-- hardcoded while do not have actual navigation -->
      Back office > Codes > <span class="text-gray-400">Discounts</span>
    </div>
    <div class="flex justify-between mb-4" >
      <div class="text-5xl font-bold title" >Discounts</div>
      <button @click="store.toggleModal()" class="text-white font-semibold uppercase bg-purple rounded-md px-4 text-sm">create new discount </button>
    </div>
    <!-- create discount modal -->
    <ModalCreate :is-open="store.isModalOpen"/>
    <div class="w-3/5 flex flex-col md:flex-row gap-3 md:h-10">
      <FilterInput :id="'tableFilter'" :input-val="input" @submit="(e) => input = e"/>
      <SortSelect :id="'tableSort'" v-model="select"/>
      <button 
        type="button" 
        class="h-full rounded-md px-4 border-2 border-purple uppercase text-sm text-purple"
        @click="submitSearch"
      >
        Search  
      </button>
      <button type="button" class="font-medium text-sm text-gray-600" @click="clearSearch">Clear All</button>
    </div>

    <!-- discount list tabs -->
    <DiscountTableTabs 
      :current="discounts.length"
      :upcoming="upcomingDiscounts.length"
    />

    <!-- TODO: add loading animation -->
    <DiscountCurrent
      v-if="store.activeTab == DiscountTabs.CURRENT"
      :discounts="paginatedList" 
    />
    <DiscountCurrent
      v-else-if="store.activeTab == DiscountTabs.UPCOMING"
      :discounts="upcomingDiscounts" 
    />
    <DiscountArchived
      v-else-if="store.activeTab == DiscountTabs.ARCHIVED"
      :discounts="[]" 
    />

     <!-- Pagination Controls -->
    <ListPagination 
      v-if="countPages > 1 && store.activeTab == DiscountTabs.CURRENT"
      :pages="countPages"
    />
  </div>
</template>

<style scoped>
.title {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}
</style>
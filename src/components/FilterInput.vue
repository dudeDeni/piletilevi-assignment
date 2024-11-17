<script setup lang="ts">
import cross from '@/assets/cross.svg'
import search from '@/assets/search.svg'

const store = useStore()

const clearSearch = () => {
  store.filterName = ''
}

</script>

<template>
  <div class="relative rounded-md flex items-center">
    <input type="text" name="filter" id="filter"
      class="h-full rounded-md border-2 border-gray-200 pl-4 pr-32 text-gray-900 placeholder:text-gray-400 sm:text-sm/6"
      placeholder="Discount name, code" v-model="store.filterName">
    <button class="absolute right-10 pr-1" @click="clearSearch">
      <img :src="cross" alt="remove" />
    </button>
    <div class="absolute flex items-center inset-y-0 right-2 border-l-2 border-gray-200 pl-2">
      <img :src="search" alt="remove" />
    </div>
  </div>
</template>
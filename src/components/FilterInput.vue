<script setup lang="ts">
import { ref } from 'vue'
import cross from '@/assets/cross.svg'
import search from '@/assets/search.svg'

const store = useStore()

const clearSearch = () => {
  store.filterName = ''
}

</script>

<template>
  <div class="flex">
    <div class="relative shadow-sm">
      <input type="text" name="filter" id="filter"
        class="rounded-md border-2 border-gray-200 py-2 pl-7 pr-32 text-gray-900 placeholder:text-gray-400 sm:text-sm/6"
        placeholder="Discount name, code"
        v-model="store.filterName"
        >
      <button class="absolute inset-y-3.5 right-10 pr-1" @click="clearSearch">
        <img :src="cross" alt="remove" />
      </button>
      <div class="absolute inset-y-0 right-2 border-l-2 border-gray-200 pl-2 pb-3 pt-3">
        <img :src="search" alt="remove" />
      </div>
    </div>
  </div>
</template>
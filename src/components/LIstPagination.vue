<script setup>
import arrowLeft from '@/assets/arrow_left.svg'
import arrowRight from '@/assets/arrow_right.svg'

const store = useStore()

const prevPage = () => {
  if (store.activeStep > 1) store.activeStep--
}

const nextPage = () => {
  if (store.activeStep < store.totalPages) store.activeStep++
}

</script>
<template>
  <div class="px-4 py-3 mt-4 sm:px-6">
    <div class="w-full flex justify-center">
      <div>
        <nav class="isolate inline-flex -space-x-px rounded-md" aria-label="Pagination">
          <div @click="prevPage" class="relative px-2 py-1 font-bold text-grey-900 inline-flex items-center rounded-md text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer">
            <span class="sr-only">Previous</span>
            <img :src="arrowLeft">
          </div>
          <div v-for="page in store.totalPages" class="">
            <div @click="store.goToListPage(page)" :class="store.activeStep == page ? 'border-b-2 border-gray-600 mx-3 px-1' : 'mx-3 px-1 text-indigo-600 cursor-pointer'">{{ page }}</div>
          </div>
          <div @click="nextPage" class="relative px-2 py-1 font-bold text-grey-900 inline-flex items-center rounded-md text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer">
            <span class="sr-only">Next</span>
            <img :src="arrowRight">
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

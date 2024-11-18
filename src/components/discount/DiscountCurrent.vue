<script setup lang="ts">
import { type Discount } from '@/services/types'
import pencil from '@/assets/pencil.svg'

const props = defineProps<{
  discounts: Discount[]
}>();
defineExpose(props)

</script>

<template>
  <div v-if="props.discounts.length > 0" class="flex bg-white mt-4 p-6 rounded-md shadow-lg">
    <table class="w-full text-black">
      <thead>
        <tr>
          <th class="w-1/6 text-left">Name</th>
          <th class="w-1/6 text-left">Applies to</th>
          <th class="w-1/6 text-left">Time Period</th>
          <th></th>
          <th class="w-1/6 text-left">Discount Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="discount in props.discounts" :key="discount.id" class="border-t-2 content-start">
          <td class="w-1/6 text-indigo-700 text-left font-bold">{{ discount.name }}</td>
          <td class="w-1/6 text-left font-normal">{{ discount.category }}</td>
          <td class="w-1/6 text-left font-normal">{{ discount.startDate }} - {{ discount.endDate }}</td>
          <td class="w-2/6"></td>
          <td class="w-1/6 text-left font-normal flex-row">
            <div class="flex justify-between">
              <div>{{ discount.discountAmount }}€</div>
              <div class="border rounded-md p-2 mr-3 cursor-pointer">
                <img :src="pencil" alt="edit" />
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <h1 class="mt-4 p-6">No results</h1>
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
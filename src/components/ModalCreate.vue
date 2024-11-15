<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import SortSelect from '@/components/SortSelect.vue'

const props = defineProps<{
  isOpen: boolean,
}>();
defineExpose(props)

const store = useStore()
</script>

<template>
  <TransitionRoot as="template" :show="props.isOpen">
    <Dialog class="relative z-10" @close="store.toggleModal">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start mb-4">
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" class="text-2xl font-semibold text-gray-900">Create discount</DialogTitle>
                  </div>
                </div>
                <div class="relative shadow-sm px-4">
                  <input type="text" name="filter" id="filter"
                    class="rounded-md border-2 border-gray-200 py-2 pl-7 pr-32 text-gray-900 placeholder:text-gray-400 sm:text-sm/6"
                    placeholder="Discount name, code">
                </div>
              </div>
              <div class="px-4 py-3 sm:flex  sm:px-6">

                <SortSelect class="pl-4" />
                <button type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm uppercase bg-indigo-900 font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  ref="addButtonRef">add</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

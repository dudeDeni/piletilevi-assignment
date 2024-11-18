<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import SortSelect from '@/components/SortSelect.vue'
import cross from '@/assets/cross.svg'

const props = defineProps<{
  isOpen: boolean,
}>();
defineExpose(props)

const store = useStore()
</script>

<template>
  <TransitionRoot as="template" :show="props.isOpen">
    <Dialog class="relative z-30" @close="store.toggleModal">
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
                <div class="sm:flex sm:items-center justify-between mb-6">
                  <DialogTitle as="h3" class="text-3xl font-semibold text-gray-900">Create discount</DialogTitle>
                  <button type="button" @click="store.toggleModal">
                    <img :src="cross" />
                  </button>
                </div>
                <input type="text" name="title" id="title"
                  class="w-full h-10 rounded-md border-2 border-gray-200 py-2 pl-4 pr-32 text-gray-900 font-normal placeholder:text-gray-400 sm:text-sm/6"
                  placeholder="Discount name"
                >
                <div class="flex mt-4 mb-6 gap-4">
                  <SortSelect :id="'modalSelect'"/>
                  <button type="button"
                    class="rounded-md px-3 py-2.5 text-sm uppercase bg-purple font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-indigo-500 sm:w-auto"
                    ref="addButtonRef"
                  >
                    add
                  </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

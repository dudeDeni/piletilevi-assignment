<script setup lang="ts">
import { DiscountTabs } from '@/services/types'
const props = defineProps<{
  current: number,
  upcoming: number,
  archived?: number
}>();
defineExpose(props)

const store = useStore()


const setListTab = (tab: string) => {
  store.activeTab = tab
}

</script>

<template>
  <div class="flex my-5 gap-8 border-b">
    <div>
      <div :class="store.activeTab == DiscountTabs.CURRENT ? 'tabs text-purple' : 'tabs text-gray-600'" @click="setListTab(DiscountTabs.CURRENT)">
        Currently active ({{ props.current }})
      </div>
      <hr :class="store.activeTab == DiscountTabs.CURRENT ? 'flex' : 'hidden'">
    </div>
    <div>
      <div :class="store.activeTab == DiscountTabs.UPCOMING  ? 'tabs text-purple' : 'tabs text-gray-600'" @click="setListTab(DiscountTabs.UPCOMING)">
        Upcoming ({{ props.upcoming }})
      </div>
      <hr :class="store.activeTab == DiscountTabs.UPCOMING ? 'flex' : 'hidden'">
    </div>
    <div>
      <div :class="store.activeTab == DiscountTabs.ARCHIVED  ? 'tabs text-purple' : 'tabs text-gray-600'" @click="setListTab(DiscountTabs.ARCHIVED)">
        Archived ({{ props.archived ? props.archived : 0 }})
      </div>
      <hr :class="store.activeTab == DiscountTabs.ARCHIVED ? 'flex' : 'hidden'">
    </div>
  </div>
</template>

<style scoped>
.tabs {
  font-size: 16px;
  cursor: pointer;
}
</style>
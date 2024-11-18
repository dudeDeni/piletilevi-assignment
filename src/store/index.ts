import { api } from '@/services'
import { DiscountTabs, type ApiResponse, type Discount } from '@/services/types'
import type { AxiosError } from 'axios'
import { defineStore } from 'pinia'

interface DiscountStore {
  isInitialized: boolean,
  discounts: Discount[],
  filterName: string,
  sortCategory: string,
  activeStep: number,
  activeTab: string,
  itemsPerPage: number,
  isModalOpen: boolean,
}

export const useStore = defineStore('discount', {
  state: (): DiscountStore => ({
    isInitialized: false,
    discounts: [],
    filterName: '',
    sortCategory: '',
    activeStep: 1,
    activeTab: DiscountTabs.CURRENT,
    itemsPerPage: 10,
    isModalOpen: false
  }),

  actions: {
    initApp() {
      this.isInitialized = true
    },

    toggleModal() {
      this.isModalOpen = !this.isModalOpen
    },

    goToListPage(page: number) {
      this.activeStep = page
    },

    async dispatchGetDiscounts(): Promise<ApiResponse<Discount[] | null>> {
      // using LocalStorage just to save list
      // in actual case need to check for server updates and update LocalStorage
      try {
        const storedContent = localStorage.getItem('storedContent');

        if (storedContent) {
          const data = JSON.parse(storedContent)
          this.discounts = data

          return {
            data,
            success: true
          }

        } else {

          const { data, status } = await api.discount.getDiscounts()

          if (status === 200) {

            this.discounts = data
            localStorage.setItem('storedContent', JSON.stringify(data));

            return {
              data,
              success: true
            }
          }
        }

      } catch (error) {

        const _error = error as AxiosError<string>

        return {
          status: _error.response?.status,
          data: null,
        }
      }

      return {
        data: null,
        status: 400,
      }
    }
  },

  getters: {

    filteredDiscounts: (state) => {
      state.activeStep = 1
      return state.discounts.filter(discount => {
        const nameMatch = discount.name.toLowerCase().includes(state.filterName.toLowerCase())
        const categoryMatch = nameMatch && state.sortCategory === '' ? discount : discount.category === state.sortCategory
        return nameMatch && categoryMatch
      })
    },

    getUpcomingDiscounts: (state) => {
      const today = new Date() // Current date and time
      const convertToday = today.toISOString().split('T')[0]; // Convert to "YYYY-MM-DD"
      return state.discounts.filter(discount => discount.startDate >= convertToday)
    }
  }
})
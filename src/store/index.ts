import { api } from '@/services'
import type { ApiResponse, Discount } from '@/services/types'
import type { AxiosError } from 'axios'
import { defineStore } from 'pinia'

interface DiscountStore {
  isInitialized: boolean,
  discounts: Discount[],
  filterName: string,
  sortCategory: string,
  activeStep: number,
  itemsPerPage: number,
  totalPages: number,
}

export const useStore = defineStore('discount', {
  state: (): DiscountStore => ({
    isInitialized: false,
    discounts: [],
    filterName: '',
    sortCategory: '',
    activeStep: 1,
    itemsPerPage: 10,
    totalPages: 1
  }),

  actions: {
    initApp() {
      this.isInitialized = true
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
    countPages: (state) => {
      state.totalPages = Math.ceil(state.discounts.length / state.itemsPerPage)
      return state.totalPages
    },

    filteredDiscounts: (state) => {
      state.activeStep =1
      return state.discounts.filter(discount => {
        const nameMatch = discount.name.toLowerCase().includes(state.filterName.toLowerCase())
        const categoryMatch = nameMatch && state.sortCategory === '' ? discount : discount.category === state.sortCategory
        return nameMatch && categoryMatch
      })
    }
  }
})
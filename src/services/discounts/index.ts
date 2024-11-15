import api from '../api';
import type { ApiResponse, Discount } from '../types';

async function getDiscounts() {
  return await api.get<Discount[]>('/v1/discounts');
}

export default {
  getDiscounts,
}
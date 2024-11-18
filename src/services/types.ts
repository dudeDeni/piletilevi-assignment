export type ApiResponse<T> = {
  data: T,
  success?: boolean
  status?: number;
}

export type Discount = {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  discountAmount: number;
  category: string;
};

export enum DiscountTabs {
  CURRENT = 'current',
  UPCOMING = 'upcoming',
  ARCHIVED = 'archived'
}
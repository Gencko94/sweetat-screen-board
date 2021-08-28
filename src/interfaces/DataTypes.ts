export interface Restaurant {
  name: string;
  id: number;
  logo: string;
  phone_number: string;
}

export interface OrderT {
  restaurant_id: number;
  orderstatus_id: number;
  created_at: string;
  restaurant: Restaurant;
  unique_order_id: string;
  payment_mode: string;
  delivered_by_sweetat: 0 | 1;
  total: number;
  specific_time?: any;
}
export interface ResponseT {
  pending: number;
  accepted: number;
  data: OrderT[];
}

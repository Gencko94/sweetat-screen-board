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
}
export interface ResponseT {
  pending: number;
  accepted: number;
  data: OrderT[];
}

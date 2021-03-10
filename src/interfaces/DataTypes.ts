export interface Restaurant {
  name: string;
  ar_name: string;
  id: number;
  logo: string;
  phone_number: string;
}

export interface OrderT {
  id: number;
  orderstatus_id: number;
  created_at: string;
  restaurant: Restaurant;
  unique_order_id: string;
}

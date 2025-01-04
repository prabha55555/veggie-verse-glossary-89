export interface Sale {
  id: number;
  vegetable_name: string;
  quantity: number;
  unit: string;
  price_per_unit: number;
  total_amount: number;
  created_at: string;
}

export interface Vegetable {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  min_stock: number;
  amount: number;
  created_at: string;
}
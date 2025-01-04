import { Sale, Vegetable } from "@/types";

// This is a mock API - replace with your actual API endpoints
export async function getSales(): Promise<Sale[]> {
  // Mock data - replace with actual API call
  return [
    {
      id: 1,
      vegetable_name: "Carrots",
      quantity: 10,
      unit: "kg",
      price_per_unit: 2.5,
      total_amount: 25,
      created_at: new Date().toISOString(),
    },
    // Add more mock sales as needed
  ];
}

export async function getVegetables(): Promise<Vegetable[]> {
  // Mock data - replace with actual API call
  return [
    {
      id: 1,
      name: "Carrots",
      quantity: 100,
      unit: "kg",
      min_stock: 20,
      amount: 2.5,
      created_at: new Date().toISOString(),
    },
    // Add more mock vegetables as needed
  ];
}

export async function addSale(sale: Partial<Sale>): Promise<Sale> {
  // Mock API call - replace with actual API call
  console.log('Adding sale:', sale);
  return {
    id: Math.random(),
    vegetable_name: "Test",
    quantity: sale.quantity || 0,
    unit: "kg",
    price_per_unit: sale.price_per_unit || 0,
    total_amount: (sale.quantity || 0) * (sale.price_per_unit || 0),
    created_at: new Date().toISOString(),
  };
}
import { supabase } from "@/integrations/supabase/client";

export async function getSales() {
  const { data, error } = await supabase
    .from('sales')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getVegetables() {
  const { data, error } = await supabase
    .from('vegetables')
    .select('*')
    .order('name');

  if (error) throw error;
  return data;
}

export async function addSale(sale) {
  const vegetable = await supabase
    .from('vegetables')
    .select('name, unit')
    .eq('id', sale.vegetable_id)
    .single();

  if (vegetable.error) throw vegetable.error;

  const { data, error } = await supabase
    .from('sales')
    .insert([{
      vegetable_id: sale.vegetable_id,
      vegetable_name: vegetable.data.name,
      quantity: sale.quantity,
      unit: vegetable.data.unit,
      price_per_unit: sale.price_per_unit,
      total_amount: sale.quantity * sale.price_per_unit
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
}
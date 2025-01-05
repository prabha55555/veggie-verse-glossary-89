import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

export function SalesCard({ sale }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{sale.vegetable_name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p>Quantity: {sale.quantity} {sale.unit}</p>
          <p>Price per unit: ${sale.price_per_unit}</p>
          <p>Total: ${sale.total_amount}</p>
          <p className="text-sm text-gray-500">{formatDate(sale.created_at)}</p>
        </div>
      </CardContent>
    </Card>
  );
}
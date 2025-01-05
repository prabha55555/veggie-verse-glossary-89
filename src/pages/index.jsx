import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SalesCard } from "@/components/SalesCard";
import { AddSaleDialog } from "@/components/AddSaleDialog";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";
import { getSales, getVegetables } from "@/lib/api";

export default function Dashboard() {
  const { toast } = useToast();
  
  const { data: sales, isLoading: salesLoading } = useQuery({
    queryKey: ['sales'],
    queryFn: getSales,
  });

  const { data: vegetables, isLoading: vegetablesLoading } = useQuery({
    queryKey: ['vegetables'],
    queryFn: getVegetables,
  });

  if (salesLoading || vegetablesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Vegetable Sales Dashboard</h1>
        <AddSaleDialog vegetables={vegetables || []} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              ${sales?.reduce((acc, sale) => acc + sale.total_amount, 0).toFixed(2)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Items Sold</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {sales?.reduce((acc, sale) => acc + sale.quantity, 0)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Sale</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              ${(sales?.reduce((acc, sale) => acc + sale.total_amount, 0) / (sales?.length || 1)).toFixed(2)}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sales?.map((sale) => (
          <SalesCard key={sale.id} sale={sale} />
        ))}
      </div>
    </div>
  );
}
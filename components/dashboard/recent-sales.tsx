import { RecentSale } from "./recent-sale"
import { recentSalesData } from "@/lib/constants/sales-data"

export function RecentSales() {
  return (
    <div className="space-y-8">
      {recentSalesData.map((sale) => (
        <RecentSale key={sale.email} {...sale} />
      ))}
    </div>
  )
}
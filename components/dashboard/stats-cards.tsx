import { Users, DollarSign, CreditCard, Activity } from "lucide-react"
import { StatsCard } from "./stats-card"

const statsData = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    description: "+20.1% from last month",
    Icon: DollarSign
  },
  {
    title: "Subscriptions",
    value: "+2350",
    description: "+180.1% from last month",
    Icon: Users
  },
  {
    title: "Sales",
    value: "+12,234",
    description: "+19% from last month",
    Icon: CreditCard
  },
  {
    title: "Active Now",
    value: "+573",
    description: "+201 since last hour",
    Icon: Activity
  }
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat) => (
        <StatsCard key={stat.title} {...stat} />
      ))}
    </div>
  )
}
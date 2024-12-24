"use client"

import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { monthlyData } from "@/lib/constants/chart-data"
import { ChartXAxis, ChartYAxis } from "./chart-axes"

export function OverviewChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={monthlyData}>
        <ChartXAxis />
        <ChartYAxis />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
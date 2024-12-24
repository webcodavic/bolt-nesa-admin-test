"use client"

import { XAxis, YAxis } from "recharts"

const axisStyle = {
  stroke: "#888888",
  fontSize: 12,
  tickLine: false,
  axisLine: false,
}

export function ChartXAxis() {
  return (
    <XAxis
      dataKey="name"
      {...axisStyle}
    />
  )
}

export function ChartYAxis() {
  return (
    <YAxis
      {...axisStyle}
      tickFormatter={(value: number) => `$${value}`}
    />
  )
}
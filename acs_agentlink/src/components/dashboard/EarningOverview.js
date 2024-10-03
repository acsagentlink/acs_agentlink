"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  { month: 'Jan', earnings: 2800 },
  { month: 'Feb', earnings: 2900 },
  { month: 'Mar', earnings: 2850 },
  { month: 'Apr', earnings: 3000 },
  { month: 'May', earnings: 3100 },
  { month: 'Jun', earnings: 3300 },
  { month: 'Jul', earnings: 3200 },
  { month: 'Aug', earnings: 3350 },
  { month: 'Sep', earnings: 3400 },
  { month: 'Oct', earnings: 3300 },
  { month: 'Nov', earnings: 3500 },
  { month: 'Dec', earnings: 3700 },
]

export default function EarningOverview() {


  return (
      <ResponsiveContainer width="100%" height={300} className="text-[#101828]">
        <LineChart
          data={data}
          margin={{ top: 20, left: 20, bottom: 5 }}
          
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748B' }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748B' }}
            tickFormatter={(value) => `${value.toLocaleString()}`}
            domain={[0, 5000]}
            ticks={[0, 1000, 2000, 3000, 4000, 5000]}
            orientation='right'
          />
          <Tooltip/>
          <Line
            type="monotone"
            dataKey="earnings"
            stroke="#F97316"
            strokeWidth={3}
            dot={false}
            activeDot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
  )
}
"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function EarningOverview({ earningsChartData }) {

  const chartData = earningsChartData?.earning_monthly_data?.map((value, index) => ({
    month: months[index],
    earnings: value,
  })) || [];  

  return (
      <ResponsiveContainer width="100%" height={300} className="text-[#101828]">
        <LineChart
          data={chartData}
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
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


export default function PerformanceChart({ feedbackChartData }) {
  const [chartWidth, setChartWidth] = useState('50%');

  useEffect(() => {
    // Function to handle resize event
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setChartWidth('100%');
      } else {
        setChartWidth('50%');
      }
    };

    // Set initial chart width based on window size
    handleResize();

    // Listen for window resize event
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const chartData = feedbackChartData?.monthly_data?.map((value, index) => ({
      month: months[index],
      Performance: value
    })) || [];

  return (
    <ResponsiveContainer width={chartWidth} height={200} className="text-[#101828]">
      <LineChart
        data={chartData}
        margin={{
          top: 5,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#101828', fontSize: 12 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#101828', fontSize: 12 }}
          domain={[0, 100]}
          ticks={[0, 20, 40, 60, 80, 100]}
          orientation='right'
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="Performance"
          stroke="#2AC769"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
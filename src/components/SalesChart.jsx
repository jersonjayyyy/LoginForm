import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", sales: 60000 },
  { month: "Feb", sales: 80000 },
  { month: "Mar", sales: 130000 },
  { month: "Apr", sales: 100000 },
  { month: "May", sales: 170000 },
  { month: "Jun", sales: 180000 }
];

const SalesChart = ({ title }) => {
  return (
    <div className="chart-container">
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#8B5E3B" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;

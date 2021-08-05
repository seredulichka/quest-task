import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const PieCharts = (props) => {
  const data = [
    { name: "Done", value: props.value },
    { name: "Left", value: 100 - props.value },
  ];
  const COLORS = ["#3f51b5", "#FFF023"];

  return (
    <PieChart width={300} height={350}>
      <Pie
        data={data}
        cx={120}
        cy={140}
        innerRadius={75}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
};

export default PieCharts;

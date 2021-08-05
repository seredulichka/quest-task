import React from "react";
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const DealsStats = (props) => {
  const data = [
    {
      name: "Deal 1",
      pv: props.value.deal1,
    },
    {
      name: "Deal 2",
      pv: props.value.deal2,
    },
    {
      name: "Deal 3",
      pv: props.value.deal3,
    },
  ];

  return (
    <ComposedChart
      layout="vertical"
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" scale="band" />
      <Tooltip />
      {/* <Legend /> */}
      {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
      <Bar dataKey="pv" barSize={20} fill="#3f51b5" />
      {/* <Line dataKey="uv" stroke="#ff7300" /> */}
    </ComposedChart>
  );
};

export default DealsStats;

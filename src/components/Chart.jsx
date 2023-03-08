import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ data: { data } }) => {
  const chartData =
    data.user.contributionsCollection.contributionCalendar.weeks.slice(-1)[0]
      .contributionDays;
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={900}
        height={300}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={[0, 20]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="contributionCount" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;

import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Label, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FF8042'];

const Piechart = ({data, label}) => {
  return (
    <div>
      <PieChart width={600} height={400}>
        <Pie
          data={data}
          cx={300}
          cy={200}
          outerRadius={120}
          innerRadius={80}
          fill="#8884d8"
          labelLine={false}
          label={true}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
           <Label
            value={label}
            position="center"
            fontSize={18}
            fontWeight="bold"
            fill="black"
          />
        </Pie>
        <Tooltip />
        {/* <Legend align="center" verticalAlign="bottom" layout="horizontal"/> */}
      </PieChart>
    </div>
  )
}

export default Piechart
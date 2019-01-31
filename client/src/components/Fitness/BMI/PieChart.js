import React from 'react';
import { PieChart, ResponsiveContainer, Pie, Cell } from 'recharts';

const COLORS = ['blue', 'green', 'yellow', 'red'];

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
  
  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central" style={{'fontWeight': 'bold', 'fontSize': '20px' }}>
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const BmiChart = props => {
  const data = props.data;
  const catArr = data.map(e => e.category);
  const under = catArr.filter(e => e === 'underweight');
  const normal = catArr.filter(e => e === 'normal weight')
  const over = catArr.filter(e => e === 'overweight')
  const obese = catArr.filter(e => e === 'obese')
  const newData = [{ name: 'underweight', value: under.length }, { name: 'normal weight', value: normal.length },
{ name: 'overweight', value: over.length}, { name: 'obese', value: obese.length }]
   return (
    <ResponsiveContainer height={400} width={'100%'}>
        <PieChart width={300} height={400} margin={{ top: 20, right: 200, bottom: 10, left: 10 }}>
        <Pie
          data={newData} 
          dataKey='value'
          cx={200} 
          cy={150} 
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={125} 
          fill="#8884d8"
        >
        	{
           newData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
)}

export default BmiChart;
import React from 'react';
import { PieChart, ResponsiveContainer, Pie } from 'recharts';

const BmiChart = props => (
    <ResponsiveContainer height={400} width={'100%'}>
        <PieChart height={400} width={700}>
            <Pie data={props.data} dataKey="bmi" nameKey="bmi" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label>
            
            </Pie>
        </PieChart>
    </ResponsiveContainer>
)

export default BmiChart;
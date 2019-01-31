import React from 'react';
import { ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const BMIgraph = props => (
    <ResponsiveContainer height={400} width={'100%'}>
        <ScatterChart height={400} width={700} margin={{ top: 20, right: 30, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <ZAxis dataKey='bmi' type='number' name='BMI' />
            <YAxis type='number' ticks={[0, 20, 40, 60, 80, 100]} tick={{ fill: 'white' }} dataKey='height' name='Height' unit=' in' />
            <XAxis type='number' dataKey='weight' name='Weight' ticks={[0, 100, 200, 300, 400]} tick={{ fill: 'white' }} unit=' lb' />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend align='right' />
            <Scatter name='Underweight' data={props.data.filter(e => e.category === 'underweight')} fill="blue" />
            <Scatter name='Normal Weight' data={props.data.filter(e => e.category === 'normal weight')} fill="green" />
            <Scatter name='Overweight' data={props.data.filter(e => e.category === 'overweight')} fill="yellow" />
            <Scatter name='Obese' data={props.data.filter(e => e.category === 'obese')} fill="red" />
        </ScatterChart>
    </ResponsiveContainer>
)

export default BMIgraph;
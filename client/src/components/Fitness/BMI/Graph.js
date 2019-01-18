import React from 'react';
import { ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip, Legend } from 'recharts';



const BMIgraph = props => (
    <ScatterChart width={700} height={300} margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <ZAxis dataKey='bmi' type='number' name='BMI' />
        <YAxis type='number' ticks={[0, 20, 40, 60, 80, 100]} dataKey='height' name='Height' unit=' in' />
        <XAxis type='number' dataKey='weight' name='Weight' ticks={[0, 100, 200, 300, 400]} unit=' lb' />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend align='right' />
        <Scatter name='Underweight' data={props.data.filter(e => e.category === 'underweight')} fill="blue" />
        <Scatter name='Normal Weight' data={props.data.filter(e => e.category === 'normal weight')} fill="green" />
        <Scatter name='Overweight' data={props.data.filter(e => e.category === 'overweight')} fill="orange" />
        <Scatter name='Obese' data={props.data.filter(e => e.category === 'obese')} fill="red" />
    </ScatterChart>
)

export default BMIgraph;
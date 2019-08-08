import React from 'react';
import { ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const BMIgraph = props => (
    <ResponsiveContainer height={500} width={'100%'}>
        <ScatterChart height={'80%'} width={'100%'} margin={{ top: 20, right: 30, bottom: 30, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <ZAxis dataKey='bmi' type='number' name='BMI' />
            <YAxis type='number' ticks={[0, 20, 40, 60, 80, 100]} tick={{ fill: 'white' }} dataKey='height' name='Height' label={{ value: 'Height (in)', angle: -90, position: 'insideLeft', fill: 'white' }} />
            <XAxis type='number' dataKey='weight' name='Weight' ticks={[0, 100, 200, 300, 400]} tick={{ fill: 'white' }} label={{ value: 'Weight (lbs)', position: 'bottom', fill: 'white' }} />
            <CartesianGrid strokeDasharray="3 3" />
            <Legend verticalAlign='top' iconType='circle' align='center' layout='horizontal' margin={{ top: 0, left: 0, right: 0, bottom: 0 }}/>
            <Scatter name='Underweight' data={props.data.filter(e => e.category === 'underweight')} fill="turquoise" />
            <Scatter name='Normal Weight' data={props.data.filter(e => e.category === 'normal weight')} fill="green" />
            <Scatter name='Overweight' data={props.data.filter(e => e.category === 'overweight')} fill="yellow" />
            <Scatter name='Obese' data={props.data.filter(e => e.category === 'obese')} fill="red" />
        </ScatterChart>
    </ResponsiveContainer>
)

export default BMIgraph;
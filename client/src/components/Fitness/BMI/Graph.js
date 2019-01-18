import React from 'react';
import { ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip, Legend } from 'recharts';



const BMIgraph = props => (
            <ScatterChart width={700} height={500} margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <ZAxis dataKey='category' type='category' />
                <YAxis type='number' ticks={[0, 20, 40, 60, 80, 100]}dataKey='height' unit=' in' label={{ value: 'Height', angle: -90, position: 'left', offset: -5 }} />
                <XAxis type='number' dataKey='weight' name='weight' ticks={[0, 100, 200, 300, 400]} unit=' lb' label={{ value: 'Weight', position: 'bottom', offset: -5 }} allowDuplicatedCategory={false}/>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend align='right' />
                <Scatter name='Body Mass Index' data={props.data} fill="#82ca9d" />
            </ScatterChart>
        )

export default BMIgraph;
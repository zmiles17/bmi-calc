import React from 'react';
import axios from 'axios';
import { ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip, Legend } from 'recharts';



class BMIgraph extends React.Component {
    state = {}

    getData() {
        let data;
        axios.get('/api/fitness').then(res => {
            data = res.data.sort((a, b) => a.weight - b.weight);
            this.setState({ data: data })
        })
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <ScatterChart width={730} height={400} 
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <ZAxis dataKey='category' type='category' />
                <YAxis dataKey='height' unit=' in' label={{ value: 'Height', angle: -90, position: 'left', offset: -5 }} />
                <XAxis dataKey='weight' name='weight' unit=' lb' label={{ value: 'Weight', position: 'bottom', offset: -5 }} allowDuplicatedCategory={false}/>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend align='right' />
                <Scatter name='bmi' data={this.state.data} fill="#82ca9d" />
            </ScatterChart>
        )
    }
}

export default BMIgraph;
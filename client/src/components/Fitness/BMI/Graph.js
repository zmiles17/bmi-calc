import React from 'react';
import axios from 'axios';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';



class BMIgraph extends React.Component {
    state = {}

    getData() {
        let data;
        axios.get('/api/fitness').then(res => {
            data = res.data.sort((a, b) => a.bmi - b.bmi);
            this.setState({ data: data })
        })
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <LineChart width={730} height={400} data={this.state.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='category' type='category' label={{ value: 'BMI Category', offset: -5, position: 'insideBottom' }} allowDuplicatedCategory={false} />
                <YAxis dataKey='height' label={{ value: 'Height (inches)', angle: -90, position: 'insideLeft' }} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend align='right' />
                {/* <Line type="monotone" dataKey="weight" stroke='#ffc658' /> */}
                <Line type="monotone" dataKey="bmi" stroke="#82ca9d" />
            </LineChart>
        )
    }
}

export default BMIgraph;
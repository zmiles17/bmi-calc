import React from 'react';
import axios from 'axios';
import { ScatterChart, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip, Legend, Scatter } from 'recharts';

class BMIgraph extends React.Component {
    state = {
        height: [],
        weight: [],
        bmi : []
    }
    componentDidMount() {
        let heightArr = [];
        let weightArr = [];
        let bmiArr = [];
        axios.get('/api/fitness')
            .then(data =>  {
                [...data.data].forEach((item, i) => {
                    weightArr.push(item.weight)
                    heightArr.push(item.height)
                    bmiArr.push(item.bmi)
                })
                this.setState({ height: heightArr, weight: weightArr, bmi: bmiArr })
            })
    }
    render() {
        return (
            <ScatterChart width={730} height={250}
                margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" name="height" unit="in" />
                <YAxis dataKey="y" name="weight" unit="lb" />
                <ZAxis dataKey="z" range={[0, 50]} name="bmi" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="A school" data={this.state} fill="#8884d8" />
            </ScatterChart>
        )
    }
}

export default BMIgraph;
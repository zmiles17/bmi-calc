import React from 'react';
import axios from 'axios';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts';



class BMIgraph extends React.Component {
    state = {
    }
    componentDidMount() {
        let data = [];
        axios.get('/api/fitness')
            .then(res => {
                [...res.data].forEach((item, i) => data.push(item))
                this.setState({ data: data })
            })
    }
    render() {
        const data = this.state.data;
        return (
            <AreaChart width={600} height={300} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey='weight'>
                <Label value='Weight (pounds)' offset={0} position="insideBottom"/>
                </XAxis>
                <YAxis dataKey='height'>
                    <Label value='Height (inches)' />
                </YAxis>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="bmi" stroke='#ffc658' fill='#ffc658' />
            </AreaChart>
        )
    }
}

export default BMIgraph;
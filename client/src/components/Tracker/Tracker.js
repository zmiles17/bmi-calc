import React from 'react';
import { Container, Form, Header, Divider, Icon } from 'semantic-ui-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

class Dashboard extends React.Component {
    state = {
        name: null,
        weightUnits: 'lb',
        weight: '',
        data: []
    }

    componentDidMount() {
        const currentUser = sessionStorage.getItem('userData')
        if (currentUser !== null) {
            axios.get(`/api/users/${currentUser}`)
                .then(data => {
                    this.setState({ name: data.data.name.split(' ')[0], data: data.data.fitness });
                })
            }
            else window.location.replace('/')
    }

    setWeight = event => this.setState({ weight: event.target.value });

    setWeightUnits = event => this.setState({ weightUnits: event.target.parentNode.children[0].value });

    clickHandler = event => {
        event.preventDefault();
        let weight = parseInt(this.state.weight);
        let _user = sessionStorage.getItem('userData')
        if (weight < 0) return 'error';
        if (this.state.weightUnits === 'kg') weight *= 2.205;
        axios.put('/api/users', { weight, _user }).then(data => {
            this.componentDidMount();
        })
    }

    render() {
        return (
            <Container text textAlign='center'>
                <Divider horizontal>
                    <Header inverted as='h4'>
                        <Icon name='weight' />
                        How much has my weight changed?
                </Header>
                </Divider>
                <Form inverted>
                    <Form.Group grouped>
                        <Form.Input error={this.state.weight < 0} label='Weight' placeholder='Enter your current weight' type='number' onChange={this.setWeight} required />
                        <Form.Group inline>
                            <Form.Radio label='pounds' value='lb' name='weight' onChange={this.setWeightUnits} checked={this.state.weightUnits === 'lb'} />
                            <Form.Radio label='kilograms' value='kg' name='weight' onChange={this.setWeightUnits} checked={this.state.weightUnits === 'kg'} />
                        </Form.Group>
                    </Form.Group>
                    <Form.Button circular color='teal' onClick={this.clickHandler}>Submit<Icon corner='top right' name='weight' /></Form.Button>
                </Form>
                <br></br>
                <Divider horizontal>
                    <Header as='h4' inverted>
                        <Icon name='chart line' />
                        Results
                    </Header>
                </Divider>
                <ResponsiveContainer height={400} width={'100%'}>
                    <LineChart width={730} height={250} data={this.state.data}
                        margin={{ top: 5, right: 40, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tick={{ fill: 'white' }} />
                        <YAxis tick={{ fill: 'white' }} label={{ value: 'Weight (lbs)', angle: -90, position: 'insideLeft', fill: 'white' }} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="weight" name='Weight' stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </Container>
        )
    }
}

export default Dashboard;
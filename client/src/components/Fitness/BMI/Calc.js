import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BMIgraph from './Graph';
import { Form, Message, Container, Icon, Divider, Header, Segment } from 'semantic-ui-react';
import BmiChart from './PieChart';

class BMIcalc extends React.Component {
    state = {
        weight: '',
        weightUnits: 'lb',
        height: '',
        heightUnits: 'in',
        bmi: '',
        category: '',
        data: [],
        dbMessage: '',
        _user: sessionStorage.getItem('userData')
    }

    getData() {
        axios.get('/api/fitness').then(res => {
            this.setState({ data: res.data })
        })
    }

    componentDidMount() {
        this.getData();
    }

    setWeight = event => this.setState({ weight: event.target.value });

    setWeightUnits = event => this.setState({ weightUnits: event.target.parentNode.children[0].value });

    setHeight = event => this.setState({ height: event.target.value });

    setHeightUnits = event => this.setState({ heightUnits: event.target.parentNode.children[0].value });

    clickHandler = event => {
        event.preventDefault();
        let category;
        let weight = parseInt(this.state.weight);
        let height = parseInt(this.state.height);
        if (weight < 0 || height < 0) return 'error';
        if (this.state.weightUnits === 'lb') weight /= 2.205;
        if (this.state.heightUnits === 'cm') height /= 100;
        if (this.state.heightUnits === 'in') height *= 0.0254;
        const bmi = weight / Math.pow(height, 2);
        if (bmi < 18.5) category = 'underweight';
        if (18.5 <= bmi && bmi < 25) category = 'normal weight';
        if (25 <= bmi && bmi < 29.9) category = 'overweight';
        if (bmi >= 30) category = 'obese';
        this.setState({ bmi: Math.round(10 * bmi) / 10, category: category });
        axios.put('/api/fitness', {
            bmi: Math.round(10 * bmi) / 10,
            weight: Math.round(weight * 22.05) / 10,
            height: Math.round(height * 393.7) / 10,
            category: category,
            _user: this.state._user
        })
            .then(data => {
                this.getData()
                if (data.data.errors) this.setState({ dbMessage: data.data.message })
            })
    }

    render() {
        return (
            <Container text>
                <Divider horizontal>
                    <Header as='h4' inverted>
                        <Icon name='info circle' />
                        What is body mass index?
                    </Header>
                </Divider>
                <Segment inverted>
                    The body mass index or Quetelet index is a method of determining relative obesity, which was devised by a Belgian astronomer named Adolphe Quetelet between 1830 and 1850.
                         It is a value derived from dividing the weight and height of an individual expressed in kilograms per meters squared.
                         This method is a reliable indicator of obesity for average sedentary (physically inactive) populations.
                </Segment>
                <Divider horizontal>
                    <Header as='h4' inverted>
                        <Icon name='write' />
                        Form
                    </Header>
                </Divider>
                <Form inverted>
                    <Form.Group widths='equal'>
                        <Form.Input fluid error={this.state.weight < 0} label='Weight' placeholder='Enter your weight' type='number' onChange={this.setWeight} required />
                        <Form.Group inline>
                            <Form.Radio label='pounds' value='lb' name='weight' onChange={this.setWeightUnits} checked={this.state.weightUnits === 'lb'} />
                            <Form.Radio label='kilograms' value='kg' name='weight' onChange={this.setWeightUnits} checked={this.state.weightUnits === 'kg'} />
                        </Form.Group>
                        <Form.Input fluid error={this.state.height < 0} label='Height' placeholder='Enter your height' type='number' required onChange={this.setHeight} />
                        <Form.Group inline>
                            <Form.Radio label='inches' value='in' name='height' onChange={this.setHeightUnits} checked={this.state.heightUnits === 'in'} />
                            <Form.Radio label='centimeters' value='cm' name='height' onChange={this.setHeightUnits} checked={this.state.heightUnits === 'cm'} />
                        </Form.Group>
                    </Form.Group>
                    <Form.Button color='blue' onClick={this.clickHandler}>Calculate<Icon corner='top right' name='calculator' /></Form.Button>
                </Form>
                <br></br>
                <Divider horizontal>
                    <Header as='h4' inverted>
                        <Icon name='chart line' />
                        Results
                    </Header>
                </Divider>
                {this.state.bmi ?
                    <Message negative={this.state.bmi && (this.state.bmi < 18.5 || this.state.bmi >= 25)} size='large' positive={18.5 <= this.state.bmi && this.state.bmi < 25}>
                        Your body mass index is <b>{this.state.bmi}</b>
                        <br></br>
                        Your BMI category is <b>{this.state.category}</b> {this.state.category !== 'normal weight' ? <FontAwesomeIcon icon='frown' /> : <FontAwesomeIcon icon='smile' />}
                    </Message>
                    : this.state.dbMessage ? <Message error>{this.state.dbMessage}</Message> : ''}
                <BMIgraph data={this.state.data} />
                <BmiChart data={this.state.data} />
            </Container>
        )
    }
}

export default BMIcalc;
import React from 'react';
import axios from 'axios';
import BMIgraph from './Graph';
import { Form, Segment, Container, Icon } from 'semantic-ui-react';

class BMIcalc extends React.Component {
    state = {
        weight: '',
        weightUnits: 'lb',
        height: '',
        heightUnits: 'in',
        bmi: '',
        category: ''
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
        if (this.state.weightUnits === 'lb') weight /= 2.205;
        if (this.state.heightUnits === 'cm') height /= 100;
        if (this.state.heightUnits === 'in') height *= 0.0254;
        const bmi = weight / Math.pow(height, 2);
        if (bmi < 18.5) category = 'underweight';
        if (18.5 <= bmi && bmi < 24.9) category = 'normal weight';
        if (25 <= bmi && bmi < 29.9) category = 'overweight';
        if (bmi >= 30) category = 'obese';
        this.setState({ bmi: Math.round(10 * bmi) / 10, category: category });
        axios.post('/api/fitness', { bmi: Math.round(10 * bmi) / 10, weight: Math.round(weight * 22.05) / 10, height: Math.round(height * 393.7) / 10})
            .then(function (data) {
                console.log(data);
            })
    }

    render() {
        return (
            <Container>
                <Form inverted>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Weight' placeholder='Enter your weight' type='number' onChange={this.setWeight} required />
                        <Form.Group inline>
                            <Form.Radio label='pounds' value='lb' name='weight' onChange={this.setWeightUnits} checked={this.state.weightUnits === 'lb'} />
                            <Form.Radio label='kilograms' value='kg' name='weight' onChange={this.setWeightUnits} checked={this.state.weightUnits === 'kg'} />
                        </Form.Group>
                        <Form.Input fluid label='Height' placeholder='Enter your height' type='number' required onChange={this.setHeight} />
                        <Form.Group inline>
                            <Form.Radio label='inches' value='in' name='height' onChange={this.setHeightUnits} checked={this.state.heightUnits === 'in'} />
                            <Form.Radio label='centimeters' value='cm' name='height' onChange={this.setHeightUnits} checked={this.state.heightUnits === 'cm'} />
                        </Form.Group>
                    </Form.Group>
                    <Form.Button color='blue' onClick={this.clickHandler}>Calculate <Icon name='calculator' /></Form.Button>
                </Form>
                <Container>
                    <Segment size='large' vertical inverted>
                        Disclaimer: The Body Mass Index is not a reliable indicator of body fat.
                    <hr></hr>
                        Your body mass index is: <b>{this.state.bmi
                            ? this.state.bmi
                            : ''}</b>
                        <hr></hr>
                        Your BMI category is: <b>{this.state.category ? this.state.category : ''}</b>
                    </Segment>
                </Container>
                <BMIgraph />
            </Container>
        )
    }
}

export default BMIcalc;
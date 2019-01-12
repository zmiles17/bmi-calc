import React from 'react';
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

    setWeightUnits = event => {
        console.dir(event.target);
        this.setState({ weightUnits: event.target.parentNode.children[0].value });
    }

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
        this.setState({ bmi: bmi, category: category });
    }

    render() {
        return (
            <Container>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Weight' placeholder='Enter your weight' type='number' onChange={this.setWeight} required />
                        <Form.Group inline>
                            <label>Units</label>
                            <Form.Radio label='pounds' value='lb' name='weight' onChange={this.setWeightUnits} checked={this.state.weightUnits === 'lb'} />
                            <Form.Radio label='kilograms' value='kg' name='weight' onChange={this.setWeightUnits} checked={this.state.weightUnits === 'kg'} />
                        </Form.Group>
                        <Form.Input fluid label='Height' placeholder='Enter your height' type='number' required onChange={this.setHeight} />
                        <Form.Group inline>
                            <label>Units</label>
                            <Form.Radio label='inches' value='in' name='height' onChange={this.setHeightUnits} checked={this.state.heightUnits === 'in'} />
                            <Form.Radio label='centimeters' value='cm' name='height' onChange={this.setHeightUnits} checked={this.state.heightUnits === 'cm'} />
                        </Form.Group>
                        <Form.Button color='blue' onClick={this.clickHandler}>Calculate <Icon name='calculator' /></Form.Button>
                    </Form.Group>
                </Form>
                <Container>
                    <Segment size='massive'>
                        {this.state.bmi
                            ? 'Your body mass index is '
                            + Math.round(10 * this.state.bmi) / 10
                            + ', which means you are categorized as '
                            + this.state.category
                            + '.'
                            : ''}
                    </Segment>
                    <Segment size='small'>Disclaimer: The Body Mass Index is not a reliable indicator of body fat.</Segment>
                </Container>
            </Container>
        )
    }
}

export default BMIcalc;
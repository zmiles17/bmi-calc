import React from 'react';
import { Container, Divider, Header, Icon, Segment } from 'semantic-ui-react';
import Userinput from './Form';
import Result from './Result';

class BMRcalc extends React.Component {
    state = {
        gender: '',
        height: Number,
        heightUnits: 'in',
        weight: Number,
        weightUnits: 'lb',
        age: Number,
        activity_level: '',
        BMR: Number,
        calories: Number
    }

    setGender = event => this.setState({ gender: event.target.textContent });

    setWeight = event => this.setState({ weight: event.target.valueAsNumber });

    setWeightUnits = event => this.setState({ weightUnits: event.target.parentNode.children[0].value });

    setHeight = event => this.setState({ height: event.target.valueAsNumber });

    setHeightUnits = event => this.setState({ heightUnits: event.target.parentNode.children[0].value });

    setAge = event => this.setState({ age: event.target.valueAsNumber });

    setActivity = event => {
        if (event.target.textContent === 'Little to no exercise') this.setState({ activity_level: 'Sedentary' });
        if (event.target.textContent === 'Light exercise/sports 1-3 days/week') this.setState({ activity_level: 'Light' });
        if (event.target.textContent === 'Moderate exercise/sports 3-5 days/week') this.setState({ activity_level: 'Moderate' });
        if (event.target.textContent === 'Hard exercise/sports 6-7 days a week') this.setState({ activity_level: 'Very' });
        if (event.target.textContent === 'Very hard exercise/sports & physical job or 2x training') this.setState({ activity_level: 'Extra' });
    }

    calculateBMR = event => {
        event.preventDefault();
        let BMR;
        let calories;
        let height = this.state.height;
        let weight = this.state.weight;
        const gender = this.state.gender;
        const age = this.state.age;
        const activity_level = this.state.activity_level;
        if (this.state.height.toString().includes('cm')) height /= 2.54;
        if (this.state.weight.toString().includes('kg')) weight *= 2.205;
        if (gender === 'Male') BMR = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
        if (gender === 'Female') BMR = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
        if (activity_level === 'Sedentary') calories = BMR * 1.2;
        if (activity_level === 'Light') calories = BMR * 1.375;
        if (activity_level === 'Moderate') calories = BMR * 1.55;
        if (activity_level === 'Very') calories = BMR * 1.725;
        if (activity_level === 'Extra') calories = BMR * 1.9;
        this.setState({ BMR: BMR, calories: calories })
    }

    render() {
        return (
            <Container text>
            <Divider horizontal>
                    <Header as='h4' inverted>
                        <Icon name='info circle' />
                        What is basal metabolic rate?
                    </Header>
                </Divider>
                <Segment inverted>
                    
                </Segment>
                <Userinput
                    data={this.state}
                    setGender={this.setGender}
                    setWeight={this.setWeight}
                    setWeightUnits={this.setWeightUnits}
                    setHeight={this.setHeight}
                    setHeightUnits={this.setHeightUnits}
                    setAge={this.setAge}
                    setActivity={this.setActivity}
                    clickHandler={this.calculateBMR}
                    heightUnits={this.state.heightUnits}
                    weightUnits={this.state.weightUnits} />
                <br></br>
                <Divider horizontal>
                    <Header as='h4' inverted>
                        <Icon name='chart line' />
                        Results
                    </Header>
                </Divider>
                {!isNaN(this.state.BMR) ?
                    <Result BMR={this.state.BMR} calories={this.state.calories} />
                    : ''}
            </Container>
        )
    }
}

export default BMRcalc;
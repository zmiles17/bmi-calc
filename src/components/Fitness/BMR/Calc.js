import React from 'react';
import Form from './Form';
import Result from './Result';

class BMRcalc extends React.Component {
    state = {
        gender: 'Male',
        height: '',
        weight: '',
        age: '',
        activity_level: '',
        BMR: '',
        calories: ''
    }

    setGender = event => this.setState({ gender: event.target.parentNode.childNodes[1].textContent });

    setWeight = event => {
        let weight;
        if (event.target.nodeName === 'INPUT') weight = event.target.value + ' ' + event.target.parentNode[3].value;
        else weight = event.target.parentNode[2].value + ' ' + event.target.value;
        if (weight.length <= 7) this.setState({ weight: weight });
    }

    setHeight = event => {
        let height;
        if (event.target.nodeName === 'INPUT') height = event.target.value + ' ' + event.target.parentNode[5].value;
        else height = event.target.parentNode[4].value + ' ' + event.target.value;
        if (height.length <= 7) this.setState({ height: height });
    }

    setAge = event => this.setState({ age: event.target.value });

    setActivity = event => this.setState({ activity_level: event.target.value });

    calculateBMR = event => {
        event.preventDefault();
        let BMR;
        let calories;
        let height = parseInt(this.state.height);
        let weight = parseInt(this.state.weight);
        const gender = this.state.gender;
        const age = parseInt(this.state.age);
        const activity_level = this.state.activity_level;
        if(this.state.height.includes('cm')) height /= 2.54;
        if(this.state.weight.includes('kg')) weight *= 2.205;
        if(gender === 'Male') BMR = 66 + ( 6.23 * weight ) + ( 12.7 * height ) - ( 6.8 * age );
        if(gender === 'Female') BMR = 655 + ( 4.35 * weight ) + ( 4.7 * height ) - ( 4.7 * age );
        if(activity_level === 'Sedentary') calories = BMR * 1.2;
        if(activity_level === 'Light') calories = BMR * 1.375;
        if(activity_level === 'Moderate') calories = BMR * 1.55;
        if(activity_level === 'Very') calories = BMR * 1.725;
        if(activity_level === 'Extra') calories = BMR * 1.9;
        this.setState({ BMR: BMR, calories: calories })
    }

    render() {
        return (
            <React.Fragment>
                <Form
                    setGender={this.setGender}
                    changeWeight={this.setWeight}
                    changeHeight={this.setHeight}
                    setAge={this.setAge}
                    setActivity={this.setActivity}
                    clickHandler={this.calculateBMR} />
                <Result BMR={this.state.BMR} calories={this.state.calories} />
            </React.Fragment>
        )
    }
}

export default BMRcalc;
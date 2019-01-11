import React from 'react';
import Userinput from './Form';
import Result from './Result';

class BMIcalc extends React.Component {
    state = {
        weight: '',
        height: '',
        bmi: '',
        category: ''
    }

    setWeight = event => {
        let weight;
        if (event.target.nodeName === 'INPUT') weight = event.target.value + ' ' + event.target.parentNode[1].value;
        else weight = event.target.parentNode[0].value + ' ' + event.target.value;
        if (weight.length <= 7) this.setState({ weight: weight });
    }

    setHeight = event => {
        let height;
        if (event.target.nodeName === 'INPUT') height = event.target.value + ' ' + event.target.parentNode[3].value;
        else height = event.target.parentNode[2].value + ' ' + event.target.value;
        if (height.length <= 7) this.setState({ height: height });
    }

    calculateBMI = event => {
        event.preventDefault();
        let category;
        let weight = parseInt(this.state.weight);
        let height = parseInt(this.state.height);
        if (this.state.weight.includes('lb')) weight /= 2.205;
        if (this.state.height.includes('cm')) height /= 100;
        if (this.state.height.includes('in')) height *= 0.0254;
        const bmi = weight / Math.pow(height, 2);
        if (bmi < 18.5) category = 'underweight';
        if (18.5 <= bmi && bmi < 24.9) category = 'normal weight';
        if (25 <= bmi && bmi < 29.9) category = 'overweight';
        if (bmi >= 30) category = 'obese';
        this.setState({ bmi: bmi, category: category });
    }

    render() {
        return (
            <React.Fragment>
                <Userinput changeWeight={this.setWeight} changeHeight={this.setHeight} clickHandler={this.calculateBMI} />
                <Result bmi={this.state.bmi} category={this.state.category} />
            </React.Fragment>
        )
    }
}

export default BMIcalc;
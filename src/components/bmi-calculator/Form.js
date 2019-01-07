import React from 'react';
import Input from './Input';
import Result from './Results';

class Form extends React.Component {
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
        if (weight.length <= 6) this.setState({ weight: weight });
    }

    setHeight = event => {
        let height;
        if (event.target.nodeName === 'INPUT') height = event.target.value + ' ' + event.target.parentNode[3].value;
        else height = event.target.parentNode[2].value + ' ' + event.target.value;
        if (height.length <= 6) this.setState({ height: height });
    }

    calculateBMI = event => {
        event.preventDefault();
        let weight = parseInt(this.state.weight);
        let height = parseInt(this.state.height);
        if (this.state.weight.includes('lb')) weight /= 2.205;
        if (this.state.height.includes('cm')) height /= 100;
        if (this.state.height.includes('in')) height *= 0.0254;
        this.setState({ bmi: weight / Math.pow(height, 2) });
    }

    render() {
        return (
            <React.Fragment>
                <Input changeWeight={this.setWeight} changeHeight={this.setHeight} clickHandler={this.calculateBMI} />
                <Result bmi={this.state.bmi} category={this.state.category} />
            </React.Fragment>
        )
    }
}

export default Form;
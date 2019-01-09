import React from 'react';
import Form from './Form';
import Result from './Result';

class OneRepMax extends React.Component {
    state = {
        weight: '',
        reps: '',
        OneRepMax: ''
    }

    setWeight = event => {
        let weight;
        if (event.target.nodeName === 'INPUT') weight = event.target.value + ' ' + event.target.parentNode.children[1].value;
        else weight = event.target.parentNode.children[0].value + ' ' + event.target.value;
        this.setState({ weight: weight })
    }

    setReps = event => this.setState({ reps: event.target.value });

    handleClick = event => {
        event.preventDefault();
        let weight = parseInt(this.state.weight);
        const reps = this.state.reps;
        if(this.state.weight.includes('lb')) weight /= 2.205;
        this.setState({ OneRepMax: weight * (36 / (37 - reps)) })
    }

    render () {
        return (
            <div>
                <Form setWeight={this.setWeight} setReps={this.setReps} clickHandler={this.handleClick} />
                <Result result={this.state.OneRepMax} />
            </div>
        )
    }
}

export default OneRepMax;
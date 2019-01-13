import React from 'react';
import Form from './Form';
import Result from './Result';


class VO2calc extends React.Component {
    state = {
        RHR: Number,
        age: 1,
        VO2max: ''
    }

    setRHR = event => {
        this.setState({ RHR: parseInt(event.target.value) });
    }

    setAge = event => this.setState({ age: parseInt(event.target.value) });

    calculateVO2 = event => {
        event.preventDefault();
        this.setState({ VO2max: 15.3 * ((220 - this.state.age) / this.state.RHR) })
    }

    render() {
        return (
            <div>
                <Form setRHR={this.setRHR} setAge={this.setAge} clickHandler={this.calculateVO2} />
                <Result VO2max={this.state.VO2max} />
            </div>
        )
    }
}

export default VO2calc;
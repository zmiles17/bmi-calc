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
        if (event.target.nodeName === 'INPUT') console.dir(event.target);
        else console.dir(event.target);
        console.log(weight);
    }

    setReps = event => console.dir(event.target);

    handleClick = event => {
        event.preventDefault();
        console.log(this.state)
    }

    render () {
        return (
            <div>
                <Form setWeight={this.setWeight} setReps={this.setReps} clickHandler={this.handleClick} />
                <Result />
            </div>
        )
    }
}

export default OneRepMax;
import React from 'react';
import Form from './Form';
import Result from './Result';

class TargetHeartRate extends React.Component {
    state = {
        age: '',
    }

    setAge = event => {
        if (event.target.value >= 0 && event.target.value < 110) this.setState({ age: event.target.value });
    }

    render () {
        return (
            <div>
                <Form changeHandler={this.setAge} />
                <Result age={this.state.age} />
            </div>
        )
    }
}

export default TargetHeartRate;
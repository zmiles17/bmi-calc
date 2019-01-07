import React from 'react';

const Result = props => (
    <div className='results'>
        <h1>{props.bmi ? 'Your BMI is ' + Math.round(10 * props.bmi) / 10 : ''}</h1>
    </div>
)

export default Result;
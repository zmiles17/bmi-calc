import React from 'react';

const Result = props => (
    <div className='results'>
        <p className='calc-results'>{props.bmi
            ? 'Your BMI is ' 
            + Math.round(10 * props.bmi) / 10 
            + ', which means you are categorized as ' 
            + props.category 
            + '.' 
            + ' The Body Mass Index is not a reliable indicator of body fat.'
            + ' It is a simple calculation for the general population and cannot be applied to every individual.'
            : 'Please enter a valid weight and height.'}
        </p>
    </div>
)

export default Result;
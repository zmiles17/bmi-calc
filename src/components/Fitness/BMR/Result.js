import React from 'react';

const Result = props => (
    <div>
        <p>Your Basal Metabolic Rate is: {props.BMR ? Math.round(props.BMR) : ''} </p>
        <p>Calories needed to maintain your current weight: {props.calories ? Math.round(props.calories) : ''}</p>
    </div>
)

export default Result;
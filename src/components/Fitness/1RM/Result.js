import React from 'react';

const Result = props => (
    <div>Your one rep max is: {props.result ? Math.round(props.result * 2.205) + ' lbs' : ''} </div>
)

export default Result;
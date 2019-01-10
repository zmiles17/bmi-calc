import React from 'react';

const Result = props => (
    <div>Your one rep max is: {props.OneRepMax ? Math.round(props.OneRepMax * 2.205) + ' lbs' : ''} </div>
)

export default Result;
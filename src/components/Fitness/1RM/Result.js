import React from 'react';

const Result = props => (
    <div>Your one rep max is: {props.result ? Math.round(props.result) : ''} </div>
)

export default Result;
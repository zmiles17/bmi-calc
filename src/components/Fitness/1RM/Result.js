import React from 'react';
import { Segment } from 'semantic-ui-react';

const Result = props => (
    <Segment><h1>Your one rep max is: {props.OneRepMax ? Math.round(props.OneRepMax * 2.205) + ' lbs' : ''} </h1></Segment>
)

export default Result;
import React from 'react';
import { Jumbotron } from 'reactstrap';

const Result = props => (
    <Jumbotron><h1>Your one rep max is: {props.OneRepMax ? Math.round(props.OneRepMax * 2.205) + ' lbs' : ''} </h1></Jumbotron>
)

export default Result;
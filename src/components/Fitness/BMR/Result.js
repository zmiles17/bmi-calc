import React from 'react';
import { Segment } from 'semantic-ui-react';

const Result = props => (
    <div>
        <Segment>Your Basal Metabolic Rate is: {props.BMR ? Math.round(props.BMR) : ''} </Segment>
        <Segment>Calories needed to maintain your current weight: {props.calories ? Math.round(props.calories) : ''}</Segment>
    </div>
)

export default Result;
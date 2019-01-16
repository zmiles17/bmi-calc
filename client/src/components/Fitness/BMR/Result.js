import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

const Result = props => (
    <Container>
        <Segment inverted>Your Basal Metabolic Rate is: {props.BMR ? Math.round(props.BMR) : ''}
        <hr></hr>Calories needed to maintain your current weight: {props.calories ? Math.round(props.calories) : ''}</Segment>
        </Container>
    
)

export default Result;
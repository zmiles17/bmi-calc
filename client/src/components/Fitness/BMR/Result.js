import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

const Result = props => (
    <Container>
        <Segment inverted size='large'>Your Basal Metabolic Rate is: {!isNaN(props.BMR) ? Math.round(props.BMR) : ''}
        <hr></hr>Calories needed to maintain your current weight: {!isNaN(props.calories) ? Math.round(props.calories) : ''}</Segment>
        </Container>
    
)

export default Result;
import React from 'react';
import { Message } from 'semantic-ui-react';

const Result = props => (
    <Message size='large'>Your Basal Metabolic Rate is: {!isNaN(props.BMR)
        ? <b>{Math.round(props.BMR)
            + ' Calories/day'}</b>
        : ''}
        <hr></hr>
        Calories needed to maintain your current weight: {!isNaN(props.calories)
            ? <b>{Math.round(props.calories)
                + ' Calories/day'}</b>
            : ''}
    </Message>
)

export default Result;
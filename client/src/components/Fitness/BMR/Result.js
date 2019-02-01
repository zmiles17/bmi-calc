import React from 'react';
import { Message } from 'semantic-ui-react';

const Result = props => (
    <Message size='large'>Your basal metabolic rate is {!isNaN(props.BMR)
        ? <b>{Math.round(props.BMR)
            + ' Calories per day'}</b>
        : ''}
        <hr></hr>
        Calories needed to maintain your current weight: {!isNaN(props.calories)
            ? <b>{Math.round(props.calories)
                + ' Calories per day'}</b>
            : ''}
    </Message>
)

export default Result;
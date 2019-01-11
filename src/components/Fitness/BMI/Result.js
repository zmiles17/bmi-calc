import React from 'react';
import { Jumbotron } from 'reactstrap';

const Result = props => (
    <Jumbotron>
        <h6 className='bmi-results'>
            {props.bmi
                ? 'Your body mass index is '
                + Math.round(10 * props.bmi) / 10
                + ', which means you are categorized as '
                + props.category
                + '.'
                : ''}
        </h6>
        <hr />
        <p>Disclaimer: The Body Mass Index is not a reliable indicator of body fat.</p>
    </Jumbotron>
)

export default Result;
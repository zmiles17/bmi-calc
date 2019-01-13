import React from 'react';

const Result = props => (
    <div>
        Your estimated VO2 Max is: {props.VO2max ? Math.round(10 * props.VO2max) / 10 : ''}
    </div>
)

export default Result;
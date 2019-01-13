import React from 'react';

const Result = props => (
    <div>
        <p>Target Heart Rate Zone (50-85%): {props.age ? Math.round((220 - props.age) * 0.5) + '-' + Math.round((220 - props.age) * 0.85) + ' bpm' : ''}</p>
    </div>
)

export default Result;
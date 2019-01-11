import React from 'react';

const Form = props => (
    <form>
        <label>
            Age
        <input placeholder='Enter a number' type='number' onChange={props.changeHandler} />
        Years
        </label>
    </form>
)

export default Form;
import React from 'react';

const Input = props => (
    <form className='bmi-form'>
        <input placeholder='weight' type='number' onChange={props.changeWeight} required />
        <select onChange={props.changeWeight}>
            <option value='kg'>kg</option>
            <option value='lb'>lb</option>
        </select>
        <input placeholder='height' type='number' onChange={props.changeHeight} required/>
        <select onChange={props.changeHeight}>
            <option value='in'>in</option>
            <option value='cm'>cm</option>
        </select>
        <button onClick={props.clickHandler}>Calculate</button>
    </form>
)

export default Input;
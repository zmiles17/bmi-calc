import React from 'react';

let ages = Array(100).fill(null);
const Form = props => (
    <form>
        <label>
            <input type='radio' name='gender' defaultChecked />
            Male
        </label>
        <label>
            <input type='radio' name='gender' />
            Female
        </label>
        <input placeholder='weight' type='number' onChange={props.changeWeight} required />
        <select onChange={props.changeWeight}>
            <option value='kg'>kg</option>
            <option value='lb'>lb</option>
        </select>
        <input placeholder='height' type='number' onChange={props.changeHeight} required />
        <select onChange={props.changeHeight}>
            <option value='in'>in</option>
            <option value='cm'>cm</option>
        </select>
        <label>
            Age
        <select>
                {ages.map((age, i) => <option key={i}>{i}</option>)}
            </select>
            Years
        </label>
    </form>
)

export default Form;
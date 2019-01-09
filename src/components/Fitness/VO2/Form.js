import React from 'react';

const ages = Array(100).fill(null);

const Form = props => (
    <form>
        <label>
            Resting Heart Rate
            <input type='number' placeholder='Enter a number' onChange={props.setRHR} />
            beats per minute
        </label>
        <br></br>
        <label>
            Age
            <select onChange={props.setAge}>
                {ages.map((age, i) => <option key={i}>{i + 1}</option>)}
            </select>
            Years
        </label>
        <br></br>
        <button onClick={props.clickHandler}>Calculate</button>
    </form>
)

export default Form;
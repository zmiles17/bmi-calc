import React from 'react';

const Form = props => (
    <form>
        <label>
            Weight lifted
            <input type='number' onChange={props.setWeight} />
            <select onChange={props.setWeight}>
                <option value='kg'>kg</option>
                <option value='lb'>lb</option>
            </select>
        </label>
        <br></br>
        <label>
            Amount of repetitions
            <input type='number' onChange={props.setReps}/>
        </label>
        <br></br>
        <button onClick={props.clickHandler}>Calculate</button>
    </form>
)

export default Form;
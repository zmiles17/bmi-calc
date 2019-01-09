import React from 'react';

let ages = Array(100).fill(null);
const Form = props => (
    <form>
        <label>
            <input type='radio' name='gender' defaultChecked onChange={props.setGender} />
            Male
        </label>
        <label>
            <input type='radio' name='gender' onChange={props.setGender} />
            Female
        </label>
        <br></br>
        <input placeholder='weight' type='number' onChange={props.changeWeight} required />
        <select onChange={props.changeWeight}>
            <option value='kg'>kg</option>
            <option value='lb'>lb</option>
        </select>
        <br></br>
        <input placeholder='height' type='number' onChange={props.changeHeight} required />
        <select onChange={props.changeHeight}>
            <option value='in'>in</option>
            <option value='cm'>cm</option>
        </select>
        <br></br>
        <label>
            Age
        <select onChange={props.setAge}>
                {ages.map((age, i) => <option key={i}>{i + 1}</option>)}
            </select>
            Years
        </label>
        <br></br>
        <label>
            Activity Level
            <select onChange={props.setActivity}>
                <option value='Sedentary'>Little to no exercise</option>
                <option value='Light'>Light exercise/sports 1-3 days/week</option>
                <option value='Moderate'>Moderate exercise/sports 3-5 days/week</option>
                <option value='Very'>Hard exercise/sports 6-7 days a week</option>
                <option value='Extra'>Very hard exercise/sports & physical job or 2x training</option>
            </select>
        </label>
        <br></br>
        <button onClick={props.clickHandler}>Calculate</button>
    </form>
)

export default Form;
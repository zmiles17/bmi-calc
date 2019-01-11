import React from 'react';
import { Form, Label, Input, Button } from 'reactstrap';

let ages = Array(100).fill(null);
const Userinput = props => (
    <Form>
        <Label check>
            <Input type='radio' name='gender' defaultChecked onChange={props.setGender} />
            Male
        </Label>
        <Label>
            <Input type='radio' name='gender' onChange={props.setGender} />{' '}
            Female
        </Label>
        <br></br>
        <Input placeholder='weight' type='number' onChange={props.changeWeight} required />
        <Input type='select' onChange={props.changeWeight}>
            <option value='kg'>kg</option>
            <option value='lb'>lb</option>
        </Input>
        <br></br>
        <Input placeholder='height' type='number' onChange={props.changeHeight} required />
        <Input type='select' onChange={props.changeHeight}>
            <option value='in'>in</option>
            <option value='cm'>cm</option>
        </Input>
        <br></br>
        <Label>
            Age
        <Input type='select' onChange={props.setAge}>
                {ages.map((age, i) => <option key={i}>{i + 1}</option>)}
            </Input>
            Years
        </Label>
        <br></br>
        <Label>
            Activity Level
            <Input type='select' onChange={props.setActivity}>
                <option value='Sedentary'>Little to no exercise</option>
                <option value='Light'>Light exercise/sports 1-3 days/week</option>
                <option value='Moderate'>Moderate exercise/sports 3-5 days/week</option>
                <option value='Very'>Hard exercise/sports 6-7 days a week</option>
                <option value='Extra'>Very hard exercise/sports & physical job or 2x training</option>
            </Input>
        </Label>
        <br></br>
        <Button onClick={props.clickHandler}>Calculate</Button>
    </Form>
)

export default Userinput;
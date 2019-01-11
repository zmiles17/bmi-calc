import React from 'react';
import { Button, Input, Form } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Userinput = props => (
    <Form className='bmi-form'>
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
        <Button color='primary' onClick={props.clickHandler}>Calculate <FontAwesomeIcon icon='calculator' /></Button>
    </Form>
)

export default Userinput;
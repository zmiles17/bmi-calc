import React from 'react';
import { Form, Button, Input, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Userinput = props => (
    <Form>
        <Label>
            Weight lifted
            <Input type='number' onChange={props.setWeight} />
            <Input type='select' onChange={props.setWeight}>
                <option value='kg'>kg</option>
                <option value='lb'>lb</option>
            </Input>
        </Label>
        <br></br>
        <Label>
            Amount of repetitions
            <Input type='number' onChange={props.setReps}/>
        </Label>
        <br></br>
        <Button color='primary' onClick={props.clickHandler}>Calculate <FontAwesomeIcon icon='calculator' /></Button>
    </Form>
)

export default Userinput;
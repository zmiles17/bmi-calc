import React from 'react';
import { Form, Icon } from 'semantic-ui-react';

const Userinput = props => (
    <Form>
        <label>Weight lifted</label>
            <Form.Input type='number'  />
            <Form.Select type='select' >
                <option value='kg'>kg</option>
                <option value='lb'>lb</option>
            </Form.Select>
        <label> Amount of repetitions</label>
            <Form.Input type='number' />
        <Form.Button color='primary' >Calculate <Icon name='calculator' /></Form.Button>
    </Form>
)

export default Userinput;
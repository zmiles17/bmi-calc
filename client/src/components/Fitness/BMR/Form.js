import React from 'react';
import { Form, Segment, Icon, Container } from 'semantic-ui-react';

const options = [
    { key: '1', text: 'Little to no exercise', value: 'Sedentary' },
    { key: '2', text: 'Light exercise/sports 1-3 days/week', value: 'Light' },
    { key: '3', text: 'Moderate exercise/sports 3-5 days/week', value: 'Moderate' },
    { key: '4', text: 'Hard exercise/sports 6-7 days a week', value: 'Very' },
    { key: '5', text: 'Very hard exercise/sports & physical job or 2x training', value: 'Extra' }
]

const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' }
]
const Userinput = props => (
    <Container>
        <Form inverted>
            <Form.Group widths='equal'>
                <Form.Input fluid label='Weight' placeholder='Weight' type='number' required />
                <Form.Group inline>
                    <Form.Radio label='pounds' value='lb' name='weight' />
                    <Form.Radio label='kilograms' value='kg' name='weight' />
                </Form.Group>
                <Form.Input fluid label='Height' placeholder='Height' type='number' required />
                <Form.Group inline>
                    <Form.Radio label='inches' value='in' name='height' />
                    <Form.Radio label='centimeters' value='cm' name='height' />
                </Form.Group>
                <Form.Input label='Age' placeholder='Enter your age' type='number' required />
                <Form.Select fluid label='Gender' options={genderOptions} placeholder='Gender' />
                <Form.Select label='Activity Level' placeholder='Activity Level' options={options} />
            </Form.Group>
            <Form.Button color='blue'>Calculate <Icon name='calculator' /></Form.Button>
        </Form>
    </Container>
)

export default Userinput;
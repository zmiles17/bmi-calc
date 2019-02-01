import React from 'react';
import { Header, Container } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Errorpage = ({ mobile }) => (
    <Container text>
        <Header
            as='h1'
            inverted
            content='404'
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
            }} />
        <FontAwesomeIcon icon='sad-cry' size='4x' />
        <Header
            as='h2'
            content="Sorry this page doesn't exist."
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
    </Container>
)

export default Errorpage;
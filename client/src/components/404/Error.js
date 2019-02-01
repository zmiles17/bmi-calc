import React from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react'

const Errorpage = props => (
    <Segment inverted placeholder><Header icon><Icon name='dont' /> 404 <p>Sorry this page doesn't exist.</p> </Header></Segment>
)

export default Errorpage;
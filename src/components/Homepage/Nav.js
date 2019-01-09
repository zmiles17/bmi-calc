import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => (
    <nav>
        <Link to={`/`}>Home</Link>
        <br></br>
        <Link to={`/calculator`}>Calculator</Link>
    </nav>
)

export default Nav;
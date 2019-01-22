import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { HomepageHeading } from '../Homepage/Header'

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginError: false,
            redirect: false
        };
        this.signup = this.signup.bind(this);
    }


    render() {

        if (this.state.redirect || sessionStorage.getItem('userData')) {
            return (<Redirect to={'/home'} />)
        }

        

        return (
            <React.Fragment>
                <HomepageHeading />
            </React.Fragment>
        );
    }
}
export default Welcome;
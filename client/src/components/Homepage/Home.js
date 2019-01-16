import React from 'react';
import Redirect from 'react-dom'
import { HomepageHeading } from '../Homepage/Header'

class Home extends React.Component {
        state = {
            name: '',
            redirect: false,
        }

    componentDidMount() {
        let data = JSON.parse(sessionStorage.getItem('userData'));
        console.log(data);
        this.setState({ name: data.userData.name })
    }

    render() {

        if (!sessionStorage.getItem('userData') || this.state.redirect) {
            return (<Redirect to={'/'} />)
        }

        return (
            <div >
                <HomepageHeading />
                Welcome {this.state.name}
            </div>
        );
    }
}

export default Home;
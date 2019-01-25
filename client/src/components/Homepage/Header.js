import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import {
  Button,
  Container,
  Dropdown,
  Header,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';


// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      inverted
      content='myFitCalc'
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }} />
    <FontAwesomeIcon icon='dumbbell' size='4x' />
    <Header
      as='h2'
      content='A fast and easy solution for assessing wellness.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {
    loginError: false,
    redirect: false,
    isLoggedIn: sessionStorage.getItem('userData') !== null ? true : false,
    profile_pic: '',
    username: ''
  }

  componentDidMount() {
    if (sessionStorage.getItem('userData')) {
      const _id = sessionStorage.getItem('userData')
      axios.get(`/api/users/${_id}`)
        .then(result => {
          this.setState({ profile_pic: result.data.provider_pic, username: result.data.name })
        })
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  hideFixedMenu = () => this.setState({ fixed: false })

  showFixedMenu = () => this.setState({ fixed: true })

  responseGoogle = (response) => {
    this.signup(response);
  }

  logout = (response) => {
    sessionStorage.clear();
    this.setState({ isLoggedIn: false })
    window.location.replace('/');
  }

  signup = (res) => {
    let postData;
    if (res.w3.U3) {
      postData = {
        name: res.w3.ig,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
    }

    if (postData) {
      axios.post('/api/users', postData).then((result) => {
        console.log(result)
        sessionStorage.setItem("userData", result.data._id);
        this.setState({ isLoggedIn: true });
        window.location.reload();
      });
    } else { }
  }

  render() {
    const { children } = this.props
    const { fixed } = this.state
    const { activeItem } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: '100vh', padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as={Link} to={`/home`} name='home' onClick={this.handleItemClick} active={activeItem === 'home'}>Home</Menu.Item>
                <Menu.Item as={Link} to={`/bmi`} name='bmi' onClick={this.handleItemClick} active={activeItem === 'bmi'}>Body Mass Index</Menu.Item>
                <Menu.Item as={Link} to={`/bmr`} name='bmr' onClick={this.handleItemClick} active={activeItem === 'bmr'}>Basal Metabolic Rate</Menu.Item>
                {this.state.isLoggedIn ?
                  null
                  : <Menu.Item position='right'>
                    <GoogleLogin
                      clientId="212183881598-crat4ugt0pram2fiaanannq4p6vmj8mn.apps.googleusercontent.com"
                      render={renderProps => (
                        <Button onClick={renderProps.onClick} inverted={!fixed}><Icon name='google' />Login with Google</Button>
                      )}
                      onSuccess={this.responseGoogle}
                      onFailure={this.responseGoogle} /></Menu.Item>}
                {this.state.profile_pic !== '' ?
                  <Menu.Item position='right'>
                    <Dropdown
                      trigger={<Image avatar src={this.state.profile_pic} circular />}
                      options={[{ key: 'account', text: 'Account', icon: 'user' },
                      { key: 'settings', text: 'Settings', icon: 'settings' },
                      {
                        key: 'logout', text: 'Logout', icon: 'google', onClick: this.logout,
                      }]}
                      pointing='top left' icon={null}>
                    </Dropdown>
                  </Menu.Item> : null}
              </Container>
            </Menu>
            {children}
          </Segment>
        </Visibility>


      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {
    loginError: false,
    redirect: false,
    isLoggedIn: sessionStorage.getItem('userData') !== null ? true : false,
    profile_pic: '',
    username: ''
  }

  componentDidMount() {
    if (sessionStorage.getItem('userData')) {
      const _id = sessionStorage.getItem('userData')
      axios.get(`/api/users/${_id}`)
        .then(result => {
          this.setState({ profile_pic: result.data.provider_pic, username: result.data.name })
        })
    }
  }

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleToggle = () => this.setState({ sidebarOpened: true })

  responseGoogle = (response) => {
    this.signup(response);
  }

  logout = (response) => {
    sessionStorage.clear();
    this.setState({ isLoggedIn: false })
    window.location.replace('/');
  }

  signup = (res) => {
    let postData;
    if (res.w3.U3) {
      postData = {
        name: res.w3.ig,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
    }

    if (postData) {
      axios.post('/api/users', postData).then((result) => {
        sessionStorage.setItem("userData", result.data._id);
        this.setState({ isLoggedIn: true });
        window.location.reload();
      });
    } else { }
  }


  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    const { activeItem } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
        style={{ cursor: 'pointer' }}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as={Link} to={`/home`} name='home' onClick={this.handleItemClick} active={activeItem === 'home'}>Home</Menu.Item>
          <Menu.Item as={Link} to={`/bmi`} name='bmi' onClick={this.handleItemClick} active={activeItem === 'bmi'}>Body Mass Index</Menu.Item>
          <Menu.Item as={Link} to={`/bmr`} name='bmr' onClick={this.handleItemClick} active={activeItem === 'bmr'}>Basal Metabolic Rate</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: '100vh', padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                {this.state.isLoggedIn ? null
                  : <Menu.Item position='right'><GoogleLogin
                    clientId="212183881598-crat4ugt0pram2fiaanannq4p6vmj8mn.apps.googleusercontent.com"
                    render={renderProps => (
                      <Button onClick={renderProps.onClick} inverted><Icon name='google' />Login with Google</Button>
                    )}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle} />
                    </Menu.Item>
                }
                {this.state.profile_pic !== '' ?
                  <Menu.Item position='right'>
                    <Dropdown
                      trigger={<Image avatar src={this.state.profile_pic} circular />}
                      options={[{ key: 'account', text: 'Account', icon: 'user' },
                      { key: 'settings', text: 'Settings', icon: 'settings' },
                      {
                        key: 'logout', text: 'Logout', icon: 'google', onClick: this.logout,
                      }]}
                      pointing='top right' icon={null}>
                    </Dropdown>
                  </Menu.Item> : null}
              </Menu>
            </Container>
            {children}

          </Segment>

        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = ({ children }) => (
  <ResponsiveContainer>
    {children}
  </ResponsiveContainer>
)
export { HomepageLayout, HomepageHeading };

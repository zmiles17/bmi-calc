import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { GoogleLogout } from 'react-google-login';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  // Button,
  Container,
  Header,
  Icon,
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
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state
    const { activeItem } = this.state
    // const logout = (response) => {
    //   console.log(response);
    //   sessionStorage.clear();
    //   this.setState({ isLoggedIn: false })
    // }

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
                {/* <Menu.Item position='right'>
                  <Button as={GoogleLogout}
                    onLogoutSuccess={() => logout()}>
                    Logout
                  </Button>
                </Menu.Item> */}
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
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleToggle = () => this.setState({ sidebarOpened: true })


  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    const { activeItem } = this.state
    // const logout = (response) => {
    //   console.log(response);
    //   sessionStorage.clear();
    //   this.setState({ isLoggedIn: false })
    // }

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
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
          {/* <Menu.Item>
            <GoogleLogout
              buttonText='Logout'
              onLogoutSuccess={() => logout()}>
              Logout
                  </GoogleLogout>
          </Menu.Item> */}
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

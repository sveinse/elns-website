import React, { Component } from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import {
  Menu,
  Container,
  Segment,
  Responsive,
  Visibility,
  Button,
  Sidebar,
  Icon,
} from "semantic-ui-react"

const getWidth = () => {
  const isSSR = typeof window === "undefined"
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const ElnsMenu = () => (
  <>
    <Menu.Item as={NavLink} activeClassName="active" to="/" exact>
      ELNS
    </Menu.Item>
    <Menu.Item as={NavLink} activeClassName="active" to="/features" exact>
      Features
    </Menu.Item>
  </>
)

const ElnsMenuButtons = () => (
  <Button
    inverted
    as="a"
    href="https://github.com/sveinse/elns-release/releases"
  >
    Download
  </Button>
)

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { banner, children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment inverted textAlign="center" vertical>
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <ElnsMenu />
                <Menu.Item position="right">
                  <ElnsMenuButtons />
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
          {banner ? React.cloneElement(banner, { mobile: false }) : ""}
        </Visibility>
        {children}
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
  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { banner, children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <ElnsMenu />
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment inverted textAlign="center" vertical>
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" size="large" />
                </Menu.Item>
                <Menu.Item position="right">
                  <ElnsMenuButtons />
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
          {banner ? React.cloneElement(banner, { mobile: true }) : ""}
          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const Footer = () => (
  <footer>
    <Segment inverted vertical className="bottom">
      <Container>ELNS (C) 2020 Svein Seldal</Container>
    </Segment>
  </footer>
)

const Layout = ({ banner, children }) => (
  <div className="site">
    <div className="site-main">
      <main>
        <DesktopContainer banner={banner}>{children}</DesktopContainer>
        <MobileContainer banner={banner}>{children}</MobileContainer>
      </main>
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

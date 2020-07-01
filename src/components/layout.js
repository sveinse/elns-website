import React, { Component } from "react"
import PropTypes from "prop-types"
import { NavLink, Link } from "react-router-dom"
import {
  Menu,
  Container,
  Segment,
  Responsive,
  Visibility,
  Button,
  Sidebar,
  Icon,
  Image,
} from "semantic-ui-react"

import { elns_menu } from "./nav"
import elns_icon from "../images/elns-icon.png"

const getWidth = () => {
  const isSSR = typeof window === "undefined"
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const ElnsMenu = () => (
  <>
    {elns_menu.map(e => (
      <Menu.Item
        as={NavLink}
        activeClassName="active"
        to={e.to}
        exact={e.exact}
      >
        {e.content}
      </Menu.Item>
    ))}
  </>
)

const ElnsMenuButtons = () => (
  <>
    <Button
      inverted
      as="a"
      href="https://github.com/sveinse/elns-release/releases"
      style={{ marginLeft: "0.5em" }}
    >
      Download
    </Button>
  </>
)

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { banner, children, nav, className } = this.props
    const { fixed } = this.state

    return (
      <Responsive
        getWidth={getWidth}
        minWidth={Responsive.onlyTablet.minWidth}
        className={className}
      >
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
              size="huge"
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
        <div className="wrapper flex">
          <main className="main">{children}</main>
          {!banner && (
            <Responsive
              minWidth={Responsive.onlyTablet.maxWidth}
              className={nav ? "nav show" : "nav nosnow"}
            >
              {nav}
            </Responsive>
          )}
        </div>
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
    const { banner, children, className } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
        className={className}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
          width="thin"
        >
          <ElnsMenu />
        </Sidebar>

        <Sidebar.Pusher as="main" dimmed={sidebarOpened}>
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
    <Segment inverted vertical>
      <Container>ELNS (C) 2020 Svein Seldal</Container>
    </Segment>
  </footer>
)

const Layout = ({ banner, nav, children }) => (
  <div className="site flexparent">
    <DesktopContainer banner={banner} nav={nav} className="flex flexparent">
      {children}
    </DesktopContainer>
    <MobileContainer banner={banner} className="flex">
      {children}
    </MobileContainer>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

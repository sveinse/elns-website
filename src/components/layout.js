import React from "react";
import PropTypes from "prop-types";
import {
  Menu,
  Container,
  Segment,
  Responsive,
  Visibility,
  Button,
  Sidebar,
  Icon,
} from "semantic-ui-react";

import { NavLink, Link } from "components/router";
import { elns_menu } from "components/nav";
import { DocsNav, DocsCrumbs } from "components/docsnav";

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const ElnsMenu = ({ download }) => (
  <>
    {elns_menu.map(e => {
      if (e.to === "/download" && !download) return null;
      return (
        <Menu.Item
          key={e.to}
          as={NavLink}
          activeClassName="active"
          to={e.to}
          exact={e.exact}
        >
          {e.content}
        </Menu.Item>
      );
    })}
  </>
);

const ElnsMenuButtons = ({ inverted }) => (
  <>
    <Button
      inverted={inverted}
      as={Link}
      to="/download"
      style={{ marginLeft: "0.5em" }}
    >
      Download
    </Button>
  </>
);

class DesktopContainer extends React.Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { banner, children, nav, className } = this.props;
    const { fixed } = this.state;

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
                  <ElnsMenuButtons inverted={!fixed} />
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
              className={nav ? "nav show" : "nav noshow"}
            >
              {nav}
            </Responsive>
          )}
        </div>
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends React.Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { banner, children, className } = this.props;
    const { sidebarOpened } = this.state;

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
          <ElnsMenu download />
        </Sidebar>

        <Sidebar.Pusher as="main" dimmed={sidebarOpened}>
          <Segment inverted textAlign="center" vertical>
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" size="large" />
                </Menu.Item>
                <Menu.Item position="right">
                  <ElnsMenuButtons inverted />
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
          {banner ? React.cloneElement(banner, { mobile: true }) : ""}
          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const Footer = () => (
  <footer>
    <Segment inverted vertical>
      <Container>
        ELNS (C) 2020 Svein Seldal{" "}
        <Button as={Link} to="/todo" inverted>
          Todo
        </Button>
      </Container>
    </Segment>
  </footer>
);

const Layout = ({ banner, notext, docs, children }) => {
  const page = (
    <Container text={!notext}>
      {docs && <DocsCrumbs path={docs} />}
      {children}
    </Container>
  );
  return (
    <div className="site flexparent">
      <DesktopContainer
        banner={banner}
        nav={docs && <DocsNav path={docs} className="docsnav" />}
        className="flex flexparent"
      >
        {page}
      </DesktopContainer>
      <MobileContainer banner={banner} className="flex">
        {page}
      </MobileContainer>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

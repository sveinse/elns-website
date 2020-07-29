import React from "react";
import PropTypes from "prop-types";
import {
  Menu,
  Container,
  Segment,
  Button,
  Sidebar,
  Icon,
} from "semantic-ui-react";

import { NavLink, Link } from "components/router";
import { elns_menu } from "components/nav";
import { DocsNav, DocsCrumbs } from "components/docsnav";

const ElnsMenu = ({ download, className }) => (
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
          className={className}
        >
          {e.content}
        </Menu.Item>
      );
    })}
  </>
);

const Footer = () => (
  <Segment inverted vertical>
    <Container as="footer">
      ELNS (C) 2020 Svein Seldal{" "}
      <Button as={Link} to="/todo" inverted>
        Todo
      </Button>
    </Container>
  </Segment>
);

class Layout extends React.Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { banner, docs, notext, children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <div className="site flexparent">
        <Sidebar.Pushable as={Segment} className="flex flexparent">
          <Sidebar
            as={Menu}
            animation="push"
            onHide={this.handleSidebarHide}
            visible={sidebarOpened}
            inverted
            vertical
            width="thin"
            size="large"
          >
            <ElnsMenu download />
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened} className="flex flexparent">
            <Segment inverted textAlign="center" vertical>
              <Container>
                <Menu
                  as="nav"
                  inverted
                  pointing
                  secondary
                  size="huge"
                  className="topnav"
                >
                  <Menu.Item onClick={this.handleToggle} className="mobile">
                    <Icon name="sidebar" size="large" />
                  </Menu.Item>
                  <ElnsMenu className="desktop" />
                  <Menu.Item position="right">
                    <Button inverted as={Link} to="/download">
                      Download
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>

            {banner}
            <div className="sideflex flex">
              <Container text={!notext}>
                {docs && <DocsCrumbs path={docs} />}
                <main>{children}</main>
              </Container>

              {!banner && (
                <nav className="flexparent">
                  {docs && <DocsNav path={docs} className="flex docsnav" />}
                </nav>
              )}
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  banner: PropTypes.node,
  notext: PropTypes.bool,
  docs: PropTypes.string,
};

export default Layout;

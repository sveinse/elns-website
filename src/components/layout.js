import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Menu, Container, Sticky, Segment } from 'semantic-ui-react';
import "semantic-ui-less/semantic.less";


const EHeader = () => (
  <header>
    <Sticky>
      <Segment inverted vertical center aligned className="topmenu">
        <Container>
          <Menu inverted pointing secondary stackable>

<Menu.Item as={Link} activeClassName='active' to='/'>ELNS</Menu.Item>
<Menu.Item as={Link} activeClassName='active' to='/features'>Features</Menu.Item>

          </Menu>
        </Container>
      </Segment>
    </Sticky>
  </header>
)


const EFooter = () => (
  <footer>
    <Segment inverted vertical className="bottom">
      <Container>
        ELNS (C) 2020 Svein Seldal
      </Container>
    </Segment>
  </footer>
)


const Layout = ({ children }) => (
  <div className='site'>
    <EHeader />
    <div className='site-main'>
      <main>{children}</main>
    </div>
    <EFooter />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

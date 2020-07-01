import React from "react"
import PropTypes from "prop-types"
import { NavLink, Link } from "react-router-dom"
import { Breadcrumb, Icon, Container, Header } from "semantic-ui-react"

import { elns_docs } from "./nav"
import Layout from "./layout"

const get_crumbs = function (pages, path) {
  var crumbs = []
  var tip = pages
  var href = ""

  for (let s of path.split("/")) {
    if (s === "") continue

    var e = tip.find(e => e.path === s)
    if (e === undefined) break

    href = href + "/" + e.path
    var o = {
      key: s,
      content: e.content,
    }
    if (path === href) {
      o.active = true
    } else {
      o.as = NavLink
      o.to = href
    }
    crumbs.push(o)
    tip = e.children
  }
  return crumbs
}

const DocsNav = ({ path, base, level, pages }) => {
  if (pages === undefined) return ""
  return (
    <ul className={"docsnav level" + level.toString()}>
      {pages.map(e => {
        const href = base + "/" + e.path
        const active = path.startsWith(href) ? "active" : ""
        return (
          <>
            <li className={active}>
              <NavLink to={href} exact>
                {e.content}
                &nbsp;
                {level === 0 && !active && <Icon name="angle down" />}
                {level === 0 && active && <Icon name="angle up" />}
              </NavLink>
            </li>
            {active && (
              <DocsNav
                path={path}
                base={href}
                level={level + 1}
                pages={e.children}
              />
            )}
          </>
        )
      })}
    </ul>
  )
}

DocsNav.propTypes = {
  path: PropTypes.string,
  base: PropTypes.string,
  level: PropTypes.number,
  pages: PropTypes.array,
}

DocsNav.defaultProps = {
  base: "",
  level: 0,
}

export const DocsHeader = ({ title, to, children }) => (
  <>
    <Header as="h3">
      <Link to={to}>{title}</Link>
    </Header>
    {children}
  </>
)

const DocsLayout = ({ children, path }) => (
  <Layout
    nav={<DocsNav path={path} base="/docs" pages={elns_docs[0].children} />}
  >
    <Container text>
      <p />
      <Breadcrumb
        icon="right angle"
        size="large"
        sections={get_crumbs(elns_docs, path)}
      />
      <p />
      {children}
    </Container>
  </Layout>
)

DocsLayout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string,
}

export default DocsLayout

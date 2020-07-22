import React from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import {
  Breadcrumb,
  Icon,
  Container,
  Header,
  Segment,
  List,
} from "semantic-ui-react";
import classNames from "classnames";

import { MaybeNavLink } from "./maybe";
import { elns_docs } from "./nav";
import Layout from "./layout";

const getCrumbs = (pages, path) => {
  let crumbs = [];
  let tip = pages;
  let href = "";

  for (let s of path.split("/")) {
    if (s === "") continue;

    let e = tip.find(e => e.path === s);
    if (e === undefined) break;

    href = href + "/" + e.path;
    const o = {
      key: s,
      content: e.menu,
    };
    if (path === href) {
      o.active = true;
    } else {
      o.as = NavLink;
      o.to = href;
    }
    crumbs.push(o);
    tip = e.children;
  }
  return crumbs;
};

const getTree = (pages, path) => {
  let tip = pages;
  let href = "";

  for (let s of path.split("/")) {
    if (s === "") continue;

    let e = tip.find(e => e.path === s);
    if (e === undefined) break;

    href = href + "/" + e.path;
    if (path === href) return e.children;

    tip = e.children;
  }
  return null;
};

const getNavItems = (path, pages, level = 0, base = "") => {
  if (pages === undefined) return [];
  return Array.from(pages, e => {
    const to = base + (e.path && "/" + e.path);
    return [
      {
        ...e,
        to: to,
        level: e.level ? e.level : level,
        children: e.children && e.children.length,
      },
      ...getNavItems(path, e.children, level + 1, to),
    ];
  }).flat();
};

const DocsNavMenu = ({ path, pages }) => {
  const nav = getNavItems(path, pages);
  return (
    <ul className="docsnav">
      {nav.map(e => {
        const cls = classNames({
          ["level" + e.level]: true,
          active: path === e.to,
        });
        return (
          <li className={cls} key={e.to}>
            <MaybeNavLink if={e.link} to={e.to} exact>
              {e.menu} {e.children && <Icon name="angle down" />}
            </MaybeNavLink>
          </li>
        );
      })}
    </ul>
  );
};

DocsNavMenu.propTypes = {
  path: PropTypes.string,
  pages: PropTypes.array,
};

const DocsNavListItems = ({ base, level, pages }) => {
  if (pages === undefined) return null;
  return (
    <>
      {pages.map(e => {
        const to = base + (e.path && "/" + e.path);
        return (
          <List.Item key={to}>
            <List.Header>
              <MaybeNavLink if={e.link} to={to} exact>
                {e.menu}
              </MaybeNavLink>
            </List.Header>
            {e.description}
            {e.children && (
              <List.List>
                <DocsNavListItems
                  base={to}
                  level={level + 1}
                  pages={e.children}
                />
              </List.List>
            )}
          </List.Item>
        );
      })}
    </>
  );
};

DocsNavListItems.defaultProps = {
  base: "",
  level: 0,
};

export const DocsNavList = ({ from }) => {
  const tree = getTree(elns_docs, from);
  return (
    <List bulleted>
      <DocsNavListItems pages={tree} />
    </List>
  );
};

DocsNavList.defaultProps = {
  from: "/docs",
};

const DocsLayout = ({ children, path }) => (
  <Layout nav={<DocsNavMenu path={path} pages={elns_docs} />}>
    <Container text>
      <Breadcrumb
        icon="right angle"
        size="large"
        sections={getCrumbs(elns_docs, path)}
        style={{ marginTop: "1em" }}
      />
      {children}
    </Container>
  </Layout>
);

DocsLayout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string,
};

export default DocsLayout;

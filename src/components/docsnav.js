import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb, Icon, List } from "semantic-ui-react";
import classNames from "classnames";

import { Link } from "components/router";
import { MaybeLink } from "components/maybe";
import { elns_docs } from "components/nav";

const getCrumbs = (tree, path) => {
  let crumbs = [];
  let tip = tree;
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
      o.as = Link;
      o.to = href;
    }
    crumbs.push(o);
    tip = e.children;
  }
  return crumbs;
};

const getTree = (tree, path) => {
  let tip = tree;
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

const getNavItems = (tree, level = 0, base = "") => {
  if (tree === undefined) return [];
  return Array.from(tree, e => {
    const to = base + (e.path && "/" + e.path);
    return [
      {
        ...e,
        to: to,
        level: e.level ? e.level : level,
        children: e.children && e.children.length,
      },
      ...getNavItems(e.children, level + 1, to),
    ];
  }).flat();
};

const DocsListItems = props => {
  const { path, level, tree, noicons } = props;
  if (tree === undefined) return null;
  return (
    <>
      {tree.map(e => {
        const to = path + (e.path && "/" + e.path);
        return (
          <List.Item key={to}>
            {noicons ?? (
              <List.Icon name={e.children ? "angle down" : "angle right"} />
            )}
            <List.Content>
              <List.Header>
                <MaybeLink if={e.link} to={to} exact>
                  {e.title ?? e.menu}
                </MaybeLink>
              </List.Header>
              {e.description}
              {e.children && (
                <List.List>
                  <DocsListItems
                    {...props}
                    path={to}
                    level={level + 1}
                    tree={e.children}
                  />
                </List.List>
              )}
            </List.Content>
          </List.Item>
        );
      })}
    </>
  );
};

DocsListItems.defaultProps = {
  path: "",
  level: 0,
};

export const DocsList = props => (
  <List bulleted={props.noicons}>
    <DocsListItems {...props} tree={getTree(elns_docs, props.path)} />
  </List>
);

DocsList.propTypes = {
  path: PropTypes.string.isRequired,
};

DocsList.defaultProps = {
  path: "/docs",
};

export const DocsCrumbs = ({ path }) => (
  <Breadcrumb
    icon="right angle"
    size="large"
    sections={getCrumbs(elns_docs, path)}
    style={{ marginTop: "1em" }}
  />
);

DocsCrumbs.propTypes = {
  path: PropTypes.string,
};

export const DocsNav = ({ path, className }) => (
  <ul className={className}>
    {getNavItems(elns_docs).map(e => {
      const cls = classNames({
        ["level" + e.level]: true,
        active: path === e.to,
      });
      return (
        <li className={cls} key={e.to}>
          <Link to={e.to} exact>
            {e.menu} {e.children && <Icon name="angle down" />}
          </Link>
        </li>
      );
    })}
  </ul>
);

DocsNav.propTypes = {
  path: PropTypes.string,
  tree: PropTypes.array,
};

export default DocsNav;

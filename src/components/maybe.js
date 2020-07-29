import React from "react";

import { NavLink, Link } from "components/router";

export const MaybeLink = props => {
  return props.if ? <Link {...props}>{props.children}</Link> : props.children;
};

export const MaybeNavLink = props => {
  return props.if ? (
    <NavLink {...props}>{props.children}</NavLink>
  ) : (
    props.children
  );
};

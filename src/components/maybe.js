import React from "react";
import PropTypes from "prop-types";

import { Link } from "components/router";

export const MaybeLink = ({ cond, ...props }) => {
  return cond ? <Link {...props}>{props.children}</Link> : props.children;
};

MaybeLink.propTypes = {
  cond: PropTypes.bool.isRequired,
};


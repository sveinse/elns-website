import React from "react";
import { List as _List } from "semantic-ui-react";

export const List = _List;
export const LI = _List.Item;
export const LH = _List.Header;
export const LC = _List.Content;
export const LD = _List.Description;

export const MaybeListContent = props => {
  return props.if ? (
    <List.Content {...props}>{props.children}</List.Content>
  ) : (
    props.children
  );
};

export const Litem = ({ children, icon, color, header, lhas }) => (
  <List.Item>
    {icon && (
      <List.Icon name={icon} size="large" verticalAlign="top" color={color} />
    )}
    <MaybeListContent if={icon}>
      {header && <List.Header as={lhas}>{header}</List.Header>}
      {children}
    </MaybeListContent>
  </List.Item>
);

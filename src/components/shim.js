import React from "react";
import { List, Grid } from "semantic-ui-react";

export const LI = List.Item;
export const LH = List.Header;
export const LC = List.Content;
export const LD = List.Description;
export const GR = Grid.Row;
export const GC = Grid.Column;

export const MaybeListContent = props => {
  return props.if ? (
    <List.Content {...props}>{props.children}</List.Content>
  ) : (
    props.children
  );
};

export const Litem = ({ children, icon, color, header }) => (
  <List.Item>
    {icon && (
      <List.Icon name={icon} size="large" verticalAlign="top" color={color} />
    )}
    <MaybeListContent if={icon}>
      {header && <List.Header>{header}</List.Header>}
      {children}
    </MaybeListContent>
  </List.Item>
);

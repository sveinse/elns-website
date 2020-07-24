import React from "react";
import { List as _List, Grid } from "semantic-ui-react";

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

export const GridTwo = props => {
  const { width1, width2, child1, child2, children, ...gprops } = props;
  const children1 = child1 ?? children;
  const children2 = child2 ?? children;
  return (
    <Grid {...gprops}>
      <Grid.Row>
        <Grid.Column width={width1}>{children1}</Grid.Column>
        <Grid.Column width={width2}>{children2}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

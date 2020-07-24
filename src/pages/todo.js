import React from "react";
import { Header, Container } from "semantic-ui-react";

import { List, Litem, LI } from "../components/shim";
import Layout from "../components/layout";
import SEO from "../components/seo";

const TodoContents = () => (
  <Container text>
    <Header as="h1">Todo</Header>

    <List bulleted>
      <LI>Write about Windows sound systems</LI>
      <LI>Sample rate converting</LI>
      <LI>Add section "Info field" in ui</LI>
      <LI>Implement a two column flexbox for images</LI>
      <LI>Write use case 2 for page2</LI>
    </List>
  </Container>
);

const TodoPage = () => (
  <Layout>
    <SEO title="Todo" />
    <TodoContents />
  </Layout>
);

export default TodoPage;

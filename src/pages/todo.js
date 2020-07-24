import React from "react";
import { Header, List } from "semantic-ui-react";

import { Litem, LI } from "../components/shim";
import Layout from "../components/layout";
import SEO from "../components/seo";

const TodoPage = () => (
  <Layout>
    <SEO title="Todo" />

    <Header as="h1">Todo</Header>

    <List bulleted>
      <LI>Write about Windows sound systems</LI>
      <LI>Sample rate converting</LI>
      <LI>Add section "Info field" in ui</LI>
      <LI>Fix repeat icon in docs</LI>
      <LI>Add release date to release.json</LI>
    </List>
  </Layout>
);

export default TodoPage;

import React from "react";
import { Header, Segment } from "semantic-ui-react";

import DocsLayout, { DocsNavList } from "../components/docslayout";
import SEO from "../components/seo";

const DocsContents = () => (
  <>
    <Header as="h1">Welcome to ELNS Documentation</Header>

    <Header as="h4">
      This page contains the overview of the documentation for ELNS
    </Header>

    <Segment>
      <Header as="h3">Page navigation</Header>
      <DocsNavList path="/docs" />
    </Segment>
  </>
);

const DocsPage = () => (
  <DocsLayout path="/docs">
    <SEO title="Docs" />
    <DocsContents />
  </DocsLayout>
);

export default DocsPage;

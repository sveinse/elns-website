import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment } from "semantic-ui-react";

import DocsLayout, { DocsNavList } from "../components/docslayout";
import SEO from "../components/seo";

const DocsPage = () => (
  <DocsLayout path="/docs">
    <SEO title="Docs" />

    <Header as="h1">Welcome to ELNS Documentation</Header>

    <Header as="h4">
      This page contains the overview of the documentation for ELNS. Use the
      page navigation to find the page. First time users might like{" "}
      <Link to="/docs/start">getting started</Link> page. The{" "}
      <Link to="/docs/usage/ui">user interface</Link> page shows the programs
      function.
    </Header>

    <Segment>
      <Header as="h3">Page navigation</Header>
      <DocsNavList path="/docs" />
    </Segment>
  </DocsLayout>
);

export default DocsPage;

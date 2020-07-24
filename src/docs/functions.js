import React from "react";
import { Header, Segment } from "semantic-ui-react";

import DocsLayout, { DocsNavList } from "../components/docslayout";
import SEO from "../components/seo";

const FunctionsPage = () => (
  <DocsLayout path="/docs/functions">
    <SEO title="Docs" />

    <Header as="h1">Processing functions</Header>

    <p>
      ELNS supports a wide range of audio processing functions. Click on the
      links below to learn more about the specific functions.
    </p>

    <Segment>
      <Header as="h3">Page navigation</Header>
      <DocsNavList path="/docs/functions" noicons />
    </Segment>
  </DocsLayout>
);

export default FunctionsPage;

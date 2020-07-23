import React from "react";
import { Header, Segment } from "semantic-ui-react";

import DocsLayout, { DocsNavList } from "../components/docslayout";
import SEO from "../components/seo";

const UsageContents = () => (
  <>
    <Header as="h1">Usage and setup</Header>

    <p>
      These pages shows the ELNS user interface and how to use it. Click on the
      links below to learn more.
    </p>

    <Segment>
      <Header as="h3">Page navigation</Header>
      <DocsNavList path="/docs/usage" noicons />
    </Segment>
  </>
);

const UsagePage = () => (
  <DocsLayout path="/docs/usage">
    <SEO title="Docs" />
    <UsageContents />
  </DocsLayout>
);

export default UsagePage;

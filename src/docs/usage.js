import React from "react";
import { Header } from "semantic-ui-react";

import DocsLayout, { DocsNavList } from "../components/docslayout";
import SEO from "../components/seo";

const UsageContents = () => (
  <>
    <Header as="h1">ELNS Usage</Header>

    <DocsNavList from="/docs/usage" />
  </>
);

const UsagePage = () => (
  <DocsLayout path="/docs/usage">
    <SEO title="Docs" />
    <UsageContents />
  </DocsLayout>
);

export default UsagePage;

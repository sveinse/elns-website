import React from "react";
import { Header } from "semantic-ui-react";

import DocsLayout from "../../components/docslayout";
import SEO from "../../components/seo";

const WindowsContents = () => (
  <>
    <Header as="h1">Windows</Header>
  </>
);

const WindowsPage = () => (
  <DocsLayout path="/docs/usage/windows">
    <SEO title="Docs" />
    <WindowsContents />
  </DocsLayout>
);

export default WindowsPage;

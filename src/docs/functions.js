import React from "react";
import { Header } from "semantic-ui-react";

import DocsLayout, { DocsNavList } from "../components/docslayout";
import SEO from "../components/seo";

const FunctionsContents = () => (
  <>
    <Header as="h1">Functions</Header>

    <DocsNavList from="/docs/functions" />
  </>
);

const FunctionsPage = () => (
  <DocsLayout path="/docs/functions">
    <SEO title="Docs" />
    <FunctionsContents />
  </DocsLayout>
);

export default FunctionsPage;

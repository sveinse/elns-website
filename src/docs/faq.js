import React from "react";
import { Header } from "semantic-ui-react";

import DocsLayout from "../components/docslayout";
import SEO from "../components/seo";

const FaqContents = () => (
  <>
    <Header as="h1">Frequently asked questions</Header>
  </>
);

const FaqPage = () => (
  <DocsLayout path="/docs/faq">
    <SEO title="FAQ" />
    <FaqContents />
  </DocsLayout>
);

export default FaqPage;

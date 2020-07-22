import React from "react";
import { Header } from "semantic-ui-react";

import DocsLayout from "../components/docslayout";
import SEO from "../components/seo";

const StartContents = () => (
  <>
    <Header as="h1">Getting started</Header>
  </>
);

const StartPage = () => (
  <DocsLayout path="/docs/start">
    <SEO title="Docs" />
    <StartContents />
  </DocsLayout>
);

export default StartPage;

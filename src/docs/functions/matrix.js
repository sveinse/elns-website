import React from "react";
import { Header } from "semantic-ui-react";

import DocsLayout from "../../components/docslayout";
import SEO from "../../components/seo";

const MatrixContents = () => (
  <>
    <Header as="h1">Matrix mixer function</Header>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </>
);

const MatrixPage = () => (
  <DocsLayout path="/docs/functions/matrix">
    <SEO title="Docs" />
    <MatrixContents />
  </DocsLayout>
);

export default MatrixPage;
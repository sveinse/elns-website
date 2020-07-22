import React from "react";
import { Header } from "semantic-ui-react";

import DocsLayout from "../../components/docslayout";
import SEO from "../../components/seo";

export const pageInfo = {
  title: "Bit error function",
  description: `
  The bit error function demonstrates how audio is perceived when random error
  is injected into the audio stream.`,
};

const BiterrorContents = () => (
  <>
    <Header as="h1">Bit error function</Header>
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

const BiterrorPage = () => (
  <DocsLayout path="/docs/functions/biterror">
    <SEO title="Docs" />
    <BiterrorContents />
  </DocsLayout>
);

export default BiterrorPage;

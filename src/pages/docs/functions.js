import React from "react";
import { Header, Segment } from "semantic-ui-react";

import Layout from "components/layout";
import { DocsList } from "components/docsnav";
import SEO from "components/seo";

const FunctionsPage = () => (
  <Layout docs="/docs/functions">
    <SEO title="Docs" />

    <Header as="h1">Processing functions</Header>

    <p>
      ELNS supports a wide range of audio processing functions. Click on the
      links below to learn more about the specific functions.
    </p>

    <Segment>
      <Header as="h3">Page navigation</Header>
      <DocsList path="/docs/functions" noicons />
    </Segment>
  </Layout>
);

export default FunctionsPage;

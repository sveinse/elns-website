import React from "react";
import { Header, Segment } from "semantic-ui-react";

import Layout from "components/layout";
import { DocsList } from "components/docsnav";
import SEO from "components/seo";

const UsagePage = () => (
  <Layout docs="/docs/usage">
    <SEO title="Docs" />

    <Header as="h1">Usage and setup</Header>

    <p>
      These pages shows the ELNS user interface and how to use it. Click on the
      links below to learn more.
    </p>

    <Segment>
      <Header as="h3">Page navigation</Header>
      <DocsList path="/docs/usage" noicons />
    </Segment>
  </Layout>
);

export default UsagePage;

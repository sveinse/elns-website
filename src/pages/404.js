import React from "react";
import { Container, Header } from "semantic-ui-react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container text>
      <Header as="h2">NOT FOUND</Header>
      <p>The page doesn&#39;t exist.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;

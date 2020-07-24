import React from "react";
import { Header } from "semantic-ui-react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header as="h2">NOT FOUND</Header>
    <p>The page doesn&#39;t exist.</p>
  </Layout>
);

export default NotFoundPage;

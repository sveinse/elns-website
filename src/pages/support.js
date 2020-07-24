import React from "react";
import { Header, Button, Icon } from "semantic-ui-react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SupportPage = () => (
  <Layout>
    <SEO title="Support" />

    <Header as="h1">Support</Header>

    <p>
      Any problems, suggestions or general feedback can be added on the GitHub
      project pages
    </p>

    <Button as="a" href="https://github.com/sveinse/elns-release/issues">
      To GitHub
      <Icon name="arrow right" />
    </Button>
  </Layout>
);

export default SupportPage;

import React from "react";
import { Header, Container, Button, Icon, Segment } from "semantic-ui-react";

import DocsLayout from "../components/docslayout";
import SEO from "../components/seo";

const SupportContents = () => (
  <Container text>
    <Header as="h1">Support</Header>

    <p>
      Any problems, suggestions or general feedback can be added on the GitHub
      project pages
    </p>

    <Button as="a" href="https://github.com/sveinse/elns-release/issues">
      To GitHub
      <Icon name="arrow right" />
    </Button>
  </Container>
);

const SupportPage = () => (
  <DocsLayout path="/docs/support">
    <SEO title="Support" />
    <SupportContents />
  </DocsLayout>
);

export default SupportPage;

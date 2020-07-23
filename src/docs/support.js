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

    <Segment size="large" raised style={{ marginTop: "2em" }}>
      <Header as="h2">MacOS or Linux version?</Header>
      ELNS is currently only released for Windows. If you would like to use ELNS
      under MacOS or Linux, I would like to hear from you. Releasing for these
      OS are under consideration, but I'd like hear your use case and how you
      plan to use it. This info is needed for planning how and when ELNS shall
      be released for these OS. Please submit an issue on the Github project
      pages.
    </Segment>
  </Container>
);

const SupportPage = () => (
  <DocsLayout path="/docs/support">
    <SEO title="Support" />
    <SupportContents />
  </DocsLayout>
);

export default SupportPage;

import React from "react"
import { Header, Container, Button, Icon, Segment } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SupportContents = () => (
  <Container text>
    <p />
    <Header as="h1">Support</Header>
    Any problems, suggestions or general feedback can be added on the GitHub
    project pages
    <p />
    <Button as="a" href="https://github.com/sveinse/elns-release/issues">
      To GitHub
      <Icon name="arrow right" />
    </Button>
    <p />
    <p />
    <Segment size="large">
      <Header as="h2">MacOS or Linux version?</Header>
      ELNS is currently only released for Windows. If you would like to use ELNS
      under MacOS or Linux, I would like to hear from you. Releasing for these
      OS are under consideration, but I'd like hear your use case and how you
      plan to use it. This info is needed for planning how and when ELNS shall
      be released for these OS. Please submit an issue on the Github project
      pages.
    </Segment>
  </Container>
)

const SupportPage = () => (
  <Layout>
    <SEO title="Support" />
    <SupportContents />
  </Layout>
)

export default SupportPage

import React from "react"
import {
  Header,
  Container,
  Icon,
  Message,
  Image,
  Segment,
} from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SponsorContents = () => (
  <Container text>
    <p />

    <Header as="h1">
      Sponsor <Icon name="heart outline" color="purple" inverted />
    </Header>

    <Header as="h4">
      ELNS is free of charge. Developing a tool like this take countless hours
      of development. If you are appreciating the tool, please consider
      sponsoring the author. Donation will ensure the continued development of
      this tool.
    </Header>

    <p />

    <Segment size="big" style={{ display: "flex", verticalAlign: "middle" }}>
      <div
        style={{
          flexGrow: 1,
          alignItems: "center",
          display: "flex",
        }}
      >
        Donations can be made to Svein Seldal through PayPal.
      </div>
      <div style={{}}>
        <Image
          src="https://www.paypalobjects.com/en_US/NO/i/btn/btn_donateCC_LG.gif"
          as="a"
          href="https://paypal.me/sveinse"
        />
      </div>
    </Segment>

    <p />
  </Container>
)

const SponsorPage = () => (
  <Layout>
    <SEO title="Sponsor" />
    <SponsorContents />
  </Layout>
)

export default SponsorPage

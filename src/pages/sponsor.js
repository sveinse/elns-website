import React from "react";
import { Header, Icon, Image, Segment } from "semantic-ui-react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SponsorPage = () => (
  <Layout>
    <SEO title="Sponsor" />

    <Header as="h1">
      Sponsor <Icon name="heart outline" color="purple" inverted />
    </Header>

    <Header as="h4">
      ELNS is free of charge. Developing a tool like this take countless hours
      of development. If you are enjoying and appreciating the tool, please
      consider sponsoring the author. Donations will help to ensure the
      continued development of ELNS.
    </Header>

    <Segment
      size="big"
      raised
      style={{ display: "flex", verticalAlign: "middle", marginTop: "2em" }}
    >
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
  </Layout>
);

export default SponsorPage;

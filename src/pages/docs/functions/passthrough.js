import React from "react";
import { Header } from "semantic-ui-react";

import Layout from "components/layout";
import SEO from "components/seo";

import ui_passthrough from "images/func/passthrough.png";

const PassthroughPage = () => (
  <Layout docs="/docs/functions/passthrough">
    <SEO title="Docs" />

    <Header as="h1">Passthrough function</Header>

    <p>
      <svg viewBox="40 113 588 210" className="solid">
        <image href={ui_passthrough} />
      </svg>
    </p>

    <p>
      <strong>Passthrough</strong> accepts a number of input channels and sends
      the audio out on an equal amount of output channels without any
      processing. It is great to use for playback or recording, or for testing
      that the audio card IO is working properly.
    </p>
  </Layout>
);

export default PassthroughPage;

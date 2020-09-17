import React from "react";
import { Header, Icon, Message } from "semantic-ui-react";

import { Link } from "components/router";
import Layout from "components/layout";
import SEO from "components/seo";

import ui_matrix from "images/func/matrix.png";

const MatrixPage = () => (
  <Layout docs="/docs/functions/matrix">
    <SEO title="Docs" />

    <Header as="h1">Matrix mixer function</Header>

    <p>
      <svg viewBox="40 113 588 230" className="solid">
        <image href={ui_matrix} />
      </svg>
    </p>

    <p>
      The <strong>matrix mixer</strong> supports custom mapping and mixing of
      any input channels to any output channel. The typical use case is a mono
      or stero input mapped to a 8-channel (7.1) output, enabling sending the
      input audio any channel or speaker.
    </p>

    <p>
      The <strong>input channels</strong> are represented as rows and the{" "}
      <strong>output channels</strong> are represented as columns. An input and
      output is <em>connected</em> by clicking the box corresponding to the row
      and column for the input and output channel. The <strong>number</strong>{" "}
      in the box corresponds to the <strong>attenuation</strong> of that
      connection. The <strong>color</strong> represents the polarity.{" "}
      <strong>Green</strong> color indicates normal polarity, while{" "}
      <strong>red</strong> color signifies a 180&deg; phase shift. The phase is
      swapped by right-clicking the box.
    </p>

    <Message raised style={{ background: "#dddddd" }} icon>
      <Icon name="info" size="big" />
      <Message.Content>
        For stereo <em>left</em> is channel 1 and <em>right</em> is channel 2.
        In the screenshot above, input channel 1 (left) is sent to output
        channel 1 (left) at full volume, +0dB, and input channel 2 (right) is
        sent to output channel 2 (right). The full 8 channel assignments can be
        found in the{" "}
        <Link to="/docs/usage/windows#channels">channels assignments</Link>{" "}
        page.
      </Message.Content>
    </Message>

    <p>
      Any number of channels can be sent to any output channel. The matrix mixer
      will automatically reduce the output level to prevent overflow.
    </p>

    <p></p>
  </Layout>
);

export default MatrixPage;

import React from "react";
import { Header } from "semantic-ui-react";

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
      The <strong>matrix mixer</strong> supports mapping and mixing of any input
      channels to any output channel. The typical use case is a mono or stero
      input mapped to a 8-channel (7.1) output, enabling sending the input audio
      any channel.
    </p>

    <p>
      The <strong>input channels</strong> are represented as rows in the
      function window. The <strong>output channels</strong> are represented as
      columns. A input and output is <em>connected</em> by clicking the box
      corresponding to the input and output. The <strong>number</strong>{" "}
      corresponds to the <strong>attenuation</strong> of that connection.
    </p>

    <p>
      For stereo input <em>left</em> is channel 1, while <em>right</em> is
      channel 2.
    </p>
  </Layout>
);

export default MatrixPage;

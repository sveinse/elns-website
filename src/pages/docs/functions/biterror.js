import React from "react";
import { Header } from "semantic-ui-react";

import Layout from "components/layout";
import SEO from "components/seo";

import ui_biterror from "images/func/biterror.png";

const BiterrorPage = () => (
  <Layout docs="/docs/functions/biterror">
    <SEO title="Docs" />

    <Header as="h1">Bit error function</Header>

    <p>
      <svg viewBox="40 113 588 210" className="solid">
        <image href={ui_biterror} />
      </svg>
    </p>

    <p>
      The <strong>bit error</strong> is a demonstration of the audibility of
      injected random bit errors in audio.
    </p>

    <p>
      The <strong>bit error rate</strong> field sets the probability value.
      Lower number gives higher probability of errors. The number right of the
      field is the calculated probability. E.g. 1 ppm (parts per million)
      indicates that it on average injects one error bit per 1 million bits --
      for reference: stereo 44.1kHz 16-bit audio contains 1.4 million bits per
      second.
    </p>

    <p>
      The <strong>bit error type</strong> field specifies the value of the
      injected error. <code>Zero</code> and <code>One</code> injects only 0's or
      1's respectively, while <code>Random</code> injects a random value.
    </p>

    <p>
      The number located right of bit error type is the occurrence counter. It
      shows how many times any errors have been injected into the output audio.
    </p>

    <p></p>
  </Layout>
);

export default BiterrorPage;

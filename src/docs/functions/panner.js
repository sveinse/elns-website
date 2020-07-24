import React from "react";
import { Header, Image } from "semantic-ui-react";

import DocsLayout from "../../components/docslayout";
import SEO from "../../components/seo";

import ui_panner from "../../images/func/panner.png";

const PannerPage = () => (
  <DocsLayout path="/docs/functions/panner">
    <SEO title="Docs" />

    <Header as="h1">Panner function</Header>

    <p>
      <svg viewBox="40 113 602 550" className="solid">
        <image href={ui_panner} />
      </svg>
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </DocsLayout>
);

export default PannerPage;

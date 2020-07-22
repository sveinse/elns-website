import React from "react";
import { Link } from "react-router-dom";
import {
  Header,
  Image,
  Container,
  List,
  Segment,
  Button,
  Icon,
  Divider,
} from "semantic-ui-react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import matrixwindow from "../images/ui/ui_matrix_center.png";

const CaseHeader = ({ title, children }) => (
  <>
    <Divider horizontal style={{ marginTop: "3rem" }}>
      {" "}
      <Header as="h3" color="purple" style={{ textTransform: "uppercase" }}>
        {title}
      </Header>
    </Divider>
    <Header as="h3">{children}</Header>
  </>
);

const Case1 = () => (
  <>
    <CaseHeader title="Case 1">Playing audio into center channel</CaseHeader>
    <p>
      <Image src={matrixwindow} />
    </p>
    <p>
      In home cinemas the center channel often has different character and
      timbre than the main LR fronts. With full 5.1 or 7.1 program material it
      can be difficult to isolate the center channel to determine how well it
      integrates with the fronts.
    </p>
    <p>
      The{" "}
      <Link to="/docs/functions/matrixmixer">
        <strong>Matrix Mixer</strong>
      </Link>{" "}
      function allows routing audio to specific to the center channel in a
      8-channel (7.1) setup over HDMI. The <strong>Matrix Mixer</strong> allows
      sending any audio to any channel, including the surrounds by interactively
      changing the routing in the user interface.
    </p>
  </>
);

const Case2 = () => (
  <>
    <CaseHeader title="Case 2">Something else</CaseHeader>
  </>
);

const Page2Contents = () => (
  <>
    <Container text>
      <Header as="h1">Use cases</Header>
      <Segment size="large" raised>
        ELNS is a tool for processing multi-channel audio, supporting
        interactive adjustment during processing. It processes live audio to or
        from a sound card or file in real-time.
      </Segment>
      <Case1 />
      <Case2 />
    </Container>
  </>
);

const Page2Page = () => (
  <Layout>
    <SEO title="Demo" />
    <Page2Contents />
  </Layout>
);

export default Page2Page;

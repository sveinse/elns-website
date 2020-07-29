import React from "react";
import {
  Header,
  Image,
  Segment,
  Divider,
  Button,
  Icon,
  Grid,
} from "semantic-ui-react";

import { Link } from "components/router";
import { GR, GC } from "components/shim";
import Layout from "components/layout";
import SEO from "components/seo";

import ui_matrix from "images/func/matrix_8_c.png";
import ui_panner from "images/func/panner_move.gif";

const CaseHeader = ({ title, children }) => (
  <>
    <Divider horizontal style={{ marginTop: "3rem" }}>
      {" "}
      <Header as="h3" color="purple" style={{ textTransform: "uppercase" }}>
        {title}
      </Header>
    </Divider>
    <Header as="h2">{children}</Header>
  </>
);

const Case1 = () => (
  <>
    <CaseHeader title="Case 1">Playing audio into center channel</CaseHeader>
    <p>
      <Image src={ui_matrix} fluid />
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
    <CaseHeader title="Case 2">Testing speaker consistency</CaseHeader>
    <p>
      <Image src={ui_panner} fluid />
    </p>
    <p>
      The{" "}
      <Link to="/docs/functions/panner">
        <strong>Panner</strong>
      </Link>{" "}
      allows <em>moving</em> input audio playback to a multi channel output
      following a smooth motion. The animation shows panning of the sound from
      the <em>center</em> to <em>L+R</em> main speakers to the <em>surround</em>{" "}
      channels in a smooth transition. This allows evaluating the consistency of
      the speakers in a cinema setup. &mdash; Everything done live and
      interactively.
    </p>
  </>
);

const Page2Page = () => (
  <Layout>
    <SEO title="Demo" />

    <Header as="h1">Use cases</Header>

    <Segment size="large" raised>
      <Grid verticalAlign="middle" stackable>
        <GR>
          <GC className="grow">
            ELNS is a tool for processing multi-channel audio, supporting
            interactive adjustment during processing. It processes live audio to
            or from a sound card or file in real-time.
          </GC>
          <GC className="fit">
            <Button as={Link} color="blue" to="/docs/start">
              Get started
              <Icon name="right arrow" />
            </Button>
          </GC>
        </GR>
      </Grid>
    </Segment>

    <Case1 />
    <Case2 />
  </Layout>
);

export default Page2Page;

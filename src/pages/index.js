import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Segment,
  Grid,
  Button,
  Header,
  Container,
  Icon,
} from "semantic-ui-react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Banner = ({ mobile }) => {
  return (
    <Segment inverted vertical className="banner image">
      <Container textAlign="center">
        <Header
          as="h1"
          inverted
          style={{
            fontSize: mobile ? "50px" : "80px",
          }}
        >
          ELNS
        </Header>
        <Header as="h2" inverted>
          Experiment.&nbsp;&nbsp;Learn.&nbsp; Nifty.&nbsp;&nbsp;Simple.
        </Header>
        <Button size="huge" primary as={Link} to="/page2">
          Show me
          <Icon name="arrow right" />
        </Button>
      </Container>
    </Segment>
  );
};

Banner.propTypes = {
  mobile: PropTypes.bool,
};

const Presentation = () => (
  <Segment vertical className="frontpage solid">
    <Grid columns="equal" stackable>
      <Grid.Row>
        <Grid.Column>
          <Header as="h3">Audio tool</Header>
          <p>
            ELNS is a tool for processing multi-channel audio, supporting
            interactive adjustment during processing. It processes live audio to
            or from a sound card or file in real-time.
          </p>
        </Grid.Column>
        <Grid.Column>
          <Header as="h3">DSP Functions</Header>
          <p>
            The tool comes with a set of audio processing functions, each
            purposefully written to test or demonstrate a specific feature. The
            DSP engine support a wide range of samplerates and resolutions.
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Button size="huge" as={Link} to="/features">
            Get started
            <Icon name="right arrow" />
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

const IndexPage = () => (
  <Layout banner={<Banner />} notext>
    <SEO title="Home" />
    <Presentation />
  </Layout>
);

export default IndexPage;

import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import {
  Segment,
  Grid,
  Button,
  Header,
  Image,
  Container,
  Icon,
} from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import mainwindow from "../images/mainwindow.png"

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
        <Button size="huge" primary as={Link} to="/features">
          Get started
          <Icon name="arrow right" />
        </Button>
      </Container>
    </Segment>
  )
}

Banner.propTypes = {
  mobile: PropTypes.bool,
}

const PresentationContents = () => (
  <>
    <Header as="h3">Audio tool</Header>
    <p>
      ELNS is a simple tool for processing multi-channel audio with interactive
      adjustment of audio parameters. It processes live audio to or from a sound
      card or file in real-time.
    </p>
    <Header as="h3">DSP Functions</Header>
    <p>
      The tool comes with a set of audio processing functions, each purpusefully
      written to test or demonstrate a specific feature. The DSP engine support
      a wide range samplerates and resolutions, including high-res.
    </p>
  </>
)

const Presentation = () => (
  <Segment vertical className="frontpage">
    <Grid stackable verticalAlign="middle" container reversed="computer tablet">
      <Grid.Row>
        <Grid.Column width={9} floated="right">
          <Image src={mainwindow} size="huge" bordered />
        </Grid.Column>

        <Grid.Column width={7}>
          <PresentationContents />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Button size="huge" as={Link} to="/features">
            Read more
            <Icon name="right arrow" />
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

const IndexPage = () => (
  <Layout banner={<Banner />}>
    <SEO title="Home" />
    <Presentation />
  </Layout>
)

export default IndexPage

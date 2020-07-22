import React from "react";
import { Link } from "react-router-dom";
import { Header, Image, Container } from "semantic-ui-react";

import { List, Litem, LI } from "../components/shim";
import { DocsNavList } from "../components/docslayout";
import Layout from "../components/layout";
import SEO from "../components/seo";
import mainwindow from "../images/ui/ui_main.png";

const Features = () => (
  <>
    <Header as="h2">Features</Header>

    <List bulleted>
      <LI>
        Selectable processing audio functions, each built for a specific purpose
        or demonstration.
      </LI>
      <LI>
        Reads and writes a wide range of file formats, including lossless
        formats such as <em>flac</em>
      </LI>
      <LI>Full-duplex sound card input and output</LI>
      <LI>Interactive real-time adjustment of parameters</LI>
      <LI>Supports multi-channel audio, up to 8 channels</LI>
      <LI>
        Supports high sample rates and process audio in high bit resolutions, up
        to 32-bits per sample
      </LI>
    </List>
  </>
);

const Functions = () => (
  <>
    <Header as="h2">Functions</Header>

    <p>
      The main functionality of ELNS comes from the functions. Each function
      presents a separate featureset and functionality of audio processing.
    </p>

    <DocsNavList from="/docs/functions" />
  </>
);

const Purpose = () => (
  <>
    <Header as="h2">Purpose</Header>
    <p>
      This tool exists as a result of needing a simple platform for testing and
      experimenting with audio processing. When working with audio systems such
      as home cinema installations, it is great to have a tool to test or
      showcase specific details of the system. Examples include the{" "}
      <Link to="/docs/functions/matrix">Matrix mixer</Link> which allows routing
      to the center channel, or the{" "}
      <Link to="/docs/functions/panner">Panner</Link> that can be used to pan
      audio to the rear channels to test setup and speker consistency.
    </p>
  </>
);

const Technology = () => (
  <>
    <Header as="h2">Technology</Header>
    <List bulleted>
      <LI>
        ELNS is written in <a href="https://python.org">Python 3</a>
      </LI>
      <LI>UI is implemented in Tk</LI>
      <LI>
        <a href="https://scipy.org">SciPy and NumPy</a> for numerical processing
      </LI>
      <LI>
        <a href="https://portaudio.com">Portaudio</a> and{" "}
        <a href="http://people.csail.mit.edu/hubert/pyaudio/">pyAudio</a> for
        audio interface
      </LI>
      <LI>
        <a href="http://www.mega-nerd.com/libsndfile/">libsndfile</a> and{" "}
        <a href="https://forge-2.ircam.fr/roebel/pysndfile">pysndfile</a> for
        audio file IO
      </LI>
    </List>
  </>
);

const FeatureContents = () => (
  <Container text>
    <Header as="h1">Introduction</Header>
    <Image src={mainwindow} />

    <Features />
    <Functions />
    <Purpose />
    <Technology />
  </Container>
);

const FeaturePage = () => (
  <Layout>
    <SEO title="Features" />
    <FeatureContents />
  </Layout>
);

export default FeaturePage;

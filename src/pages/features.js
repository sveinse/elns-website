import React from "react"
import { Link } from "react-router-dom"
import { Header, Image, Container, List } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import mainwindow from "../images/mainwindow.png"

const FeatureContents = () => (
  <Container text>
    <p />
    <Header as="h1">Introduction</Header>
    <Header as="h4">
      ELNS is a tool for processing multi-channel audio, supporting interactive
      adjustment during processing. It processes live audio to or from a sound
      card or file in real-time.
    </Header>
    <Image src={mainwindow} className="dropshadow" />
    <Header as="h2">Features</Header>
    <ul>
      <li>
        Selectable processing audio functions, each built for a specific purpose
        or demonstration. See below.
      </li>
      <li>
        Reads and writes a wide range of file formats, including lossless
        formats such as <em>flac</em>
      </li>
      <li>Full-duplex sound card input and output</li>
      <li>Interactive real-time adjustment of parameters</li>
      <li>Supports multi-channel audio, up to 8 channels</li>
      <li>
        Supports high sample rates and process audio in high bit resolutions, up
        to 32-bits per sample
      </li>
    </ul>
    <Header as="h2">Functions</Header>
    The usefulness of ELNS comes from the functions. Each function presents a
    separate featureset and functionality of audio processing.
    <List bulleted>
      <List.Item>
        <List.Header>
          <Link to="/docs/functions/passthrough">Passthrough</Link>
        </List.Header>
        A do-nothing function. Useful to test audio input and output or to
        record or playback an audio file.
      </List.Item>
      <List.Item>
        <List.Header>
          <Link to="/docs/functions/matrix">Matrix mixer</Link>
        </List.Header>
        A function that allows free routing and mixing from any input to any
        output. It can be used to send audio to the center or rear channels in a
        home theater.
      </List.Item>
      <List.Item>
        <List.Header>
          <Link to="/docs/functions/panner">Panner</Link>
        </List.Header>
        A functions that can interactively pan audio in a multi channel setup.
        It enables smooth "3D" movement of audio in a multichannel setup which
        is great for testing speaker consistency.
      </List.Item>
      <List.Item>
        <List.Header>
          <Link to="/docs/functions/quantizer">Quantizer</Link>
        </List.Header>
        This function demostrates the audible effects of bit quantization and
        dithering. It support setting the number of bits in audio and the result
        is heard immediately.
      </List.Item>
      <List.Item>
        <List.Header>
          <Link to="/docs/functions/biterror">Bit error</Link>
        </List.Header>
        This function shows the audible effect if random bits are introduced in
        the audio stream.
      </List.Item>
    </List>
    <Header as="h2">Purpose</Header>
    <p>
      This tool exists as a result of needing a simple platform for testing and
      experimenting audio processing. When working with audio systems it is
      great to showcase or test a specific effect, e.g. the Matrix mixer which
      allows routing audio to the center channel in a home cinema. When working
      with system installations, the tool can be used for aiding the setup
      process. E.g. the Panner can be used to pan audio to the rear channels in
      a multi-channel setup to test setup consistency.
    </p>
    <Header as="h2">Technology</Header>
    <ul>
      <li>
        ELNS is written in <a href="https://python.org">Python 3</a>
      </li>
      <li>UI is implemented in Tk</li>
      <li>
        <a href="https://scipy.org">SciPy and NumPy</a> for numerical processing
      </li>
      <li>
        <a href="https://portaudio.com">Portaudio</a> and{" "}
        <a href="http://people.csail.mit.edu/hubert/pyaudio/">pyAudio</a> for
        audio interface
      </li>
      <li>
        <a href="http://www.mega-nerd.com/libsndfile/">libsndfile</a>
        and
        <a href="https://forge-2.ircam.fr/roebel/pysndfile">pysndfile</a>
        for audio file IO
      </li>
    </ul>
    <p />
  </Container>
)

const FeaturePage = () => (
  <Layout>
    <SEO title="Features" />
    <FeatureContents />
  </Layout>
)

export default FeaturePage

import React from "react"
import { Header, Image, Container } from 'semantic-ui-react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import mainwindow from '../images/mainwindow.png'


const FeatureContents = () => (
<Container text >

<p />
<Header as="h1">Introduction</Header>

<Header as='h4'>
ELNS is a simple tool for processing multi-channel audio with interactive
adjustment of audio parameters.
It processes live audio to or from a sound card or file in real-time.
</Header>

<Header as="h2">Features</Header>

<ul>
  <li>Selectable processing functions, each built for a specific purpose or demonstration.</li>
  <li>Reads and writes a wide range of file formats, including
      lossless format such as <em>flac</em></li>
  <li>Full-duplex sound card input and output (where supported)</li>
  <li>Interactive real-time adjustment of parameters</li>
  <li>Supports multi-channel audio, up to 8 channels</li>
  <li>Supports high sample rates</li>
  <li>Process audio in high bit resolutions, up to 32-bits per sample</li>
</ul>

<Image src={mainwindow} huge className="dropshadow" />

<Header as="h2">Purpose</Header>

<p>
  This tool exists because a simple platform for testing and experimenting audio
  processing was needed. When working with audio systems
  it is great to showcase or test a specific effect, e.g. the
  Quantizer which shows the practical audible effects of quantization.
  When working with system installations, the tool can be used for aiding
  the setup process. E.g. the Panner can be used to pan audio to the rear
  channels in a multi-channel setup to test setup consistency.
</p>

<Header as="h2">Technology</Header>

<p>
  ELNS is written in <a href="https://python.org">Python 3</a> for its
  flexibility when prototyping new concepts.
  <a href="https://scipy.org">SciPy and NumPy</a>
  is used for the numerical processing and algorithms.
  <a href="https://portaudio.com">Portaudio</a>
  and
  <a href="http://people.csail.mit.edu/hubert/pyaudio/">pyAudio</a>
  for sound card interface.
  <a href="http://www.mega-nerd.com/libsndfile/">libsndfile</a>
  and
  <a href="https://forge-2.ircam.fr/roebel/pysndfile">pysndfile</a>
  provides the audio file interfaces.
</p>

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

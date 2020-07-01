import React from "react"
import { Header } from "semantic-ui-react"

import DocsLayout, { DocsHeader } from "../../components/docslayout"
import SEO from "../../components/seo"

export const QuantizerIntro = () => (
  <DocsHeader to="/docs/functions/quantizer" title="Quantizer function">
    This function demostrates how bit quantization sounds like. It allow setting
    an arbitrary number of bits to quantize the audio.
  </DocsHeader>
)

const QuantizerContents = () => (
  <>
    <Header as="h1">Quantizer function</Header>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <p />
  </>
)

const QuantizerPage = () => (
  <DocsLayout path="/docs/functions/quantizer">
    <SEO title="Docs" />
    <QuantizerContents />
  </DocsLayout>
)

export default QuantizerPage

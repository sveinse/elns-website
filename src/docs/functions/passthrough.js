import React from "react"
import { Header } from "semantic-ui-react"

import DocsLayout, { DocsHeader } from "../../components/docslayout"
import SEO from "../../components/seo"

export const PassthroughIntro = () => (
  <DocsHeader to="/docs/functions/passthrough" title="Passthrough function">
    This function is the simplest function and it does not do anything with the
    audio. It simply pass the incoming audio and sends it straight out one to
    one on the output.
  </DocsHeader>
)

const PassthroughContents = () => (
  <>
    <Header as="h1">Passthrough function</Header>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <p />
  </>
)

const PassthroughPage = () => (
  <DocsLayout path="/docs/functions/passthrough">
    <SEO title="Docs" />
    <PassthroughContents />
  </DocsLayout>
)

export default PassthroughPage

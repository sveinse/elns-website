import React from "react"
import { Header } from "semantic-ui-react"

import DocsLayout, { DocsHeader } from "../../components/docslayout"
import SEO from "../../components/seo"

export const WindowsIntro = () => (
  <DocsHeader to="/docs/usage/windows" title="Windows">
    This page shows shows how to setup Windows to work with multi-channel audio
    with ELNS.
  </DocsHeader>
)

const WindowsContents = () => (
  <>
    <Header as="h1">Windows</Header>

    <p />
  </>
)

const WindowsPage = () => (
  <DocsLayout path="/docs/usage/windows">
    <SEO title="Docs" />
    <WindowsContents />
  </DocsLayout>
)

export default WindowsPage

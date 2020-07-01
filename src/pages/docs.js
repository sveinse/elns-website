import React from "react"
import { Header } from "semantic-ui-react"

import DocsLayout from "../components/docslayout"
import SEO from "../components/seo"

import { UsageIntro } from "../docs/usage"
import { FunctionsIntro } from "../docs/functions"

const DocsContents = () => (
  <>
    <Header as="h1">Documentation</Header>

    <Header as="h4">
      This page contains the overview of the documentation for ELNS
    </Header>

    <UsageIntro />
    <FunctionsIntro />

    <p />
  </>
)

const DocsPage = () => (
  <DocsLayout path="/docs">
    <SEO title="Docs" />
    <DocsContents />
  </DocsLayout>
)

export default DocsPage

import React from "react"
import { Header } from "semantic-ui-react"

import DocsLayout, { DocsHeader } from "../components/docslayout"
import SEO from "../components/seo"

import { UIIntro } from "./usage/ui"
import { WindowsIntro } from "./usage/windows"

export const UsageIntro = () => (
  <DocsHeader to="/docs/usage" title="Usage">
    The basic usage of the application is shown on these pages.
  </DocsHeader>
)

const UsageContents = () => (
  <>
    <Header as="h1">ELNS Usage</Header>

    <UIIntro />
    <WindowsIntro />

    <p />
  </>
)

const UsagePage = () => (
  <DocsLayout path="/docs/usage">
    <SEO title="Docs" />
    <UsageContents />
  </DocsLayout>
)

export default UsagePage

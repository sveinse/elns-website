import React from "react"
import { Header } from "semantic-ui-react"

import DocsLayout, { DocsHeader } from "../components/docslayout"
import SEO from "../components/seo"

import { PassthroughIntro } from "./functions/passthrough"
import { MatrixIntro } from "./functions/matrix"
import { PannerIntro } from "./functions/panner"
import { QuantizerIntro } from "./functions/quantizer"
import { BiterrorIntro } from "./functions/biterror"

export const FunctionsIntro = () => (
  <DocsHeader to="docs/functions" title="Functions">
    The documentation of the functions in ELNS is documented here.
  </DocsHeader>
)

const FunctionsContents = () => (
  <>
    <Header as="h1">Functions</Header>

    <PassthroughIntro />
    <MatrixIntro />
    <PannerIntro />
    <QuantizerIntro />
    <BiterrorIntro />

    <p />
  </>
)

const FunctionsPage = () => (
  <DocsLayout path="/docs/functions">
    <SEO title="Docs" />
    <FunctionsContents />
  </DocsLayout>
)

export default FunctionsPage

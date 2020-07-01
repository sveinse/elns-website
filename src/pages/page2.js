import React from "react"
import { Link } from "react-router-dom"
import { Header, Image, Container, List } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import mainwindow from "../images/mainwindow.png"

const Page2Contents = () => (
  <Container text>
    <p />
    <Header as="h1">Show case</Header>
    <Header as="h4">
      ELNS is a tool for processing multi-channel audio, supporting interactive
      adjustment during processing. It processes live audio to or from a sound
      card or file in real-time.
    </Header>
    <Image src={mainwindow} className="dropshadow" />
    <p />
  </Container>
)

const Page2Page = () => (
  <Layout>
    <SEO title="Demo" />
    <Page2Contents />
  </Layout>
)

export default Page2Page

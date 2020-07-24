import React from "react";
import { Header, Divider, Button, Icon } from "semantic-ui-react";

import DocsLayout from "../components/docslayout";
import SEO from "../components/seo";

const Faq = ({ title, children }) => (
  <div>
    <Header as="h2">{title}</Header>
    <p>{children}</p>
    <Divider />
  </div>
);

const FaqPage = () => (
  <DocsLayout path="/docs/faq">
    <SEO title="FAQ" />

    <Header as="h1">Frequently asked questions</Header>

    <Header as="h4" style={{ marginBottom: "3em" }}>
      This page contains questions and answers. If there is anything questions
      that you might have, please submit an issue on the{" "}
      <a href="https://github.com/sveinse/elns-release/issues">
        GitHub project issue pages
      </a>
    </Header>

    <Divider />

    <Faq title="Is there a MacOS or Linux version?">
      ELNS is currently only released for Windows. If you would like to use ELNS
      under MacOS or Linux, I would like to hear from you. Please submit an
      issue on the{" "}
      <a href="https://github.com/sveinse/elns-release/issues">
        GitHub project issue pages
      </a>
      . Supporting more platforms is under consideration. Releasing and
      supporting more platforms takes efforts and I would like to have an
      understanding of the demand.
    </Faq>

    {/*
    - Why not mp3
    - Windows sound systems
    */}
  </DocsLayout>
);

export default FaqPage;

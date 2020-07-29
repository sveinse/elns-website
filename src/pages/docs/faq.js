import React from "react";
import { Header, Divider } from "semantic-ui-react";

import Layout from "components/layout";
import SEO from "components/seo";

const Faq = ({ title, id, children }) => (
  <div>
    <Header as="h2" id={id}>
      {title}
    </Header>
    <p>{children}</p>
    <Divider />
  </div>
);

const FaqPage = () => (
  <Layout docs="/docs/faq">
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

    <Faq id="01" title="Is there a MacOS or Linux version?">
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

    <Faq
      id="02"
      title="What is the full list of audio formats supported by ELNS?"
    >
      ELNS supports a wide range of audio formats thanks to the library{" "}
      <a href="http://www.mega-nerd.com/libsndfile/">
        <code>libsndfile</code>
      </a>
      . Check out the link to see the full list of all formats it supports.
    </Faq>

    <Faq id="03" title="Why doesn't ELNS support mp3 files?">
      The main reason is that the library{" "}
      <a href="http://www.mega-nerd.com/libsndfile/">
        <code>libsndfile</code>
      </a>{" "}
      currently does not support mp3. The historic reason is that mp3 was
      convered by a patent that could not be used in a open source library.
    </Faq>

    {/*
    - Windows sound systems
    */}
  </Layout>
);

export default FaqPage;

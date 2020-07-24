import React from "react";
import { Link } from "react-router-dom";
import { Header, Image, Icon, Button, Grid, Segment } from "semantic-ui-react";

import DocsLayout from "../components/docslayout";
import SEO from "../components/seo";
import { GR, GC } from "../components/shim";

import ui_analytics from "../images/ui/ui_analytics.png";
import ui_main_first from "../images/ui/ui_main_first.png";
import ui_matrix from "../images/func/matrix.png";
import ui_select_sounddevice from "../images/ui/ui_select_sounddevice.png";

const StartPage = () => (
  <DocsLayout path="/docs/start">
    <SEO title="Docs" />

    <Header as="h1">Getting started</Header>

    <Header as="h4">
      This page describes how to make the first steps with ELNS.
    </Header>

    <Header as="h2">Downloading</Header>

    <p>
      ELNS can be downloaded here{" "}
      <Button as={Link} to="/download">
        Download
        <Icon name="arrow right" />
      </Button>
    </p>

    <p>
      ELNS is released in two variants: <strong>Standalone</strong> and{" "}
      <strong>Setup</strong>. The standalone variant can be run directly without
      being installed while the setup variant is for installing ELNS on the
      computer. The installed program will start faster than the standalone,
      while the standalone is portable and can easily be moved used on other
      computers without installation.
    </p>

    <Header as="h2">Configuring Windows</Header>

    <p>
      To utilize ELNS with full 8 channel audio output over HDMI, the HDMI sound
      device must be configured. The procedure of how to configure the device is
      described in the <Link to="/docs/usage/windows">Windows setup</Link> page.
    </p>

    <Header as="h2">Analytics</Header>

    <Grid stackable reversed="computer tablet">
      <GR>
        <GC className="fit">
          <Image src={ui_analytics} />
        </GC>
        <GC className="grow">
          When ELNS is run for the first time, it will inform that ELNS is
          collecting anonymous usage data. This can be disabled by opening{" "}
          <Link to="/docs/usage/settings">settings dialog</Link> by pressing the{" "}
          <Icon name="cog" /> button on the main window toolbar.
        </GC>
      </GR>
    </Grid>

    <Header as="h2">Running ELNS</Header>

    <p>
      Starting ELNS for the first time shows a main window without any
      configuration.
    </p>

    <p>
      <Image src={ui_main_first} fluid />
    </p>

    <p>
      The red color indicates that configuration is missing. Start by selecing
      an <strong>Audio device</strong>. In the list of sound devices, the name
      in [brackets] indicates the audio system. The suffix "
      <em>(in=0 out=8)</em>" on each entry indicates the number of maximum input
      and output channels that device supports.
    </p>

    <Segment raised style={{ background: "#dddddd" }}>
      <Icon name="info" size="big" />
      Learn more about the <Link to="/docs/usage/ui">user interface</Link>
    </Segment>

    <p>
      Please select a sound device with at least <strong>2 output</strong>{" "}
      channels using the <strong>[Windows DirectSound]</strong> sound system.
    </p>

    <p>
      <Image src={ui_select_sounddevice} fluid />
    </p>

    <p>
      Press <strong>Open...</strong> and select a suitable audio file for
      playback. Please note that ELNS does not support <em>mp3</em> files.
    </p>

    <p>
      Finally select a processing function <strong>Matrix mixer</strong>. This
      should result in a window with green colors in the . The bottom right
      status icon <Icon name="check circle" color="green" /> indicates that the
      configuration is successful and ready for processing.
    </p>

    <p>
      <Image src={ui_matrix} fluid />
    </p>

    <p>
      The center area of the window contains the interface for the selected
      function. With the selected <em>Matrix mixer</em> function, the interface
      allows settings which input is sent to which output. Use the left mouse
      button to select/deselect routing. A green box indicates that the selected
      input channel number (the rows on the left side) is connected to the
      selected output channel number (the columns on top).
    </p>

    <p>
      The number in the green box indicates that the input is sent +0.0dB into
      the output, which is fully on. A negative value indicates attenuation in
      dB and it can be adjusted using the mouse wheel. A right click on the
      mouse will swap the phase of the signal and is indicated by a red color.
    </p>

    <Segment raised style={{ background: "#dddddd" }}>
      <Icon name="info" size="big" />
      Learn more about the{" "}
      <Link to="/docs/functions/matrix">matrix mixer function</Link>
    </Segment>

    <p>
      The processing can be started by pressing the <Icon name="play" /> icon,
      which will play the file to on the selected sound device. Any of these
      parameters can be adjusted while processing is running.
    </p>

    <Header as="h2">Next steps</Header>

    <p>
      In this walkthrough the Matrix mixer was used. ELNS supports other
      functions. Please go to the{" "}
      <Link to="/docs/functions">functions page</Link> for an overview.
    </p>

    <Segment raised style={{ background: "#dddddd" }}>
      <Icon name="info" size="big" />
      Go to the <Link to="/docs">documentation</Link>
    </Segment>
  </DocsLayout>
);

export default StartPage;

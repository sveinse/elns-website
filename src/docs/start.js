import React from "react";
import { Link } from "react-router-dom";
import { Header, Image, Icon, Button, Grid } from "semantic-ui-react";

import DocsLayout from "../components/docslayout";
import SEO from "../components/seo";
import { GR, GC } from "../components/shim";

import ui_analytics from "../images/ui/ui_analytics.png";
import ui_main_first from "../images/ui/ui_main_first.png";
import ui_passthrough from "../images/func/passthrough.png";
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
      while the standalone can easily be moved used on other computers without
      installation.
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

    <Header as="h2">Setup</Header>

    <p>
      <Image src={ui_main_first} fluid />
    </p>

    <p>
      Starting ELNS for the first time shows a main window without any
      configuration. The <Link to="/docs/ui">user interface</Link> page explains
      in detail the user interface.
    </p>

    <p>
      The red color indicates that configuration is missing. Start by selecing
      an <strong>Audio device</strong>. In the list of sound devices, the name
      in [brackets] indicates the audio system. The suffix "
      <em>(in=0 out=8)</em>" on each entry indicates the number of maximum input
      and output channels that device supports.
    </p>

    <p>
      Please select a sound device with at least <strong>2 output</strong>{" "}
      channels using <strong>[Windows DirectSound]</strong> sound system.
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
      configuration is successful.
    </p>

    <p>
      <Image src={ui_matrix} fluid />
    </p>

    <p>
      The main area of the window contains the interface for the selected
      function. With the selected <em>Matrix mixer</em> function, the interface
      allows settings which input is sent to which output with the green
      selections. These settings including the audio control buttons on the
      right side can be operated during processing.
    </p>

    <p>
      The processing can be started by pressing the <Icon name="play" /> icon,
      which will play the file to on the selected sound device.
    </p>

    <p>
      More information about the user interface can be found in the{" "}
      <Link to="/docs/usage/ui">user interface</Link> documentation.
      Documentation about the functions can be found in the{" "}
      <Link to="/docs/functions">functions</Link> documentation.
    </p>
  </DocsLayout>
);

export default StartPage;

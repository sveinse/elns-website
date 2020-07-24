import React from "react";
import { Header, Placeholder, Image, Segment, Grid } from "semantic-ui-react";

import DocsLayout from "../../components/docslayout";
import SEO from "../../components/seo";

import win_sound_settings from "../../images/win/win_sound_settings_mark.png";
import win_playback_devices_configure from "../../images/win/win_playback_devices_configure.png";
import win_playback_devices_properties from "../../images/win/win_playback_devices_properties.png";
import win_speaker_w1 from "../../images/win/win_speaker_w1_mark.png";
import win_speaker_w2 from "../../images/win/win_speaker_w2_mark.png";
import win_speaker_w3 from "../../images/win/win_speaker_w3_mark.png";
import win_speaker_w4 from "../../images/win/win_speaker_w4.png";
import win_device_format from "../../images/win/win_device_format.png";
import win_device_enhancements from "../../images/win/win_device_enhancements_mark.png";

const WindowsPage = () => (
  <DocsLayout path="/docs/usage/windows">
    <SEO title="Docs" />

    <Header as="h1">Windows setup</Header>

    <Header as="h4">
      This page explains how to set up Windows 10 for multi-channel output on
      HDMI.
    </Header>

    <p>
      Windows supports up to 8 channel audio (<em>7.1</em>) over HDMI. To be
      able to use ELNS fully, the HDMI output must be configured.
    </p>

    <Header as="h2">1. Open legacy sound control panel</Header>
    <p>
      Open <strong>Settings -> Sound -> Sound Control Panel</strong>. The Sound
      Control Panel is located under <em>Related settings</em> menu either to
      the right or at the bottom of the page.
    </p>

    <p>
      <Image src={win_sound_settings} />
    </p>

    <Header as="h2">2. Configure the sound device</Header>
    <p>
      In the sound control panel, select the <strong>Playback</strong> pane. It
      will show the list of playback audio devices connected. Select the HDMI
      device and select <strong>Configure</strong>.
    </p>

    <p>
      <Image src={win_playback_devices_configure} style={{ width: 371 }} />
    </p>

    <p>
      A wizard for configuring the HDMI device opens. Please select the{" "}
      <strong>7.1 Surround</strong> configuration and press Next. Under the{" "}
      <em>Customize your configuration</em> page,{" "}
      <strong>check all speakers</strong> and press Next.{" "}
      <strong>Select all speakers as full-range</strong> and press Next and then
      Finish.
    </p>

    <Grid stackable columns="2">
      <Grid.Row>
        <Grid.Column>
          <Image src={win_speaker_w1} className="solid" />
        </Grid.Column>
        <Grid.Column>
          <Image src={win_speaker_w2} className="solid" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Image src={win_speaker_w3} className="solid" />
        </Grid.Column>
        <Grid.Column>
          <Image src={win_speaker_w4} className="solid" />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Segment>
      NOTE: Your speaker setup might not be 7.1 or have full-range speakers, but
      when connected to an AVR, it is generally better to let the AVR do the
      downmixing and bass management.
    </Segment>

    <Header as="h2">Setting HDMI format (optional)</Header>
    <p>
      For configure higher quality audio over HDMI, please press{" "}
      <strong>Properties</strong> in the Sound control panel and open the{" "}
      <strong>Advanced</strong> pane. It it adviced to set a{" "}
      <strong>24-bit</strong>
      format at either <strong>44100 Hz</strong> or <strong>48000 Hz</strong>.
      The choice between 44100 and 48000 depends on if the main usage is music
      or movies respectively.
    </p>

    <Grid stackable columns="2">
      <Grid.Row>
        <Grid.Column>
          <Image src={win_playback_devices_properties} />
        </Grid.Column>
        <Grid.Column>
          <Image src={win_device_format} />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as="h2">Disable enhancements (optional)</Header>
    <p>
      Some Windows 10 installations comes with sound enhancement components. To
      disable these, open the <strong>Enhancements</strong> pane of the sound
      properties. <strong>Check</strong> the{" "}
      <strong>Disable all enhancements</strong> box.
    </p>

    <p>
      <Image src={win_device_enhancements} style={{ width: 371 }} />
    </p>
  </DocsLayout>
);

export default WindowsPage;

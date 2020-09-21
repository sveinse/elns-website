import React from "react";
import {
  Header,
  Image,
  Grid,
  List,
  Table,
  Message,
  Icon,
} from "semantic-ui-react";

import { Link } from "components/router";
import Layout from "components/layout";
import SEO from "components/seo";
import { Litem } from "components/shim";

import win_sound_settings from "images/win/win_sound_settings_mark.png";
import win_playback_devices_configure from "images/win/win_playback_devices_configure.png";
import win_playback_devices_properties from "images/win/win_playback_devices_properties.png";
import win_speaker_w1 from "images/win/win_speaker_w1_mark.png";
import win_speaker_w2 from "images/win/win_speaker_w2_mark.png";
import win_speaker_w3 from "images/win/win_speaker_w3_mark.png";
import win_speaker_w4 from "images/win/win_speaker_w4.png";
import win_device_format from "images/win/win_device_format.png";
import win_device_enhancements from "images/win/win_device_enhancements_mark.png";

const WindowsPage = () => (
  <Layout docs="/docs/usage/windows">
    <SEO title="Docs" />

    <Header as="h1">Windows audio</Header>

    <Header as="h4">
      This page explains the available sound systems on Windows and how to set
      up Windows 10 for multi-channel output on HDMI.
    </Header>

    <Header as="h2">Sound systems</Header>

    <p>
      Windows provides multiple sound systems supported by ELNS. The following
      list gives the order of preference.
    </p>

    <List bulleted>
      <Litem header="Windows WASAPI">
        <em>Windows Audio Session API</em>, is a part of Windows Core Audio, the
        current and recommended audio system in Windows. It provides a standard,
        low-latency, sharable audio interface.
        <p />
        WASAPI does not includes a <em>sample rate converter (SRC)</em>. This
        assures the best audio quality, however it will be necessary to set the
        number of channels and samplerate of the sound device to match the input
        source. See <Link to="#format">how to set it here</Link>.
        <p />
        See the Wikipedia article{" "}
        <a href="https://en.wikipedia.org/wiki/Technical_features_new_to_Windows_Vista#Audio_stack_architecture">
          WASAPI
        </a>{" "}
        for more information.
      </Litem>
      <Litem header="WDM-KS">
        <em>Windows Driver Model Kernel Streaming</em> interface is the
        lowest-level audio system used in Windows. It priovides exclusive access
        to the sound device with very low latency. The number of audio channels
        is dynamic. No Windows configuration to set the the number of audio
        channels will be necessary.
        <p />
        The Microsoft document{" "}
        <a href="https://docs.microsoft.com/en-us/windows-hardware/drivers/audio/introduction-to-wdm-audio-drivers">
          introduction to WDM Audio Drivers
        </a>{" "}
        provides more information.
      </Litem>
      <Litem header="Windows DirectSound">
        is a deprecated DirectX library for audio dating back to Windows 95 and
        Windows XP, yet still supported on Windows 10.
        <p />
        This sound system offers the greatest compatibility with any audio
        hardware. It will automatically resample if the rate mismatches the
        configuration (at the expense of some quality) and it will up- or
        downmix the audio if the number of channels doesn't match the device
        configuration.
        <p />
        See Wikipedia article about{" "}
        <a href="https://en.wikipedia.org/wiki/DirectSound">DirectSound</a> for
        more information.{" "}
      </Litem>
      <Litem header="MME">
        Multimedia extensions is a legacy audio system in, which has existed
        since{" "}
        <a href="https://en.wikipedia.org/wiki/Windows_3.0#Windows_3.0_with_Multimedia_Extensions">
          Windows 3.0
        </a>
      </Litem>
    </List>

    <Header as="h2" id="channels">
      Channel assignments
    </Header>

    <p>
      When using multi-channel output over HDMI, Windows assigns specific
      channel number to specific speakers.
    </p>
    <Table celled textAlign="center" size="small" fixed compact unstackable>
      <Table.Body>
        <Table.Row>
          <Table.HeaderCell>1</Table.HeaderCell>
          <Table.HeaderCell>2</Table.HeaderCell>
          <Table.HeaderCell>3</Table.HeaderCell>
          <Table.HeaderCell>4</Table.HeaderCell>
          <Table.HeaderCell>5</Table.HeaderCell>
          <Table.HeaderCell>6</Table.HeaderCell>
          <Table.HeaderCell>7</Table.HeaderCell>
          <Table.HeaderCell>8</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>L</Table.Cell>
          <Table.Cell>R</Table.Cell>
          <Table.Cell>C</Table.Cell>
          <Table.Cell>LFE</Table.Cell>
          <Table.Cell>SBL</Table.Cell>
          <Table.Cell>SBR</Table.Cell>
          <Table.Cell>SL</Table.Cell>
          <Table.Cell>SR</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Left</Table.Cell>
          <Table.Cell>Right</Table.Cell>
          <Table.Cell>Center</Table.Cell>
          <Table.Cell>Low-frequency effects</Table.Cell>
          <Table.Cell>Surround Back Left</Table.Cell>
          <Table.Cell>Surround Back Right</Table.Cell>
          <Table.Cell>Surround Left</Table.Cell>
          <Table.Cell>Surround Right</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

    <Header as="h2">HDMI configuration</Header>

    <p>
      Windows supports up to 8 channel audio (<em>7.1</em>) over HDMI. To be
      able to use ELNS fully, the HDMI output must be configured.
    </p>

    <Header as="h4">1. Open legacy sound control panel</Header>
    <p>
      Open <strong>Settings -> Sound -> Sound Control Panel</strong>. The Sound
      Control Panel is located under <em>Related settings</em> menu either to
      the right or at the bottom of the page.
    </p>

    <p>
      <Image src={win_sound_settings} />
    </p>

    <Header as="h4">2. Configure the sound device</Header>
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

    <Message raised style={{ background: "#dddddd" }} icon>
      <Icon name="info" size="big" />
      <Message.Content>
        It is generally better to allow the AVR do the downmixing and bass
        management. Setup the HDMI with 7.1 even if you don't have a 7.1 setup
        or full-range speakers.
      </Message.Content>
    </Message>

    <Header as="h2" id="format">
      Setting HDMI format and rate (optional)
    </Header>
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
  </Layout>
);

export default WindowsPage;

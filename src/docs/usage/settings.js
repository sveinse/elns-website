import React from "react";
import { Header, Image, Grid, Icon, List } from "semantic-ui-react";

import { Litem } from "../../components/shim";
import DocsLayout from "../../components/docslayout";
import SEO from "../../components/seo";

import ui_settings from "../../images/ui/ui_settings.png";
import ui_updates from "../../images/ui/ui_updates.png";
import ui_updates_beta from "../../images/ui/ui_updates_beta.png";

const SettingDialog = () => (
  <>
    <Header as="h2">Settings</Header>

    <p>
      Pressing the <Icon name="cog" /> button on the menu window toolbar will
      open the settings dialog.
    </p>

    <p>
      <Image src={ui_settings} />
    </p>

    <List bulleted divided>
      <Litem header="GUI Scale">
        Sets the scale for the window interface. Some high-DPI screens might
        need to manually set this to get the text large enough.
      </Litem>

      <Litem header="Enable sound cards">
        Turn on or off sound card audio. Some sound card drivers stops working
        when starting ELNS and this option allows disabling audio. When the
        sound card has been disabled, only file input and output is possible.
      </Litem>

      <Litem header="Processing mode">
        <strong>FAST</strong> will process the audio as quickly as possible.{" "}
        <strong>REALTIME</strong> process the audio at the same rate as the
        audio, e.g. 1 minute audio will take 1 minute to process. This setting
        has no effect when the audio input or output is a sound device as the
        sound will always be done in REALTIME.
      </Litem>

      <Litem header="Samplerate">
        The processing samplerate. When reading from an input file, this will be
        ignored as the engine will use the samplerate read from the input file.
        The application does not support resampling.
      </Litem>

      <Litem header="Processing format">
        Set the preferred processing encoding type. Chose from integer types
        <code>pcm16</code>, <code>pcm32</code> and <code>pcm64</code>, or from
        the floating-point types <code>float32</code> and <code>float64</code>.
        The number indicates the number of bits per sample.
      </Litem>

      <Litem header="Latency">
        Set the wanted latency for the processing. It useful when using
        real-time sound card input and output, where low latency is desireable.
        Lower values reduces overall latency, but increases strain on the
        computer. If playback stuttering is experiences, the number must be
        increased. The lowest practical value is limited by the sound card
        drivers.
      </Litem>

      <Litem header="Processing headroom">
        When processing in pcm integer mode, extra headroom can be added to
        reduce the risk for running into internal overload.
      </Litem>

      <Litem header="Output file format">Set the output file format.</Litem>

      <Litem header="Send anonymous analytics"></Litem>

      <Litem header="Check for updates on startup"></Litem>

      <Litem header="Use beta release"></Litem>
    </List>
  </>
);

const UpdateDialog = () => (
  <>
    <Header as="h2">Update dialog</Header>

    <p>
      Pressing the <Icon name="cube" /> button on the menu window toolbar will
      open the check for updates dialog.
    </p>

    <Image src={ui_updates} />
    <Image src={ui_updates_beta} />
  </>
);

const SettingsPage = () => (
  <DocsLayout path="/docs/usage/settings">
    <SEO title="Docs" />

    <Header as="h1">Settings</Header>

    <SettingDialog />
    <UpdateDialog />
  </DocsLayout>
);

export default SettingsPage;

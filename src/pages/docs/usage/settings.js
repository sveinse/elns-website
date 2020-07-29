import React from "react";
import { Header, Image, Icon, List, Grid } from "semantic-ui-react";

import { Litem, GR, GC } from "components/shim";
import Layout from "components/layout";
import SEO from "components/seo";

import ui_settings from "images/ui/ui_settings.png";
import ui_updates from "images/ui/ui_updates.png";
import ui_updates_beta from "images/ui/ui_updates_beta.png";
import ui_diagnostics from "images/ui/ui_diagnostics.png";
//import ui_status_error from "images/ui/ui_status_error.png";
import ui_status_setup from "images/ui/ui_status_setup_dialog.png";

const SettingDialog = () => (
  <>
    <Header as="h2" id="settings">
      Settings dialog
    </Header>

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
        <strong>ENABLE</strong> or <strong>DISABLE</strong> sound card audio.
        Some sound card drivers stops working when starting ELNS and this option
        allows disabling audio. When the sound card has been disabled, only file
        input and output is possible.
      </Litem>

      <Litem header="Processing mode">
        <strong>FAST</strong> will process the audio as quickly as possible.{" "}
        <strong>REALTIME</strong> process the audio at the same rate as the
        audio, e.g. 1 minute audio will take 1 minute to process. This setting
        has no effect when the audio input or output is a sound device as the
        sound will always be done in realtime.
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

      <Litem header="Output file format">
        Set the output file format. The most common formats include{" "}
        <code>wav</code>, <code>raw</code>, <code>flac</code>, <code>ogg</code>.
      </Litem>

      <Litem header="Send anonymous analytics">
        When <strong>ENABLED</strong> (the default) ELNS is collecting anonymous
        usage data for improving the application. No personal information is
        collected and transmitted. Set to <strong>DISABLE</strong> to stop
        sending analytics.
      </Litem>

      <Litem header="Check for updates on startup">
        Select <strong>ENABLED</strong> to make ELNS check for new software
        updates on startup.
      </Litem>

      <Litem header="Use beta release">
        When set to <strong>USE BETA</strong> it will include beta releases in
        the check for updates. To only use the final versions, set this to
        <strong>NO BETA</strong>
      </Litem>
    </List>
  </>
);

const UpdateDialog = () => (
  <>
    <Header as="h2" id="update">
      Update dialog
    </Header>

    <p>
      Pressing the <Icon name="cube" /> button on the menu window toolbar will
      open the check for updates dialog. This window allows for checking for new
      updates and present a link to the download.
    </p>

    <p>
      <Image.Group>
        <Image src={ui_updates} />
        <Image src={ui_updates_beta} />
      </Image.Group>
    </p>
  </>
);

const DiagnosticsDialog = () => (
  <>
    <Header as="h2" id="diagnostics">
      Diagnostics dialog
    </Header>

    <p>
      ELNS supports uploading the complete logs of the programs up to the author
      for diagnostics and analysis purposes. This can be very useful in case of
      program crash or bugs.
    </p>

    <p>
      <Grid stackable reversed="computer tablet">
        <GR>
          <GC className="fit">
            <svg viewBox="315 220 316 138" style={{ width: 316, height: 138 }}>
              <image href={ui_status_setup} />
            </svg>
          </GC>
          <GC className="grow">
            By clicking the status icon in the bottom right corner, the current
            program status will be shown in a pop-up dialog. In this dialog
            there is a <strong>Send diagnostics</strong> button which can be
            used to send upload ELNS diagnostics.
          </GC>
        </GR>
      </Grid>
    </p>

    <p>
      The <strong>Upload ELNS diagnostics</strong> dialog has two fields:{" "}
      <strong>Title/Name</strong> and <strong>Description</strong>. These fields
      are optional and does not have to be filled in. These fields can be very
      useful if you want to describe the problem by creating some context.
    </p>

    <p>
      When <strong>OK</strong> is pressed the logs of the ELNS will be uploaded
      along with these two fields. No information beyond ELNS itself is
      collected and sent.
    </p>

    <p>
      <Image src={ui_diagnostics} />
    </p>
  </>
);

const SettingsPage = () => (
  <Layout docs="/docs/usage/settings">
    <SEO title="Docs" />

    <Header as="h1">Settings</Header>

    <SettingDialog />
    <UpdateDialog />
    <DiagnosticsDialog />
  </Layout>
);

export default SettingsPage;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Header, Image, Grid, Icon } from "semantic-ui-react";
import { List, Litem } from "../../components/shim";

import DocsLayout from "../../components/docslayout";
import SEO from "../../components/seo";

import ui_main from "../../images/ui/ui_main.png";
import ui_main_passthrough from "../../images/ui/ui_main_passthrough.png";
import ui_status_setup from "../../images/ui/ui_status_setup.png";
import ui_status_error from "../../images/ui/ui_status_error.png";
import ui_function_hover from "../../images/ui/ui_function_hover.png";
import ui_info_hover from "../../images/ui/ui_info_hover.png";
import ui_info_summary from "../../images/ui/ui_info_summary.png";
import ui_settings from "../../images/ui/ui_settings.png";

const DocRect = ({ x, y, w, h }) => (
  <rect
    x={x}
    y={y}
    width={w}
    height={h}
    rx="15"
    ry="15"
    fill="black"
    fillOpacity="0.0"
    stroke="red"
    strokeWidth="2"
    strokeDasharray="30,8"
  />
);

const MainMenuIcons = () => (
  <>
    <Header as="h2">Main Toolbar</Header>

    <p>The toolbar is located on the left side.</p>

    <List divided>
      <Litem icon="info circle" header="Info">
        Show application information, copyright and license information.
      </Litem>

      <Litem icon="cog" header="Settings">
        Open application settings
      </Litem>

      <Litem icon="cube" header="Updates">
        Open check for updates dialog
      </Litem>

      <Litem icon="heart" header="Donate">
        Open URL to the donation page
      </Litem>

      <Litem icon="repeat" header="Repeat">
        Enable repeat of the input file. Disabled if reading audio from a sound
        card.
      </Litem>

      <Litem icon="backward" header="Restart">
        Restart the playback from the start. Disabled if reading audio from a
        sound card.
      </Litem>

      <Litem icon="stop" header="Stop">
        Stop the processing. It can also clear an error.
      </Litem>

      <Litem icon="play" header="Start or pause">
        Start or pause the processing. While running and in pause, any of the
        configuration cannot be changed. The DSP function parameters and the
        audio control buttons on the right can be used.
      </Litem>
    </List>
  </>
);

const InputsAndOutputs = () => (
  <>
    <Header as="h2">Input and output configuration</Header>

    <svg viewBox="0 0 631 130">
      <image href={ui_main} />
      <DocRect x="35" y="29" w="592" h="85" />
    </svg>

    <p>
      The input/output section determines the source and destination for the
      audio and it sets the number of audio channels.
    </p>

    <List bulleted divided>
      <Litem header="Audio device">
        Selects the <strong>sound card device</strong> to use for audio input or
        output. The sound card will be used as input source if the input file is
        empty and it will be used as an output destination if the output file is
        empty. The suffix "<emph>(in=X, out=Y)</emph>" indicates the maximum
        number of input channels and output channels that this sound card
        supports.
      </Litem>
      <Litem header="Input">
        Sets the <strong>input file name</strong> and the{" "}
        <strong>number of input channels</strong>. If the filename field is
        blank, audio will be fetched from the audio device. If reading from a
        file, the number of input channels is read from the file and the number
        of channels cannot be altered.
      </Litem>
      <Litem header="Output">
        Sets the <strong>output file name</strong> and the{" "}
        <strong>number of output channels</strong>. If the filename field is
        blank, the audio will be sent to the audio device output. Some functions
        requires equal number of input channels and output channels and in these
        cases the number of output channels cannot be set.
      </Litem>
    </List>

    <svg viewBox="0 0 200 150" style={{ width: 200, height: 150 }}>
      <image href={ui_status_setup} />
    </svg>

    <p>
      The background color indicates if the configuration is valid. Green
      background indicates valid configuration, and a green background indicates
      an incorrect or missing configuration.
    </p>

    <p>
      In the example shown here, the input is red because no input file has been
      selected and the sound device does not provide any inputs (only outputs).
      The function is also marked red because it requires a input source.
    </p>
  </>
);

const DSPFunction = () => (
  <>
    <Header as="h2">Function</Header>

    <svg viewBox="0 80 631 305">
      <image href={ui_main} />
      <DocRect x="42" y="116" w="504" h="230" />
    </svg>

    <p>
      The audio processing function is selected with the function drop-down box.
      Each function performs a specific type of processing and can have an
      optional GUI for setting parameters. Please see{" "}
      <Link to="/docs/functions">Functions</Link> page for more information
      about the functions and their parameters.
    </p>

    <svg viewBox="100 100 450 170" style={{ width: 450, height: 170 }}>
      <image href={ui_function_hover} />
    </svg>

    <p>
      Hovering over the function drop-down box will show a simple function
      description and its parameters.
    </p>
  </>
);

const AudioControls = () => (
  <>
    <Header as="h2">Audio controls</Header>

    <p>
      The audio control located on the right side allows for live adjustments of
      the audio while running. Some functions present additional controls in
      addition to the controls shown here.
    </p>

    <Grid stackable container reversed="computer tablet">
      <Grid.Row>
        <Grid.Column width={3} floated="right">
          <svg viewBox="520 125 115 260" style={{ width: 115 }}>
            <image href={ui_main_passthrough} />
            <DocRect x="543" y="157" w="87" h="160" />
          </svg>
        </Grid.Column>

        <Grid.Column width={13}>
          <List bulleted divided>
            <Litem header="Preset - A, B, C or D">
              The current function parameters can be saved and recalled by
              pressing a preset button. Selecting a preset will save the current
              settings into the active preset and activate the clicked preset.
            </Litem>

            <Litem header="Bypass">
              <strong>Bypass</strong> will stop processing of the function and
              pass unaltered audio from input directly to output.
            </Litem>

            <Litem header="Mute">
              <strong>Mute</strong> will silence the audio output, but the
              stream is still kept running.
            </Litem>

            <Litem header="Reset">
              <strong>Reset</strong> will set the current function parameters
              back to default values.
            </Litem>
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);

const StatusBar = () => (
  <>
    <Header as="h2">Status bar</Header>

    <svg viewBox="0 315 631 70">
      <image href={ui_main} />
      <DocRect x="38" y="352" w="590" h="31" />
    </svg>

    <p>From left to right, the status bar contains the following elements:</p>

    <List divided bulleted verticalAlign="top">
      <Litem header="Current time" />

      <Litem header="Progress position">
        The progress bar shows the current progress position when reading from
        an input file. The progress bar can be clicked to move the playback
        position during running and pause.
      </Litem>

      <Litem header="File length">
        If the input is read from a file, this shows the length of the file.
      </Litem>

      <Litem header="Info field">
        The info field will show info about the audio processing:{" "}
        <strong>Samplerate / Encoding / Latency</strong>. Hovering over the
        field will show additional technical information about the processing.
        See section XXX for additional information.
      </Litem>

      <Litem header="Status icon">
        The rightmost icon shows the current program status. Hover over or
        clicking the icon will show a popup with information about the current
        status. Clicking on the icon will show a dialog with additional buttons.{" "}
        <strong>Clear</strong> (only visible when errors) will dismiss and clear
        the current error. <strong>Send diagnostics</strong> allows sending
        diagnostics information to the author.
        <svg viewBox="360 240 271 146" style={{ width: 271 }}>
          <image href={ui_status_error} />
        </svg>
      </Litem>
    </List>
    <p />
    {/*}
    <strong>Samplerate</strong> is the running processing rate.{" "}
    <strong>Encoding</strong> shows the sample type and width which the
    processing is running at. E.g. <em>pcm32</em> indicates a 32-bit PCM integer
    type. <strong>Latency</strong> shows the overall processing latency, which
    is the time delay from input to output.
    <p />
    <p>
      Hovering over the <strong>info</strong> field will show additional
      technical information about the processing. See section XXX for additional
      information.
    </p>
    or status icon will show a tooltip with additional information. Clicking on
    the status icon open up a status dialog that enables to dismiss the error
    and*/}
    {/*
     The info filed tooltip will show additional
    technical information about the processing, while hovering During playback,
    hovering over the info area will show a tooltip with processing diagnostic
    information. The most important figure is the{" "}
    <strong>real-time figure</strong>, e.g.
    <code>(1.1% RT)</code>. Less than 100% indicates that the computer is able
    process the audio real-time. Higher than 100% indicates that the CPU is
    unable to process the audio in real-time.
    <Image src={ui_info_hover} inline={false} />
    <p />
    During pause or after processing, hovering over the info area will show a
    short summary of the processing performance data.
    <Image src={ui_info_summary} />*/}
    {/*<Grid stackable container columns="equal">
      <Grid.Row>
        <Grid.Column>
          <svg viewBox="300 220 631 305">
            <image href={ui_status_setup} />
          </svg>
        </Grid.Column>
        <Grid.Column>
          <svg viewBox="300 220 631 305">
            <image href={ui_status_error} />
          </svg>
        </Grid.Column>
      </Grid.Row>
    </Grid>*/}
  </>
);

const Statuses = () => (
  <>
    <Header as="h2">Program status</Header>

    <p>
      The bottom right icon shows the current status of the application.
      Hovering over the status icon can display additional supplemental
      information.
    </p>

    <List divided>
      <Litem icon="minus circle" color="grey" header="Setup">
        Configuration is incomplete and needs to be fixed. Hovering over the
        icon will show hints why the configuration is incomplete and suggest
        what needs to be fixed.
        <svg
          className="ui right floated image"
          viewBox="300 255 331 103"
          style={{ width: 331, height: 103 }}
        >
          <image href={ui_status_setup} />
        </svg>
      </Litem>

      <Litem icon="check circle" color="green" header="Ready">
        Configuration is valid and ready to process audio
      </Litem>

      <Litem icon="play circle" color="green" header="Running">
        Audio processing in progress. The configuration settings cannot be
        altered during processing and pause, and the input and output fields
        have been disabled.
      </Litem>

      <Litem icon="pause circle" color="yellow" header="Paused">
        Processing audio has been suspended.
      </Litem>

      <Litem icon="exclamation circle" color="red" header="Error">
        Application has failed. Hovering over the icon will show the error
        message. To resume after an error the <strong>Stop</strong> button must
        be pressed or by clicking the <strong>Clear</strong> button in the
        status popup dialog.
        <svg viewBox="360 240 271 146" style={{ width: 271 }}>
          <image href={ui_status_error} />
        </svg>
        {/*<p />
        Pressing the down arrow, a more verbose technical description is show.
        While these messages are not intended for the end-user, the
        <strong>Send diagnostics</strong> button can be used to send information
        about the crash to the author. The <strong>Clear</strong> button will
        dismiss and clear the error.
        <Image src={old_ui_status_error_expanded} inline={false} />*/}
      </Litem>

      <Litem icon="times circle" color="red" header="Fatal">
        An unrecoverable fatal error has occurred. Hovering over the icon will
        show the technical info about the failure. No recovery is possible and
        the application can only be exited.
      </Litem>
    </List>
  </>
);

const SettingDialog = () => (
  <>
    <Header as="h2">Settings</Header>

    <p>
      Pressing the <Icon name="cog" /> button on the menu will open the settings
      dialog.
    </p>

    <Grid stackable container reversed="computer tablet">
      <Grid.Row>
        <Grid.Column width={6} floated="right">
          <Image src={ui_settings} />
        </Grid.Column>
        <Grid.Column width={10}>
          <List bulleted divided>
            <Litem header="GUI Scale">
              Sets the scale for the window interface. Some high-DPI screens
              might need to manually set this to get the text large enough.
            </Litem>

            <Litem header="Enable audio">
              Turn on or off sound card audio. Some sound card drivers stops
              working when starting ELNS and this option allows disabling audio.
              When the sound card has been disabled, only file input and output
              is possible.
            </Litem>

            <Litem header="Process in realtime">
              If both the input and the output is a file, this option controls
              the processing speed. If enabled, the processing will occur in a
              real-time rate, meaning that if the input file is 1 minute, the
              processing will take 1 minute. If disabled, the processing will
              progress as fast as possible.
            </Litem>

            <Litem header="Samplerate">
              The processing samplerate. When reading from an input file, this
              will be ignored as the engine will use the samplerate read from
              the input file. The application does not support resampling.
            </Litem>

            <Litem header="Processing encoding">
              Set the preferred processing encoding type. Chose from integer
              types
              <code>pcm16</code>, <code>pcm32</code> and <code>pcm64</code>, or
              from the floating-point types <code>float32</code> and{" "}
              <code>float64</code>. The number indicates the number of bits per
              sample.
            </Litem>

            <Litem header="Latency">
              Set the wanted latency for the processing. It useful when using
              real-time sound card input and output, where low latency is
              desireable. Lower values reduces overall latency, but increases
              strain on the computer. If playback stuttering is experiences, the
              number must be increased. The lowest practical value is limited by
              the sound card drivers.
            </Litem>

            <Litem header="Headroom">
              When processing in pcm integer mode, extra headroom can be added
              to reduce the risk for running into internal overload.
            </Litem>

            <Litem header="Output file format">
              Set the output file format.
            </Litem>
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);

const UIContents = () => (
  <>
    <Header as="h1">User interface</Header>

    <Header as="h4">
      This page gives an walkthrough of the main window user interface.
    </Header>

    <Image src={ui_main} size="huge" />

    <MainMenuIcons />
    <InputsAndOutputs />
    <DSPFunction />
    <AudioControls />
    <StatusBar />
    <Statuses />
    <SettingDialog />
  </>
);

const UIPage = () => (
  <DocsLayout path="/docs/usage/ui">
    <SEO title="Docs" />
    <UIContents />
  </DocsLayout>
);

export default UIPage;

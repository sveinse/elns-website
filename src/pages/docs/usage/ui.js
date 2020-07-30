import React from "react";
import { Header, Image, Grid, Icon, List, Segment } from "semantic-ui-react";

import { Link } from "components/router";
import { Litem, GR, GC } from "components/shim";
import Layout from "components/layout";
import SEO from "components/seo";

import ui_main from "images/ui/ui_main_all.png";
import ui_main_passthrough from "images/ui/ui_main_passthrough.png";
import ui_status_setup from "images/ui/ui_status_setup.png";
import ui_status_error from "images/ui/ui_status_error.png";
import ui_function_hover from "images/ui/ui_function_hover.png";
import ui_info_hover from "images/ui/ui_info_hover.png";
import ui_info_summary from "images/ui/ui_info_summary.png";

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

      <Litem icon="play" header="Start/pause">
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

    <p>
      <svg viewBox="0 0 631 125">
        <image href={ui_main} />
        <DocRect x="35" y="29" w="592" h="85" />
      </svg>
    </p>

    <p>
      The input/output section determines the source and destination for the
      audio and it sets the number of audio channels.
    </p>

    <List bulleted divided>
      <Litem header="Audio device">
        Selects the <strong>sound card device</strong> to use for audio input or
        output. The sound card will be used as input source if the input file is
        empty and it will be used as an output destination if the output file is
        empty. The suffix "<em>(in=X, out=Y)</em>" indicates the maximum number
        of input channels and output channels that this sound card supports. The
        prefix in "<em>[brackets]</em>" indicates the audio system.
      </Litem>

      <Litem header="Input">
        Sets the <strong>number of input channels</strong> and{" "}
        <strong>input file name</strong>. If the filename field is blank, audio
        will be fetched from the audio device. If reading from a file, the
        number of input channels is read from the file and the number of
        channels cannot be altered.
      </Litem>

      <Litem header="Output">
        Sets the <strong>number of output channels</strong> and{" "}
        <strong>output file name</strong>. If the filename field is blank, the
        audio will be sent to the audio device output. Some functions requires
        equal number of input channels and output channels and in these cases
        the number of output channels cannot be set.
      </Litem>
    </List>

    <Grid stackable reversed="computer tablet">
      <GR>
        <GC className="fit">
          <svg viewBox="0 0 200 150" style={{ width: 200, height: 150 }}>
            <image href={ui_status_setup} />
          </svg>
        </GC>
        <GC className="grow">
          The background color indicates if the configuration is valid. Green
          background indicates valid configuration, and a green background
          indicates an incorrect or missing configuration.
        </GC>
      </GR>
    </Grid>
  </>
);

const DSPFunction = () => (
  <>
    <Header as="h2">Function selection and interface</Header>

    <p>
      <svg viewBox="0 80 631 305">
        <image href={ui_main} />
        <DocRect x="42" y="116" w="504" h="232" />
      </svg>
    </p>

    <p>
      The audio processing function is selected with the function drop-down box.
      Each function performs a specific type of processing and can have an
      optional GUI for setting parameters. Please see{" "}
      <Link to="/docs/functions">Functions</Link> page for more information
      about the functions and their parameters.
    </p>

    <p>
      <svg viewBox="100 110 450 150" style={{ width: 450, height: 150 }}>
        <image href={ui_function_hover} />
      </svg>
    </p>

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

    <Grid stackable reversed="computer tablet">
      <GR>
        <GC className="fit">
          <svg viewBox="520 125 112 235" style={{ width: 112, height: 235 }}>
            <image href={ui_main_passthrough} />
            <DocRect x="543" y="157" w="87" h="160" />
          </svg>
        </GC>

        <GC className="grow">
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
        </GC>
      </GR>
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
        See <Link to="/docs/usage/ui#info">program info</Link> section for more
        information.
      </Litem>

      <Litem header="Status icon">
        <Grid stackable>
          <GR>
            <GC className="grow">
              The rightmost icon shows the current program status. Hover over or
              clicking the icon will show a popup with information about the
              current status. Clicking on the icon will show a dialog with
              additional buttons. <strong>Close</strong> will close the dialog.{" "}
              <strong>Clear</strong> (only errors) will dismiss and clear the
              current error. <strong>Send diagnostics</strong> allows sending
              diagnostics information to the author. See{" "}
              <Link to="/docs/usage/settings#diagnostics">
                diagnostics dialog
              </Link>{" "}
              documentation for more information.
            </GC>
            <GC className="fit">
              <svg
                viewBox="360 240 271 146"
                style={{ width: 271, height: 146 }}
              >
                <image href={ui_status_error} />
              </svg>
            </GC>
          </GR>
        </Grid>
      </Litem>
    </List>
    <p />
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
        <Grid stackable>
          <GR>
            <GC className="grow">
              Configuration is incomplete and needs to be fixed. Hovering over
              the icon will show hints why the configuration is incomplete and
              suggest what needs to be fixed.
            </GC>
            <GC className="fit">
              <svg viewBox="300 265 331 93" style={{ width: 331, height: 93 }}>
                <image href={ui_status_setup} />
              </svg>
            </GC>
          </GR>
        </Grid>
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
        <Grid stackable>
          <GR>
            <GC className="grow">
              Application has failed. Hovering over the icon will show the error
              message. To resume after an error either click the{" "}
              <Icon name="stop" />
              stop button or the <strong>Clear</strong> button in the status
              dialog. Status will then go back to the ready state.
            </GC>
            <GC className="fit">
              <svg
                viewBox="370 250 261 136"
                style={{ width: 261, height: 136 }}
              >
                <image href={ui_status_error} />
              </svg>
            </GC>
          </GR>
        </Grid>
      </Litem>

      <Litem icon="times circle" color="red" header="Fatal">
        An unrecoverable fatal error has occurred. Hovering over the icon will
        show the technical info about the failure. No recovery is possible and
        the application can only be exited.
      </Litem>
    </List>
  </>
);

const Info = () => (
  <>
    <Header as="h2" id="info">
      Audio processing info
    </Header>

    <Segment raised style={{ background: "#dddddd" }}>
      <Icon name="info" size="big" />
      This section is advanced topic and not essential for the basic usage of
      ELNS.
    </Segment>

    <p>
      The info area on the status bar next to the status icon shows three
      fields: <strong>Samplerate / Encoding / Latency</strong>.
    </p>

    <List bulleted>
      <Litem header="Samplerate">The current processing samplerate</Litem>
      <Litem header="Encoding">
        shows the sample type and width which the processing is running at. E.g.{" "}
        <em>pcm32</em> indicates a 32-bit PCM integer type, while{" "}
        <em>float32</em>
        is using 32-bit floating-point encoding.
      </Litem>
      <Litem header="Latency">
        shows the overall processing latency, which is the time delay from input
        to output.
      </Litem>
    </List>

    <p>
      Hovering over the info area during processing will show additional
      technical information and statistics from the processing.
    </p>

    <p>
      <svg viewBox="170 315 461 66">
        <image href={ui_info_hover} />
      </svg>
    </p>

    <p>From left to right, these fields are</p>

    <List bulleted>
      <Litem header="Total processing time" />
      <Litem header="Current block number (+ delta)">
        Delta represents the number of blocks processed since last log entry
      </Litem>
      <Litem header="RT, Real-time target (Samples per block)">
        The time of audio data represented in one block. The number of samples
        per block is listed in parenthesis.
      </Litem>
      <Litem header="Processing time per block (% of real-time)">
        The total amount of time ELNS used for processing one block. The %RT
        (real-time) figure in parenthesis indicates how big fraction of the time
        spent processing. It is an indicator if the computer is capable of
        keeping up with processing the data in real-time.
      </Litem>
      <Litem header="DSP processing time">
        The amount of time spent in the core function DSP processing algorithm.
      </Litem>
    </List>

    <p>
      When pausing or stopping processing, a processing summary information will
      be shown. It contains additional aggregated statistics about the
      processing.
    </p>

    <p>
      <svg viewBox="125 280 506 101">
        <image href={ui_info_summary} />
      </svg>
    </p>
  </>
);

const UIPage = () => (
  <Layout docs="/docs/usage/ui">
    <SEO title="Docs" />

    <Header as="h1">User interface</Header>

    <Header as="h4">
      This page gives an walkthrough of the main window user interface.
    </Header>

    <p>
      <Image src={ui_main} fluid />
    </p>

    <MainMenuIcons />
    <InputsAndOutputs />
    <DSPFunction />
    <AudioControls />
    <StatusBar />
    <Statuses />
    <Info />
  </Layout>
);

export default UIPage;

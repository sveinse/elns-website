import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Header, Image, List, Grid, Icon } from "semantic-ui-react"

import DocsLayout, { DocsHeader } from "../../components/docslayout"
import SEO from "../../components/seo"

import mainwindow from "../../images/mainwindow.png"
import ui_missing_setup from "../../images/ui_missing_setup.png"
import ui_function_hover from "../../images/ui_function_hover.png"
import ui_info_hover from "../../images/ui_info_hover.png"
import ui_info_summary from "../../images/ui_info_summary.png"
import ui_status_setup from "../../images/ui_status_setup.png"
import ui_status_error from "../../images/ui_status_error.png"
import ui_status_error_expanded from "../../images/ui_status_error_expanded.png"
import ui_settings from "../../images/ui_settings.png"

export const UIIntro = () => (
  <DocsHeader to="/docs/usage/ui" title="User interface">
    This page show the basic user interface.
  </DocsHeader>
)

const DocRect = ({ x, y, width, height }) => (
  <rect
    x={x}
    y={y}
    width={width}
    height={height}
    rx="15"
    ry="15"
    fill="black"
    fill-opacity="0.0"
    stroke="red"
    stroke-width="3"
    stroke-dasharray="30,8"
  />
)

class MainwindowSvg extends Component {
  static DocRect = DocRect
  render() {
    const props = this.props
    const view = `${props.x} ${props.y} ${props.w} ${props.h}`
    const { children } = this.props
    return (
      <svg viewBox={view} className="svg" style={this.props.style}>
        <image href={mainwindow} x="0" y="0" width="1000" height="570" />
        {children}
      </svg>
    )
  }
}

const MenuButtonItem = ({ children, icon, head }) => (
  <List.Item>
    <List.Icon name={icon} size="large" verticalAlign="middle" />
    <List.Content>
      <List.Header>{head}</List.Header>
      {children}
    </List.Content>
  </List.Item>
)

const StatusIconItem = ({ icon, color, head, children }) => (
  <List.Item>
    <List.Icon name={icon} size="large" verticalAlign="middle" color={color} />
    <List.Content>
      <List.Header>{head}</List.Header>
      <List.Description>{children}</List.Description>
    </List.Content>
  </List.Item>
)

const MainMenuIcons = () => (
  <>
    <Header as="h2">Main Menu</Header>

    <List divided>
      <MenuButtonItem icon="info circle" head="Info">
        Show application information, copyright and license information.
      </MenuButtonItem>

      <MenuButtonItem icon="cog" head="Settings">
        Open application settings
      </MenuButtonItem>

      <MenuButtonItem icon="heartbeat" head="Donate">
        Open URL to the donation page
      </MenuButtonItem>

      <MenuButtonItem icon="repeat" head="Repeat">
        Enable repeat of the input file. Disabled if reading audio from a sound
        card.
      </MenuButtonItem>

      <MenuButtonItem icon="backward" head="Restart">
        Restart the playback from the start. Disabled if reading audio from a
        sound card.
      </MenuButtonItem>

      <MenuButtonItem icon="stop" head="Stop">
        Stop the processing. It can also clear an error.
      </MenuButtonItem>

      <MenuButtonItem icon="play" head="Start or pause">
        Start or pause the processing. While running and in pause, any of the
        configuration cannot be changed. The DSP function parameters and the
        audio control buttons on the right can be used.
      </MenuButtonItem>
    </List>
  </>
)

const InputsAndOutputs = () => (
  <>
    <Header as="h2">Input and output configuration</Header>

    <MainwindowSvg x="0" y="0" w="1000" h="212">
      <DocRect x="65" y="47" width="928" height="138" />
    </MainwindowSvg>

    <p>
      The input/output section determines the source and destination for the
      audio and it sets the number of audio channels.
    </p>

    <List bulleted divided>
      <List.Item>
        <List.Header>Audio device</List.Header>
        Selects the <strong>sound card device</strong> to use for audio input or
        output. The sound card will be used as input source if the input file is
        empty and it will be used as an output destination if the output file is
        empty. The suffix "<code>(in=X, out=Y)</code>" indicates the maximum
        number of input channels and output channels that this sound card
        supports.
      </List.Item>
      <List.Item>
        <List.Header>Input</List.Header>
        Sets the <strong>input file name</strong> and the{" "}
        <strong>number of input channels</strong>. If the filename field is
        blank, audio will be fetched from the audio device. If reading from a
        file, the number of input channels is read from the file and the number
        of channels cannot be altered.
      </List.Item>
      <List.Item>
        <List.Header>Output</List.Header>
        Sets the <strong>output file name</strong> and the{" "}
        <strong>number of output channels</strong>. If the filename field is
        blank, the audio will be sent to the audio device output. Some functions
        requires equal number of input channels and output channels and in these
        cases the number of output channels cannot be set.
      </List.Item>
    </List>

    <Image src={ui_missing_setup} floated="right" />

    <p>
      A green background color next to the fields indicates a valid
      configuration. A red background indicates that the configuration is
      incorrect or missing.
    </p>

    <p>
      In the example shown here, the input is red because no input file has been
      selected and the sound device does not provide any inputs (only outputs).
      The function is also marked red because it requires a input source.
    </p>
  </>
)

const DSPFunction = () => (
  <>
    <Header as="h2">Function</Header>

    <MainwindowSvg x="0" y="135" w="1000" h="450">
      <DocRect x="69" y="176" width="795" height="334" />
    </MainwindowSvg>

    <p>
      The audio processing function is selected with the function drop-down box.
      Each function performs a specific type of processing and can have an
      optional GUI for setting parameters. Please see
      <Link to="/functions">Functions</Link> page for more information about the
      functions and their parameters.
    </p>

    <Image src={ui_function_hover} />

    <p>
      Hovering over the function drop-down box will show a simple function
      discription and its parameters.
    </p>
  </>
)

const AudioControls = () => (
  <>
    <Header as="h2">Audio controls</Header>

    <p>
      The audio control located on the right side allows live adjustments of the
      audio while running.
    </p>

    <Grid stackable container reversed="computer tablet">
      <Grid.Row>
        <Grid.Column width={3} floated="right">
          <MainwindowSvg
            x="840"
            y="220"
            w="160"
            h="350"
            style={{ maxHeight: "220px" }}
          >
            <DocRect x="863" y="250" width="133" height="255" />
          </MainwindowSvg>
        </Grid.Column>
        <Grid.Column width={13}>
          <List bulleted divided>
            <List.Item>
              <List.Header>Preset - A, B, C or D</List.Header>
              The current function parameters can be saved and recalled by
              pressing a preset button. Selecting a preset will save the current
              settings into the active preset and activate the clicked preset.
            </List.Item>

            <List.Item>
              <List.Header>Bypass</List.Header>
              <strong>Bypass</strong> will stop processing of the function and
              pass unaltered audio from input directly to output.
            </List.Item>

            <List.Item>
              <List.Header>Mute</List.Header>
              <strong>Mute</strong> will silence the audio output, but the
              stream is still kept running.
            </List.Item>

            <List.Item>
              <List.Header>Reset</List.Header>
              <strong>Reset</strong> will set the current function parameters
              back to default values.
            </List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
)

const StatusBar = () => (
  <>
    <Header as="h2">Status bar</Header>

    <MainwindowSvg x="0" y="435" w="1000" h="150">
      <DocRect x="65" y="517" width="930" height="48" />
    </MainwindowSvg>

    <p>From left to right, the staus bar contains the following elements:</p>

    <List divided bulleted verticalAlign="top">
      <List.Item>
        <List.Header>Current time</List.Header>
      </List.Item>

      <List.Item>
        <List.Header>Progress position</List.Header>
        The progress bar shows the current progress position when reading from
        an input file. The progress bar can be clicked to move the playback
        position during running and pause.
      </List.Item>

      <List.Item>
        <List.Header>File length</List.Header>
        If the input is read from a file, this shows the length of the file.
      </List.Item>

      <List.Item>
        <List.Header>Info</List.Header>
        The info field will show info about the audio processing,{" "}
        <strong>Samplerate / Encoding / Latency</strong>.
        <p />
        <strong>Samplerate</strong> is the running processing rate.
        <strong>Encoding</strong> shows the sample type and width which the
        processing is running at. E.g.
        <em>pcm32</em> indicates a 32-bit PCM integer type.
        <strong>Latency</strong> shows the overall processing latency, which is
        the time delay from input to output. This is particularely interesting
        when processing audio data in real-time from and to a sound card.
        <p />
        During playback, hovering over the info area will show a tooltip with
        processing diagnostic information. The most important figure is the{" "}
        <strong>real-time figure</strong>, e.g.
        <code>(1.1% RT)</code>. Less than 100% indicates that the computer is
        able process the audio real-time. Higher than 100% indicates that the
        CPU is unable to process the audio in real-time.
        <Image src={ui_info_hover} inline={false} />
        <p />
        During pause or after processing, hovering over the info area will show
        a short summary of the processing performance data.
        <Image src={ui_info_summary} />
      </List.Item>

      <List.Item>
        <List.Header>Status</List.Header>
        The rightmost icon shows the current status.
      </List.Item>
    </List>
  </>
)

const Statuses = () => (
  <>
    <Header as="h2">Program status</Header>

    <p>
      The bottom right icon shows the current status of the application.
      Hovering over the status icon can display additional supplemental
      information.
    </p>

    <List divided bulleted>
      <StatusIconItem icon="minus circle" color="grey" head="Setup">
        Configuration is incomplete and needs to be fixed. Hovering over the
        icon will show hints why the configuration is incomplete and suggest
        what needs to be fixed.
        <Image src={ui_status_setup} inline={false} />
      </StatusIconItem>

      <StatusIconItem icon="check circle" color="green" head="Ready">
        Configuration is valid and ready to process audio
      </StatusIconItem>

      <StatusIconItem icon="play circle" color="green" head="Running">
        Audio processing in progress. The configuration settings cannot be
        altered during processing and pause, and the input and output fields
        have been disabled.
      </StatusIconItem>

      <StatusIconItem icon="pause circle" color="yellow" head="Paused">
        Processing audio has been suspended.
      </StatusIconItem>

      <StatusIconItem icon="exclamation circle" color="red" head="Error">
        Application has failed. Hovering over the icon will show the error
        message. To resume after an error the stop button must be pressed.
        <Image src={ui_status_error} inline={false} />
        <p />
        Pressing the down arrow, a more verbose technical description is show.
        While these messages are not intended for the end-user, the
        <strong>Send diagnostics</strong> button can be used to send information
        about the crash to the author. The <strong>Clear</strong> button will
        dismiss and clear the error.
        <Image src={ui_status_error_expanded} inline={false} />
      </StatusIconItem>

      <StatusIconItem icon="times circle" color="red" head="Fatal">
        An unrecoverable fatal error has occurred. Hovering over the icon will
        show the technical info about the failure. No recovery is possible and
        the application can only be exited.
      </StatusIconItem>
    </List>
  </>
)

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
            <List.Item>
              <List.Header>GUI Scale</List.Header>
              Sets the scale for the window interface. Some high-DPI screens
              might need to manually set this to get the text large enough.
            </List.Item>

            <List.Item>
              <List.Header>Enable audio</List.Header>
              Turn on or off sound card audio. Some sound card drivers stops
              working when starting ELNS and this option allows disabling audio.
              When the sound card has been disabled, only file input and output
              is possible.
            </List.Item>

            <List.Item>
              <List.Header>Process in realtime</List.Header>
              If both the input and the output is a file, this option controls
              the processing speed. If enabled, the processing will occur in a
              real-time rate, meaning that if the input file is 1 minute, the
              processing will take 1 minute. If disabled, the processing will
              progress as fast as possible.
            </List.Item>

            <List.Item>
              <List.Header>Samplerate</List.Header>
              The processing samplerate. When reading from an input file, this
              will be ignored as the engine will use the samplerate read from
              the input file. The application does not support resampling.
            </List.Item>

            <List.Item>
              <List.Header>Processing encoding</List.Header>
              Set the preferred processing encoding type. Chose from integer
              types
              <code>pcm16</code>, <code>pcm32</code> and <code>pcm64</code>, or
              from the floating-point types <code>float32</code> and{" "}
              <code>float64</code>. The number indicates the number of bits per
              sample.
            </List.Item>

            <List.Item>
              <List.Header>Latency</List.Header>
              Set the wanted latency for the processing. It useful when using
              real-time sound card input and output, where low latency is
              desireable. Lower values reduces overall latency, but increases
              strain on the computer. If playback stuttering is experiences, the
              number must be increased. The lowest practical value is limited by
              the sound card drivers.
            </List.Item>

            <List.Item>
              <List.Header>Headroom</List.Header>
              When processing in pcm integer mode, extra headroom can be added
              to reduce the risk for running into internal overload.
            </List.Item>

            <List.Item>
              <List.Header>Output file format</List.Header>
              Set the output file format.
            </List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <p />
  </>
)

const UIContents = () => (
  <>
    <Header as="h1">User interface</Header>

    <Header as="h4">
      This page gives an walkthrough of the user interface.
    </Header>

    <Image src={mainwindow} huge className="dropshadow" />

    <MainMenuIcons />
    <InputsAndOutputs />
    <DSPFunction />
    <AudioControls />
    <StatusBar />
    <Statuses />
    <SettingDialog />

    <p />
  </>
)

const UIPage = () => (
  <DocsLayout path="/docs/usage/ui">
    <SEO title="Docs" />
    <UIContents />
  </DocsLayout>
)

export default UIPage

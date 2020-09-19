import React from "react";
import { Header, Icon, Message, Table, Image } from "semantic-ui-react";

import { Link } from "components/router";
import Layout from "components/layout";
import SEO from "components/seo";

import ui_matrix from "images/func/matrix.png";
import matrix_8_c from "images/func/out/matrix_8_c.png";
import matrix_8_lfe from "images/func/out/matrix_8_lfe.png";
import matrix_8_lr from "images/func/out/matrix_8_lr.png";
import matrix_8_lr_o from "images/func/out/matrix_8_lr_ø.png";
import matrix_8_s from "images/func/out/matrix_8_s.png";
import matrix_8_sb from "images/func/out/matrix_8_sb.png";
import matrix_8_upmix from "images/func/out/matrix_8_upmix.png";

const MatrixPage = () => (
  <Layout docs="/docs/functions/matrix">
    <SEO title="Docs" />

    <Header as="h1">Matrix mixer function</Header>

    <p>
      <svg viewBox="40 113 588 230" className="solid">
        <image href={ui_matrix} />
      </svg>
    </p>

    <p>
      The <strong>matrix mixer</strong> supports custom mapping and mixing of
      any input channels to any output channel. The typical use case is a mono
      or stero input mapped to a 8-channel (7.1) output, enabling sending the
      input audio any channel or speaker.
    </p>

    <p>
      The <strong>input channels</strong> are represented as rows and the{" "}
      <strong>output channels</strong> are represented as columns. An input and
      output is <em>connected</em> by clicking the box corresponding to the row
      and column for the input and output channel. The <strong>number</strong>{" "}
      in the box corresponds to the <strong>attenuation</strong> of that
      connection. The <strong>color</strong> represents the polarity.{" "}
      <strong>Green</strong> color indicates normal polarity, while{" "}
      <strong>red</strong> color signifies a 180&deg; phase shift. The phase is
      swapped by right-clicking the box.
    </p>

    <Message raised style={{ background: "#dddddd" }} icon>
      <Icon name="info" size="big" />
      <Message.Content>
        For stereo channel 1 is the <em>left</em> audio and channel 2 is the{" "}
        <em>right</em> audio. In the screenshot above, input channel 1 (left) is
        sent to output channel 1 (left) at full volume, +0dB, and input channel
        2 (right) is sent to output channel 2 (right). The speaker assignments
        for the full 8 channels can be found in the{" "}
        <Link to="/docs/usage/windows#channels">channels assignments</Link>.
      </Message.Content>
    </Message>

    <p>
      Any number of channels can be sent to any output channel. The matrix mixer
      will automatically reduce the output level to prevent overflow.
    </p>

    <Header as="h2">Matrix examples</Header>

    <p>The following setups shows some stereo to 8 channel routing examples.</p>

    <Table celled size="small" fixed compact stackable>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={5}>Stereo sent to the L and R fronts</Table.Cell>
          <Table.Cell>
            <Image src={matrix_8_lr} fluid />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            Stereo mixed down to mono and sent to the center channel
          </Table.Cell>
          <Table.Cell>
            <Image src={matrix_8_c} fluid />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            Stereo mixed down to mono and sent to the LFE channel
          </Table.Cell>
          <Table.Cell>
            <Image src={matrix_8_lfe} fluid />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            Stereo to the L and R front channels, where the phase for R is
            reversed.
          </Table.Cell>
          <Table.Cell>
            <Image src={matrix_8_lr_o} fluid />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            Stereo sent to the left and right surround channels
          </Table.Cell>
          <Table.Cell>
            <Image src={matrix_8_s} fluid />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            Stereo sent to the left and right surround back channels
          </Table.Cell>
          <Table.Cell>
            <Image src={matrix_8_sb} fluid />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            Stereo upmixed to a surround mix to demonstrate complex and
            composite mixes
          </Table.Cell>
          <Table.Cell>
            <Image src={matrix_8_upmix} fluid />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Layout>
);

export default MatrixPage;

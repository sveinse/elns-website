import React from "react";
import { Header, Image, Grid, List } from "semantic-ui-react";

import Layout from "components/layout";
import SEO from "components/seo";
import { Litem, GR, GC } from "components/shim";

import ui_panner from "images/func/panner.png";
import panner_legend from "images/func/panner_legend.png";
import panner_stereo from "images/func/panner_stereo.gif";
import panner_stereo_p1 from "images/func/panner_stereo_p1.gif";
import panner_stereo_p2 from "images/func/panner_stereo_p2.gif";
import panner_move_crossbar from "images/func/panner_move_crossbar.gif";
import panner_center from "images/func/panner_center.png";

const PannerPage = () => (
  <Layout docs="/docs/functions/panner">
    <SEO title="Docs" />

    <Header as="h1">Panner function</Header>

    <p>
      <svg viewBox="40 113 602 550" className="solid">
        <image href={ui_panner} />
      </svg>
    </p>

    <p>
      The <strong>panner</strong> enables placement of audio sent to a
      multichannel output with smooth and interactive transitions (pans) between
      the channels.
    </p>

    <p>
      The panner is built around a circle of{" "}
      <strong>output audio channels</strong> indicated by their names in grey
      circles. The <strong>red marker</strong> represents where the{" "}
      <em>right</em> <strong>input</strong> channel audio is output to based on
      the position of the marker. It can be moved interactively by clicking and
      dragging the marker. The <em>panning</em> (balance between channels) will
      change in real-time as the marker is moved between the output channels.
    </p>

    <p>
      The <strong>white marker</strong> represents where the <em>left</em> input
      channel audio is sent. In all <code>STEREO</code> modes the white marker
      will mirror or follow the red marker.
    </p>

    <Grid stackable reversed="computer tablet">
      <GR>
        <GC className="fit">
          <Image src={panner_legend} style={{ width: 351 }} />
        </GC>

        <GC className="grow">
          <List bulleted divided>
            <Litem header="Right mark (red)">
              The position of the red marker indicates where the right input
              channel will be sent to.
            </Litem>

            <Litem header="Left mark (white)">
              The position of white marker indicates where the left input
              channel will be sent to.
            </Litem>

            <Litem header="Output channel">Named destination channel</Litem>

            <Litem header="Level">
              The amount of audio sent from the input channel to the output
              channel.
            </Litem>

            <Litem header="Mid-point">
              The point with equal audio levels sent to both adjacent channels
            </Litem>

            <Litem header="Crossbar">
              A line between two arbitrary output channels that the marker may
              follow.
            </Litem>
          </List>
        </GC>
      </GR>
    </Grid>

    <p />

    <p>
      The number of output channels determines how many output channels will be
      available in the circle. Only 2 (LR), 3 (LCR), 4 (LR+Surround), 6
      (LCR+Surround), 8 (LCR+Surround+Surround back) output channels is
      supported.
    </p>

    <Header as="h2">Pan modes</Header>

    <p>
      The panner supports multiple <em>pan modes</em> controlling how the
      left/white marker will behave when the right/red marker is moved. The pan
      mode can be selected from the audio controls on the right side.
    </p>

    <List bulleted divided>
      <Litem header="Stereo">
        <Grid stackable>
          <GR>
            <GC className="grow">
              <p>
                In <code>Stereo</code> mode, the left/white channel marker will
                mirror the right/red channel marker symmetrically, keeping a
                stereo sound image.
              </p>
            </GC>
            <GC className="fit">
              <Image src={panner_stereo} style={{ width: 234 }} />
            </GC>
          </GR>
        </Grid>
      </Litem>

      <Litem header="Mono L / Mono R">
        <Grid stackable>
          <GR>
            <GC className="grow">
              <p>
                In <code>Mono L</code> / <code>Mono R</code> mode, only the left
                or right input channel will be panned to the output channels.
                The other input channel will be ignored.
              </p>
            </GC>
            <GC className="fit">
              <div style={{ width: 234 }} />
            </GC>
          </GR>
        </Grid>
      </Litem>

      <Litem header="Stereo+1">
        <Grid stackable>
          <GR>
            <GC className="grow">
              <p>
                In <code>Stereo+1</code> mode, the left/white input channel
                marker will follow the right/red input channel one channel to
                the left.
              </p>
            </GC>
            <GC className="fit">
              <Image src={panner_stereo_p1} style={{ width: 234 }} />
            </GC>
          </GR>
        </Grid>
      </Litem>

      <Litem header="Stereo+2">
        <Grid stackable>
          <GR>
            <GC className="grow">
              <p>
                In <code>Stereo+2</code> mode, the left/white input channel
                marker will follow the right/red channel marker two channels to
                the left.
              </p>
            </GC>
            <GC className="fit">
              <Image src={panner_stereo_p2} style={{ width: 234 }} />
            </GC>
          </GR>
        </Grid>
      </Litem>
    </List>

    <Header as="h2">Crossbar</Header>

    <Grid stackable reversed="computer tablet">
      <GR>
        <GC className="fit">
          <Image src={panner_move_crossbar} style={{ width: 234 }} />
        </GC>

        <GC className="grow">
          <p>
            The crossbar is a line set between any two points on the circle. It
            represents a path that the marker can placed on. The crossbar
            enables the ability to pan between non-adjacent output channels.
          </p>

          <p>
            The crossbar can be moved by right-clicking and dragging the bar. In
            stereo pan mode, a shadow crossbar will be shown in a mirrored
            location. This path is the path the white/left marker will follow
            when the red/right marker is placed on the crossbar.
          </p>
        </GC>
      </GR>
    </Grid>

    <Header as="h2">Use-case: Center testing</Header>

    <p>
      Setting the number of output channels to 3 sets the panner in a useful
      mode for testing center channel consistency. Move the crossbar to a
      vertical line (as shown in figure). The following marker locations have
      useful properties for testing:
    </p>

    <Grid stackable>
      <GR>
        <GC className="fit">
          <Image src={panner_center} style={{ width: 351 }} />
        </GC>

        <GC className="grow">
          <List bulleted divided>
            <Litem header="A">Ordinary stereo playback into L and R</Litem>

            <Litem header="B">Playback into the center channel only</Litem>

            <Litem header="C">
              Equal output level from center and from L+R in mono
            </Litem>

            <Litem header="D">Mono output from L and R</Litem>

            <Litem header="E">
              Equal output level in stereo output from L and R and center
              channel
            </Litem>
          </List>
        </GC>
      </GR>
    </Grid>

    <p />
    <p>
      By moving the marker along the crossbar from point <strong>D</strong> up
      and down to <strong>B</strong> the audio will move from being played back
      in mono from L and R (point D) and to the center channel only (point B). A
      good setup will have little or no change in timbre and character when
      moving from the L and R main speakers to the center speaker.
    </p>
  </Layout>
);

export default PannerPage;

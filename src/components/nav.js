import React from "react";
import { Icon } from "semantic-ui-react";

export const elns_menu = [
  { to: "/", content: "ELNS" },
  { to: "/page2", content: "Use cases" },
  { to: "/features", content: "Features" },
  { to: "/docs", content: "Documentation" },
  { to: "/download", content: "Download" },
  /*{ to: "/support", content: "Support" },*/
  {
    to: "/sponsor",
    content: (
      <>
        <Icon name="heart outline" color="purple" inverted />
        Sponsor
      </>
    ),
  },
];

// prettier-ignore
export const elns_docs = [
  { path: "docs", menu: "Documentation", link: true,
    children: [

    { path: "start", menu: "Getting started", level: 2, link: true,
      description: "This page is a great place to start if new to ELNS",
    },

    { path: "support", menu: "Support", level: 2, link: true,
      description: "This page contains information about how to get support and report errors.",
    },

    { path: "faq", menu: "FAQ", level: 2, link: true,
      description: "Frequently asked questions",
    },

    { path: "usage", menu: "Usage", link: false,
      title: "Usage and setup",
      description: `
  The usage of ELNS and its user interface documentation`,
      children: [
      { path: "ui", menu: "User interface", link: true,
        description: "The main window and its user interface",
      },
      { path: "settings", menu: "Settings", link: true,
        description: "Settings and dialog screens",
      },
      { path: "windows", menu: "Windows setup", link: true,
        description: `
  This page explains how to setup Windows with multi-channel audio`,
      },
    ]},

    { path: "functions", menu: "Functions", link: false,
      description: `
  Documentation of the ELNS processing functions.`,
      children: [
      { path: "passthrough", menu: "Passthrough", link: true,
        description: `
  Pass audio transparently through ELNS without any processing.`,
      },
      { path: "matrix", menu: "Matrix mixer", link: true,
        description: `
  The matrix mixer supports arbitrary mixing of any audio input to any output.`,
      },
      { path: "panner", menu: "Panner", link: true,
        description: `
  The panner enables placement of stereo or mono audio to multichannel output
  with smooth transitions.`,
      },
      { path: "quantizer", menu: "Quantizer", link: true,
        description: `
  The quantizer demostrates how bit quantization sounds like. It supports setting
  the number of bits to quantize the audio.`,
      },
      { path: "biterror", menu: "Bit error", link: true,
        description: `
  The bit error function demonstrates how audio is perceived when random error
  is injected into the audio stream.`,
      },
    ]},
  ]},
]

import React from "react";
import { Icon } from "semantic-ui-react";

export const elns_menu = [
  { to: "/", content: "ELNS", exact: true },
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
      title: "Frequently asked questions",
      description: "Frequently asked questions",
    },

    { path: "usage", menu: "Usage", link: true,
      description: "The basic usage of ELNS is shown on these pages",
      children: [
      { path: "ui", menu: "User interface", link: true,
        description: "This page shows the basic user interface",
      },
      { path: "windows", menu: "Windows setup", link: true,
        description: `
  This page explains how to setup Windows with multi-channel audio`,
      },
    ]},

    { path: "functions", menu: "Functions", link: true,
      description: `
  The documentation of the functions in ELNS is documented here.`,
      children: [
      { path: "passthrough", menu: "Passthrough", link: true,
        title: "Passthrough function",
        description: `
  This function pass audio transparently through the audio without any
  processing.`,
      },
      { path: "matrix", menu: "Matrix Mixer", link: true,
        title: "Matrix mixer function",
        description: `
  The matrix mixer is a function that allows arbitrary mixing of any audio
  input to any output.`,
      },
      { path: "panner", menu: "Panner", link: true,
        title: "Panner function",
        description: `
  The panner allows placement of stereo or mono audio to multichannel output
  with smooth transitions.`,
      },
      { path: "quantizer", menu: "Quantizer", link: true,
        title: "Quantizer function",
        description: `
  The quantizer demostrates how bit quantization sounds like. It allow setting
  an arbitrary number of bits to quantize the audio.`,
      },
      { path: "biterror", menu: "Bit Error", link: true,
        title: "Bit error function",
        description: `
  The bit error function demonstrates how audio is perceived when random error
  is injected into the audio stream.`,
      },
    ]},
  ]},
]

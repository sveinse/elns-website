import React from "react"
import { Icon } from "semantic-ui-react"

export const elns_menu = [
  { to: "/", content: "ELNS", exact: true },
  { to: "/page2", content: "Show case" },
  { to: "/features", content: "Features" },
  { to: "/docs", content: "Documentation" },
  { to: "/support", content: "Support" },
  {
    to: "/sponsor",
    content: (
      <>
        <Icon name="heart outline" color="purple" inverted />
        Sponsor
      </>
    ),
  },
]

// prettier-ignore
export const elns_docs = [
  { path: "docs", content: "Documentation", children: [
    { path: "usage", content: "Usage", children: [
      { path: "ui", content: "User interface" },
      { path: "windows", content: "Windows setup" },
    ]},
    { path: "functions", content: "Functions", children: [
      { path: "passthrough", content: "Passthrough" },
      { path: "matrix", content: "Matrix Mixer" },
      { path: "panner", content: "Panner" },
      { path: "quantizer", content: "Quantizer" },
      { path: "biterror", content: "Bit Error" },      
    ]},
  ]},
]

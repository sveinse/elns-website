import React from "react";
import { Header, Button, Icon, Grid } from "semantic-ui-react";
import filesize from "filesize";

import Layout from "components/layout";
import SEO from "components/seo";
import { findLatest } from "components/release";
import releases from "release.json";

const Download = () => {
  const latest = findLatest(releases);
  const trains = [
    { train: "prod", name: "Latest release" },
    { train: "beta", name: "BETA release" },
  ];

  return trains.map(train => {
    const info = latest[train.train];
    if (!info || !info.files) return null;
    return (
      <React.Fragment key={train.train}>
        <Header as="h2">
          v{info.version} - {train.name}
        </Header>

        <Grid divided="vertically" className="gridzero">
          {info.files.map(entry => (
            <Grid.Row verticalAlign="middle" key={entry.name}>
              <Grid.Column width="7">
                <a href={entry.url}>{entry.url.split("/").pop()}</a>
              </Grid.Column>
              <Grid.Column width="6">{entry.name}</Grid.Column>
              <Grid.Column width="3" floated="right">
                {filesize(entry.size, { round: true })}
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </React.Fragment>
    );
  });
};

const DownloadPage = () => (
  <Layout>
    <SEO title="Download" />

    <Header as="h1">Download</Header>

    <Download />

    <Header as="h3">More versions</Header>

    <p>
      These files are hosted on GitHub. Additional files and versions are
      available on the release pages
    </p>

    <Button as="a" href="https://github.com/sveinse/elns-release/releases">
      To GitHub
      <Icon name="arrow right" />
    </Button>
  </Layout>
);

export default DownloadPage;

import React from "react";
import { Link } from "react-router-dom";
import {
  Header,
  Image,
  Container,
  List,
  Segment,
  Button,
  Icon,
  Grid,
  Divider,
} from "semantic-ui-react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import releases from "../release.json";
import semver from "semver";
import filesize from "filesize";

const find_latest = relinfo => {
  let latest = {};
  for (let vinfo of relinfo) {
    let sver = vinfo.version.replace("-b", ".0-beta.");
    if (
      !latest[vinfo.train] ||
      semver.gt(sver, latest[vinfo.train].semver, { includePrerelease: true })
    ) {
      latest[vinfo.train] = {
        ...vinfo,
        semver: sver,
      };
    }
  }
  return latest;
};

const DownloadContents = () => {
  const latest = find_latest(releases);
  const trains = [
    { train: "prod", name: "Latest release" },
    { train: "beta", name: "BETA release" },
  ];
  return (
    <>
      <Container text>
        <Header as="h1">Download</Header>

        {trains.map(train => {
          console.log(train.train);
          const info = latest[train.train];
          console.log(info);
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
        })}

        <Header as="h3">More versions</Header>

        <p>
          These files are hosted on GitHub. Additional files and versions are
          available on the release pages
        </p>

        <Button as="a" href="https://github.com/sveinse/elns-release/releases">
          To GitHub
          <Icon name="arrow right" />
        </Button>

        <Segment raised size="large">
          <Header as="h2">MacOS or Linux version?</Header>
          <p>
            ELNS is currently only released for Windows. If you would like to
            use ELNS under MacOS or Linux, I would like to hear from you.
            Releasing for these OS are under consideration, but I'd like hear
            your use case and how you plan to use it. This info is needed for
            planning how and when ELNS shall be released for these OS. Please
            submit an issue on the GitHub project pages.
          </p>
        </Segment>
      </Container>
    </>
  );
};

const DownloadPage = () => (
  <Layout>
    <SEO title="Download" />
    <DownloadContents />
  </Layout>
);

export default DownloadPage;

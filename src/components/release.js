import React from "react";
import semver from "semver";

export const findLatest = relinfo => {
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

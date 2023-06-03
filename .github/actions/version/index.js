const core = require('@actions/core');
const github = require('@actions/github');
const semver = require('semver')

const MAX_VERSION_LEVEL = 100;

try {
  // Ex:1.0.0
  const currentVersion = core.getInput('CURRENT_VERSION');
  const releaseType = core.getInput('RELEASE_TYPE'); // patch - major - minor

  const newVersion = semver.inc(currentVersion, releaseType)

  core.setOutput("NEW_VERSION", newVersion);
} catch (error) {
  core.setFailed(error.message);
}
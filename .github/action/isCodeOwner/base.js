const core = require('@actions/core');
const github = require('@actions/github');
const Codeowners = require('codeowners');

try {
  const username = core.getInput('USERNAME');

  core.info(`\nChecking the user: '${username}' is code owner.`)
  
  const cwd = core.getInput('cwd') || process.cwd()

  const owner = new Codeowners(cwd);

  core.info(`Code Owners file found... Location: ${owner.codeownersFilePath}`)

  const owners = owner.getOwner();

  if(owners.includes(username)){
    core.info(`${username} is code owner`)
    core.setOutput("IS_CODE_OWNER", true);
  }
  else{
    core.info(`${username} is not code owner`)
    core.setOutput("IS_CODE_OWNER", false);
  }
} catch (error) {
  core.setFailed(error.message);
}
const shell = require('shelljs');
const build = require('./build.js');

class initCode {
  getCode(data) {
    shell.cd('mods');
    shell.mkdir('github');
    shell.cd('github');
    let url = '';
    if (data.site == 'github') {
      url = `git@github.com:${data.user}/${data.pname}.git`;
    }
    shell.mkdir(data.user);
    shell.cd(data.user);
    shell.exec('git clone ' + url);
    data.branch = data.branch?data.branch:'master';
    if (data.branch) {
      shell.exec(`git branch remotes/origin/${data.branch}`);
      shell.exec(`git checkout -b ${data.branch}`);
      shell.exec(`git pull origin ${data.branch}`);
    }
    shell.cd('../../../');
  }
}

module.exports = initCode;

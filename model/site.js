const shell = require('shelljs');
const build = require('./build.js');

class initCode {
  getCode(data) {
    console.log(data)
    shell.cd('mods');
    let url = '';
    if (data.site == 'github') {
      url = `git@github.com:${data.user}/${data.pname}.git`;
    }
    shell.mkdir(data.user);
    shell.cd(data.user);
    shell.exec('git clone ' + url);
    console.log(data)
    if (data.branch) {
      shell.exec(`git branch remotes/origin/${data.branch}`);
      shell.exec(`git checkout -b ${data.branch}`);
    }
    shell.cd('../../');

  }
}

module.exports = initCode;

const shell = require('shelljs');
class initCode{
  getCode(data){
    console.log(data)
    shell.cd('mods');
    let url = '';
    if (data.site == 'github') {
      url = `git@github.com:${data.user}/${data.pname}.git`;
    }
    shell.mkdir(data.user);
    shell.cd(data.user);
    shell.exec('git clone ' + url);
    shell.cd('../../');

  }
}

module.exports = initCode;
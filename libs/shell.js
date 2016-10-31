const shell = require('shelljs');

var exec = function*(arg) {
  var promise = new Promise(function(resolve, reject) {
    shell.exec(agr, function(code, stdout, stderr) {
      if (stderr) {
        reject(new Error(stderr));
      } else {
        console.log(new Date(),'b')
        resolve(stdout);
      }
    });
  }, function(error) {
    console.log(error)
  })
  return promise;
}
module.exports = {
  exec: exec
};
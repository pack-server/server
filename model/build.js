const webpack = require('webpack');
const path = require('path');
const _ = require('underscore');
const shell = require('shelljs');
const Logger = require('mini-logger');

var tasks = [];
class build {
  constructor(io) {
    this.io = io  ? io : null;
  }

  addTask(msg) {
    console.log('addTask');
    if (_.where(tasks,{id: msg.socket.id}).length === 0) {
      tasks.push({ id: msg.socket.id, mod: msg.data });
      if (tasks.length == 1) {
        this.runTask(tasks[0]);
      }
    }else{
      this.io.emit('message','亲，您的任务已经在队列中了哦！');
      console.log('aaaa')
    }
  }

  runTask(task) {
    let self = this;
    console.log("runTask");
    console.log(task)
    shell.cd('./mods');
    shell.cd('./' + task.mod)
    shell.exec('npm install', { async: false });
    let config = require('../mods/' + task.mod + '/webpack.config.js');
    self.build(config, task);
  }

  build(config, task) {
    const self = this;
    webpack(config, function(err, status) {
      // console.log(app)
      // if (err || 1) {
      //   Logger('sss')
      // }
      self.io.to(task.id).emit('chat message', task.mod);
      self.deleteTask();
    });
  }

  deleteTask() {
    console.log("deleteTask");
    tasks.shift();
    if (tasks.length > 0) {
      this.runTask(tasks[0]);
    }
  }

}

module.exports = build;

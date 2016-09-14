const webpack = require('webpack');
const path = require('path');
const _ = require('underscore');
var tasks = [];
class build{
  constructor(io) {
    this.io = io;
  }

  addTask(msg){
    console.log('addTask');
    tasks.push({id:msg.socket.id,mod:msg.data});
    if (tasks.length == 1) {
      this.runTask(tasks[0]);
    }
  }

  runTask(task){
    let self = this;
    console.log("runTask");
    let config = require('../mods/'+ task.mod +'/webpack.config.js');
    webpack(config, function () {
      self.io.to(task.id).emit('chat message',task.mod);
      self.deleteTask();
    });
  }

  deleteTask(){
    console.log("deleteTask");
    tasks.shift();
    if (tasks.length >0) {
      this.runTask(tasks[0]);
    }
  }
  
}

module.exports = build;

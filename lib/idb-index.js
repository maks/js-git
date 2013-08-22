"use strict";

var IDBStore = require('./idbstore.js');

module.exports = function idbIndex() {
  return {
    init: init,
    add: add,
    remove: remove,
    read: read,
    list: list
  };
};
var theDB;

function init(name, callback) {
  theDB = new IDBStore({
      	storeName: name,
        dbVersion: 1,
  }, function(){
       callback();
  },
  callback);        
}

function add(path, sha1, stat, callback) {

}

function remove(path, callback) {
}

function read(path, callback) {
}

function list() {
}

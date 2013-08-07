/*globals require, module */
"use strict";

var fs;
var pathJoin = require('path').join;
var pathResolve = require('path').resolve;

module.exports = chroot;
chroot.read = read;
chroot.read = read;
chroot.write = write;
chroot.unlink = unlink;
chroot.readlink = readlink;
chroot.symlink = symlink;
chroot.readdir = readdir;
chroot.rmdir = rmdir;
chroot.mkdir = mkdir;
chroot.rename = rename;
chroot.mkdir = mkdir;


function chroot(html5fs, root) {
  fs = html5fs;
  // no such thing as cwd inbrowser
  //root = pathResolve(process.cwd(), root);
  var exports = wrap(chroot);
  exports.root = root;
  exports.stat = wrap(stat);
  exports.read = wrap(read);
  exports.write = wrap(write);
  exports.unlink = wrap(unlink);
  exports.readlink = wrap(readlink);
  exports.symlink = wrap(symlink);
  exports.readdir = wrap(readdir);
  exports.rmdir = wrap(rmdir);
  exports.mkdir = wrap(mkdir);
  exports.rename = wrap(rename, true);
  return exports;

  function wrap(fn, two) {
    return function () {
      arguments[0] = pathJoin(root, pathJoin("/", arguments[0]));
      if (two) arguments[1] = pathJoin(root, pathJoin("/", arguments[1]));
      return fn.apply(this, arguments);
    };
  }
}

// Given a path, return a continuable for the stat object.
function stat(path, callback) {
  if (!callback) return stat.bind(this, path);
  fs.root.getFile(path, {}, function(fileEntry) {
    fileEntry.file(function(file) {
        callback(null, {
          mtime: file.lastModifiedDate.getTime(),
          size: file.size
        });
    }, errorHandler);
  }, errorHandler);
}

function read(path, encoding, callback) {
  if (typeof encoding === "function") {
    callback = encoding;
    encoding = undefined;
  }
  if (!callback) return read.bind(this, path, encoding);
  fs.root.getFile(path, {}, function(fileEntry) {
    fileEntry.file(function(file) {
       var reader = new FileReader();
       reader.onloadend = function(e) {
         callback(null, this.result);
       };
       if(encoding) {
         reader.readAsText(file);
       } else {
         reader.readAsArrayBuffer();
       }
    }, errorHandler);
  }, errorHandler);
}

function write(path, value, encoding, callback) {
  if (!callback) return write.bind(this, path, value, encoding);
  //TODO
  //fs.writeFile(path, value, encoding, callback);
}

function unlink(path, callback) {
  if (!callback) return unlink.bind(this, path);
  //TODO
  //fs.unlink(path, callback);
}

function readlink(path, callback) {
  if (!callback) return readlink.bind(this, path);
  //TODO
  //fs.readlink(path, callback);
}

function symlink(path, value, callback) {
  if (!callback) return symlink.bind(this, path, value);
  //TODO
  //fs.symlink(path, value, callback);
}

function readdir(path, callback) {
  if (!callback) return readdir.bind(this, path);
  //TODO
  //fs.readdir(path, callback);
}

function rmdir(path, callback) {
  if (!callback) return rmdir.bind(this, path);
  //TODO
  //fs.rmdir(path, callback);
}

function mkdir(path, callback) {
  if (!callback) return mkdir.bind(this, path);
  //TODO
  //fs.mkdir(path, callback);
}

function rename(source, target, callback) {
  if (!callback) return rename.bind(this, source, target);
  //TODO
  //fs.rename(source, target, callback);
}

function errorHandler(e) {
  var msg = '';
  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'QUOTA_EXCEEDED_ERR';
      break;
    case FileError.NOT_FOUND_ERR:
      msg = 'NOT_FOUND_ERR';
      break;
    case FileError.SECURITY_ERR:
      msg = 'SECURITY_ERR';
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'INVALID_MODIFICATION_ERR';
      break;
    case FileError.INVALID_STATE_ERR:
      msg = 'INVALID_STATE_ERR';
      break;
    default:
      msg = 'Unknown Error';
      break;
  };
  console.log('Error: ' + msg);
}

// Bootstrap the platform to run on node.js
require('../../lib/platform.js')(require('js-git-browser-platform'));

// Load the libraries
var idbDb = require('../../lib/idb-db.js');
var wrap = require('../../lib/repo.js');

// Mock data for generating some history
var author = "Tim Caswell <tim@creationix.com>";
var committer = "JS-Git <js-git@creationix.com>";
var commits = {
  "Initial Commit\n": {
    "README.md": "# This is a test Repo\n\nIt's generated entirely by JavaScript\n"
  },
  "Add package.json and blank module\n": {
    "README.md": "# This is a test Repo\n\nIt's generated entirely by JavaScript\n",
    "package.json": '{\n  "name": "awesome-lib",\n  "version": "3.1.3",\n  "main": "awesome.js"\n}\n',
    "awesome.js": 'module.exports = function () {\n  throw new Error("TODO: Implement Awesome");\n};\n'
  },
  "Implement awesome and bump version to 3.1.4\n": {
    "README.md": "# This is a test Repo\n\nIt's generated entirely by JavaScript\n",
    "package.json": '{\n  "name": "awesome-lib",\n  "version": "3.1.4",\n  "main": "awesome.js"\n}\n',
    "awesome.js": 'module.exports = function () {\n  return 42;\n};\n'
  }
};

var repo = wrap(idbDb("test.git", true));
repo.init(function (err) {
  if (err) throw err;

  console.log("Git database Initialized");

  var parent;
  serialEach(commits, function (message, files, next) {
    // Start building a tree object.
    var tree = {};
    parallelEach(files, function (name, contents, next) {
      repo.saveBlob(contents, function (err, hash) {
        if (err) return next(err);
        tree[name] = {
          mode: 0100644,
          hash: hash
        };
        next();
      });
    }, function (err) {
      if (err) return next(err);
      repo.saveTree(tree, function (err, hash) {
        if (err) return next(err);
        var now = gitDate(new Date);
        var commit = {
          tree: hash,
          parent: parent,
          author: author + " " + now,
          committer: committer + " " + now,
          message: message
        };
        if (!parent) delete commit.parent;
        repo.saveCommit(commit, function (err, hash) {
          if (err) return next(err);
          parent = hash;
          repo.updateHead(hash, next);
        });
      });
    });
  }, function (err) {
    if (err) throw err;
    console.log("Done");
  });

});

// Format a js data object into the data format expected in git commits.
function gitDate(date) {
  var timezone = date.getTimezoneOffset() / 60;
  var seconds = Math.floor(date.getTime() / 1000);
  return seconds + " " + (timezone > 0 ? "-0" : "0") + timezone + "00";
}

// Mini control-flow library
function serialEach(object, fn, callback) {
  var keys = Object.keys(object);
  next();
  function next(err) {
    if (err) return callback(err);
    var key = keys.shift();
    if (!key) return callback();
    fn(key, object[key], next);
  }
}
function parallelEach(object, fn, callback) {
  var keys = Object.keys(object);
  var left = keys.length + 1;
  var done = false;
  keys.forEach(function (key) {
    fn(key, object[key], check);
  });
  check();
  function check(err) {
    if (done) return;
    if (err) {
      done = true;
      return callback(err);
    }
    if (--left) return;
    done = true;
    callback();
  }
}


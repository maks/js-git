// Inject the dependencies to fsDb to work using node.js
var platform = require('./chrome');
// And create a db instance
var db = require('../lib/idb-db.js')(platform)();
// And wrap in a repo API
var repo = require('../lib/repo.js')(db);

console.log("Looking up hash that HEAD points to...");
repo.getHead(function (err, head) {
  if (err) throw err;

  console.log("HEAD", head);
  return loadCommit(head);

});

function loadCommit(hash) {
  repo.loadCommit(hash, function (err, commit) {
    if (err) throw err;
    console.log("COMMIT", hash, commit);
    loadTree(commit.tree);
    if (commit.parents) {
      commit.parents.forEach(loadCommit);
    }
  });
}

function loadTree(hash) {
  repo.loadTree(hash, function (err, tree) {
    if (err) throw err;
    console.log("TREE", hash, tree);
    tree.forEach(function (entry) {
      repo.loadBlob(entry.hash, function (err, blob) {
        if (err) throw err;
        console.log("BLOB", entry.hash, blob);
      });
    });
  });
}
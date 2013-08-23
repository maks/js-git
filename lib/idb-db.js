var bops = require('bops');
var IDBStore = require('./idbstore.js');
var each = require('../helpers/each.js');
var parallel = require('../helpers/parallel.js');
var serial = require('../helpers/serial.js');
var extract = require('./extract.js');

module.exports = function (platform) {
  var sha1 = extract(platform, "sha1");
  var inflate = extract(platform, "inflate");
  var deflate = extract(platform, "deflate");
  var theDB;
  var reponame;
  
  return idbDb;
  
  function idbDb(reponame, bare) {   
    return {
      write: write,
      read: read,
      save: save,
      load: load,
      remove: remove,
      init: init
    };

    function write(path, data, callback) {
      if (!callback) return write.bind(this, path, data);
      theDB.put({ id: path, data: data }, 
                function(keypath){ callback();}, callback);
    }

    function read(path, callback) {
      //TODO: promise version
      //if (!callback) return fs.read(path, "ascii");
      theDB.get(path, function(obj) {
        callback(null, obj.data);
      }, callback);
    }

    function save(object, callback) {
      if (!callback) return save.bind(this, object);
      var buffer = encode(object);
      var hash = sha1(buffer);
      deflate(buffer, function (err, deflated) {
        if (err) return callback(err);
        write(hashToPath(hash), deflated, function (err) {
          if (err) return callback(err);
          callback(null, hash);
        });
      });
    }

    function load(hash, callback) {
      if (!callback) return load.bind(this, hash);
      
      theDB.get(hash, function(obj) {
        if (obj === null) callback();
        inflate(deflated, function (err, buffer) {
          if (err) return callback(err);
          if (sha1(buffer) !== hash) {
            return callback(new Error("SHA1 checksum failed for " + hash));
          }
          var object;
          try { object = decode(buffer); }
          catch (err) { return callback(err); }
          callback(null, object);
        });        
      }, callback);
      
      fs.read(hash, function (err, deflated) {
        if (err) return callback(err);
        inflate(deflated, function (err, buffer) {
          if (err) return callback(err);
          if (sha1(buffer) !== hash) {
            return callback(new Error("SHA1 checksum failed for " + hash));
          }
          var object;
          try { object = decode(buffer); }
          catch (err) { return callback(err); }
          callback(null, object);
        });
      });
    }

    function remove(hash, callback) {
      if (!callback) return remove.bind(this, hash);
      theDB.remove(hash, function() { callback();}, callback);
    }

    function init(callback) {
      if (!callback) return init.bind(this);
      theDB = new IDBStore({
		storeName: reponame,
        dbVersion: 1
      }, function() {
        theDB.batch([
          { type: "put", 
            value: {
              id: "HEAD",
              HEAD: "ref: refs/heads/master"
            }
          }
        ], function(){callback();}, callback);        
      });
    }
  }
};

function encode(object) {
  return bops.join([
    bops.from(object.type + " " + object.body.length + "\0"),
    object.body
  ]);
}

function indexOf(buffer, abyte, i) {
  i |= 0;
  var length = buffer.length;
  for (;;i++) {
    if (i >= length) return -1;
    if (buffer[i] === abyte) return i;
  }
}

function parseAscii(buffer, start, end) {
  var val = "";
  while (start < end) {
    val += String.fromCharCode(buffer[start++]);
  }
  return val;
}

function parseDec(buffer, start, end) {
  var val = 0;
  while (start < end) {
    val = val * 10 + buffer[start++] - 0x30;
  }
  return val;
}

// Partially parse an object stream to extract out the type and size headers.
function decode(buffer) {
  var space = indexOf(buffer, 0x20);
  if (space < 0) throw new Error("Invalid git object buffer");
  var nil = indexOf(buffer, 0x00, space);
  if (nil < 0) throw new Error("Invalid git object buffer");
  var body = bops.subarray(buffer, nil + 1);
  var size = parseDec(buffer, space + 1, nil);
  if (size !== body.length) throw new Error("Invalid body length.");
  return {
    type: parseAscii(buffer, 0, space),
    body: body
  };
}

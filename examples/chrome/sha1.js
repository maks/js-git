var Rusha = require('./lib/rusha');

module.exports = sha1;
function sha1(buffer) {
  var r = new Rusha();
  return r.digest(buffer);  
}


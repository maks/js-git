var sha1 = require('./sha1.js');

module.exports = function(input) {
  console.log(input+' sha1:', sha1(input));
}

//grab mongoose module
var mongoose = require('mongoose');

//define model
//exports allows us to pass this to other files
module.exports = mongoose.model('Heroes', {
  name : {type : String, default: ''}
});

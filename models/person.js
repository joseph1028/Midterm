var mongoose = require('mongoose');
mongoose.connect('mongodb://joseph1028:joseph@ds023438.mlab.com:23438/midtermproject');
// mongoose.connect('mongodb://localhost:27017/person');
var Schema = mongoose.Schema;

// Define Schema
var personSchema = new Schema({
  firstname : String,
  lastname  : String,
  age       : Number,
  occupation: String
});

module.exports = mongoose.model('Person', personSchema);

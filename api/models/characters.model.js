const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
name: {
  type: String,
  unique: true,
  required: true,
},
characterClass: {
  type: String,
  unique: true,
  required: true,
},
level: {
  type: Number,
  unique: false,
  required: true,
},
playerName: {
  type: String,
  unique: false,
  required: true,
}
});


module.exports = characterSchema;
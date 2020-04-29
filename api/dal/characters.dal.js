// dal = data access layer

const mongoose = requrie('mongoose');
const characterSchema = require('../models/characters.model');

// CRUD stands for CREATE, READ, UPDATE, DELETE
characterSchema.static = {
  create: function(data, callback){
    const character = new this(data);
    character.save(callback);
  },
  get: function(query, callback){
    this.find(query, callback);
  },
  update: function(query, data, callback){
    this.findOneAndUpdate(query, {$set: data}, callback);
  },
  delete: function(query, callback){
    this.fineOneAndDelete(query, callback);
  },
}


const characterModel = mongoose.model('Characters',characterSchema);
module.exports = characterModel;

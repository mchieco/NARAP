const mongoose = require('mongoose');
// var bcrypt = require("bcrypt-nodejs");
const { Schema } = mongoose;
const raSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  locked: {
    type: Boolean,
    required: true,
    default: false,
  },
},
{ timestamps: true });

const RA = mongoose.model('RA', raSchema, 'RAs');

module.exports = RA;

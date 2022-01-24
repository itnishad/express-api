/**
 * Car Model
 * 
 * @version 1.0.0
 * 
 * @author Faysal
 */

 var mongoose = require('mongoose');

 var UserSchema = new mongoose.Schema({
 
     fullName: String,
     email: String,
     password: String,
     // System
     createAt: Date,
     updateAt: {type: Date, default: Date.now},
 },
 {
     toJSON: { virtuals: true },
     toObject: { virtuals: true }
 });
 
 module.exports = mongoose.model("User", UserSchema);
 
/**
 * Car Model
 * 
 * @version 1.0.0
 * 
 * @author Rafaat
 */

var mongoose = require('mongoose');

var CarSchema = new mongoose.Schema({

    brand: String,
    modelName: String,
    modelYear: String,
    engineCC: Number,
    listPrice: Number,
    // System
    createAt: Date,
    updateAt: {type: Date, default: Date.now},
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

module.exports = mongoose.model("Car", CarSchema);

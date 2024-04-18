const express = require('express');
const mongoose = require('mongoose');

// Create a Mongoose schema and model for 'Locality'
const LocalitySchema = new mongoose.Schema({
  name: String,
  City: String,
  State: String,
  rating: {
    overall: Number,
    price: Number,
    availability:Number,
    offices_rating:Number,
    restraunts: Number
  },
  description: String,
  livibality: String,
  rentRange :{
    min: Number,
    max:Number
  },
  landmarks: Array, //are houses available in the area
  geoTag: String// locality geo tag

});
LocalitySchema.index({name:1});
const Locality = mongoose.model('Localities', LocalitySchema);

module.exports={
  Locality
}
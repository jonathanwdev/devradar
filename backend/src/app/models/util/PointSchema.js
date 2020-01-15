const mongoose = require('mongoose');

const PointSchema = mongoose.Schema({
  type: {
    type:String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    require:true,
  },

});

module.exports = PointSchema;
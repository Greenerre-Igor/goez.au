const mongoose = require('mongoose');

const TesimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  job: {
    type: String,
    required: true
  },
  feedback: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model('testimonial', TesimonialSchema);
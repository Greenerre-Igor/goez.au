const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contact_number: {
    type: String,
    require: true
  },
  service: {
    type: String,
    enum: ["Airport Transfer", "Corporate events and conferences", "Local Tours", "Milestones Events"],
    default: 'Airport Transfer',
  },
  date: {
    type: String
  },
  time: {
    type: String
  }
  
});

module.exports = mongoose.model('enquire', InquirySchema);
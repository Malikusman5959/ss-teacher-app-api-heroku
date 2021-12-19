const mongoose = require("mongoose");

const Complaint = new mongoose.Schema({
  
  status: {
    type: String,
    required: true,
  },

  RegNo: {
    type: String,
    required: true,
  },

  studentId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Student",
  },

  date: {
    type: String,
    required: true,
  },
  
  filedBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Teacher",
  },

  subject: {
    type: String,
    required: true,
  },
  
  description: {
    type: String,
    required: true,
  },

  respondent: {
    type: String,
    
  },
  remarks: {
    type: String,
    
  },
});
module.exports = mongoose.model("Complaint", Complaint);




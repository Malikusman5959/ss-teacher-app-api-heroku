const mongoose = require("mongoose");

const Violation = new mongoose.Schema({
  violations: [
    {
      type: String,
    },
  ],

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

  timeDetected: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Violation", Violation);

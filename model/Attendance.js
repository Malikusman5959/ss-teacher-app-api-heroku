const mongoose = require("mongoose");

const Attendance = new mongoose.Schema({

  // Present,Absent,OnLeave

  status: {
    type: String,
    required: true,
  },

  RegNo: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  //
  name: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Attendance", Attendance);

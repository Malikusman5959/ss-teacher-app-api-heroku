const mongoose = require("mongoose");

const RFIDAttendance = new mongoose.Schema({

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
},
{timestamps : true});
module.exports = mongoose.model("RFIDAttendance", RFIDAttendance);

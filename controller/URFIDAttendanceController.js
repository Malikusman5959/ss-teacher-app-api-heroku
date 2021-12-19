const rfidaAttendanceModel = require("../model/RFIDAttendance");

// add attendance
exports.addAttendance = async function (req, res) {
  try {
    const attendance = await rfidaAttendanceModel.create(req.body);

    res.status(201).json({
      status: "RFID Attendance Added Successfully",
      attendance: attendance,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed to add",
      message: e,
    });
  }
};


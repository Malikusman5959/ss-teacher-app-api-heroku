const _Attendance = require("../model/Attendance");

// Methods
// addAttendance

// to Seach attendance (date,class,reg)
exports.addAttendance = async function (req, res) {
  try {
    console.log(req.body);

    const addAttendance = await _Attendance.create(req.body);
    console.log(req.body);

    res.status(201).json({
      status: "success",
      data: {
        attendance: addAttendance,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

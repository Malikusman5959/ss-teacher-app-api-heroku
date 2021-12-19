const express = require("express");
const attendanceController = require("../controller/UAttendanceController");
const attendanceRouter = express.Router();

attendanceRouter.route("/attendance")
.get(attendanceController.getDailyAttendance)
.post(attendanceController.addAttendance)
.patch(attendanceController.updateAttendance);

module.exports = attendanceRouter;




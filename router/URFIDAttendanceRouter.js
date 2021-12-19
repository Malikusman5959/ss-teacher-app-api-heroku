const express = require("express");
const rfidAttendanceController = require("../controller/URFIDAttendanceController");
const rfidAttendanceRouter = express.Router();

rfidAttendanceRouter.route("/rfidattendance")
.post(rfidAttendanceController.addAttendance);

module.exports = rfidAttendanceRouter;




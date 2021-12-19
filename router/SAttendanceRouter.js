const express = require("express");
const attendanceController = require("./../controller/SAttendanceController");
const attendanceRouter = express.Router();
// POST
// localhost:8000/v1/member

attendanceRouter.route("/attendance").post(attendanceController.addAttendance);
//   .get(memberController.getAllMembers);

// POST
// localhost:8000/v1/member/12345

// attendanceRouter
//   .route("/member/:id")
//   .get(memberController.getMemeberByID)
//   .patch(memberController.updateMemberByID);
module.exports = attendanceRouter;

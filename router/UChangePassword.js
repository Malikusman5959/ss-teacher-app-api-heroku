const express = require("express");
const teacherController = require("../controller/UTeacherController");
const UChangePassword = express.Router();

UChangePassword.route("/teacher/changePassword").post(teacherController.changePassword);

module.exports = UChangePassword;

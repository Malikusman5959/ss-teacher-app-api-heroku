const express = require("express");
const teacherController = require("../controller/UTeacherController");
const UTeacherLogin = express.Router();

UTeacherLogin.route("/login").post(teacherController.login);

module.exports = UTeacherLogin;

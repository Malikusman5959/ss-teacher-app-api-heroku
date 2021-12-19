const express = require("express");
const teacherController = require("../controller/UTeacherController");
const UTeacherRouter = express.Router();

UTeacherRouter.route("/teacher/add").post(teacherController.addTeacher);
UTeacherRouter.route("/teacher/getAll").get(teacherController.getAllTeachers);

module.exports = UTeacherRouter;

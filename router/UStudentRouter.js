const express = require("express");
const studentController = require("../controller/UStudentController");
const studentRouter = express.Router();

studentRouter.route("/student")
.get(studentController.getStudents)
.post(studentController.addStudent)

studentRouter.route("/studentById")
.get(studentController.getStudent)

studentRouter.route("/studentByRFID")
.get(studentController.getStudentByRFID)

studentRouter.route("/studentsOfClasses")
.post(studentController.getStudentsOfClasses)

module.exports = studentRouter;



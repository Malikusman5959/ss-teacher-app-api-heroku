const express = require("express");
const leaveApplicationsController = require("../controller/ULeaveApplicationController");
const homeWorkRouter = express.Router();

homeWorkRouter.route("/leaveapplication")
.get(leaveApplicationsController.getTodaysLeaveApplications)
.post(leaveApplicationsController.addLeaveApplication)
.patch(leaveApplicationsController.updateLeaveApplication)

homeWorkRouter.route("/leaveapplications")
.get(leaveApplicationsController.getAllLeaveApplications)


module.exports = homeWorkRouter;



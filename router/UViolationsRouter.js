const express = require("express");
const violationsController = require("../controller/UViolationsController");
const violationsRouter = express.Router();

violationsRouter.route("/violation")
.get(violationsController.getPastWeekViolations)
.post(violationsController.addViolation)
.patch(violationsController.updateViolation)
.delete(violationsController.deleteViolation);

violationsRouter.route("/violationById")
.get(violationsController.getViolationById)

violationsRouter.route("/violations")
.get(violationsController.getAllViolations)


module.exports = violationsRouter;













const express = require("express");
const complaintsController = require("../controller/UComplaintsController");
const complaintsRouter = express.Router();

complaintsRouter.route("/complaint")
.get(complaintsController.getPastMonthComplaints)
.post(complaintsController.addComplaint)
.patch(complaintsController.updatecomplaint)
.delete(complaintsController.deletecomplaint);

complaintsRouter.route("/complaints")
.get(complaintsController.getAllComplaints)


module.exports = complaintsRouter;

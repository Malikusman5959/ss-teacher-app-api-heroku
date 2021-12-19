const express = require("express");
const fineController = require("../controller/UFinesController");
const fineRouter = express.Router();

fineRouter.route("/fine")
.get(fineController.getPastWeekfines)
.post(fineController.addFine)

module.exports = fineRouter;



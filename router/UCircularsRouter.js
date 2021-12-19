const express = require("express");
const circularController = require("../controller/UCircularsController");
const circularRouter = express.Router();

circularRouter.route("/circular")
.get(circularController.getPastMonthcirculars)
.post(circularController.addCircular)

module.exports = circularRouter;



const express = require("express");
const homeWorkController = require("../controller/UHomeWorkController");
const homeWorkRouter = express.Router();

homeWorkRouter.route("/homework")
.get(homeWorkController.getPastWeekHomeWorks)
.post(homeWorkController.addHomeWork)
.patch(homeWorkController.updateHomeWork)
.delete(homeWorkController.deleteHomeWork);

homeWorkRouter.route("/homeworks")
.get(homeWorkController.getAllHomeWorks)


module.exports = homeWorkRouter;



const express = require("express");
const ParentController = require("../controller/extra");
const ParentRouter = express.Router();
// POST
// localhost:8000/v1/member

ParentRouter.route("/Parent").post(ParentController.addParent);
ParentRouter.route("/Visit").post(ParentController.addVisit);
ParentRouter.route("/Parent").get(ParentController.getAllParents);
//   .get(memberController.getAllMembers);

// POST
// localhost:8000/v1/member/12345

// ParentRouter
//   .route("/member/:id")
//   .get(memberController.getMemeberByID)
//   .patch(memberController.updateMemberByID);
module.exports = ParentRouter;




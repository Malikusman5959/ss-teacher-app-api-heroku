const _Parent = require("../model/Parent");
const _Visit = require("../model/Visit");

// Methods

exports.addParent  = async function (req, res) {
  try {
    const addParent  = await _Parent .create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        Parent: addParent
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};



exports.addVisit  = async function (req, res) {
  try {
    const addVisit  = await _Visit .create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        Visit: addVisit
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};




exports.getAllParents = async function (req, res) {
  try {
    const addParent  = await _Parent .find();

    res.status(201).json({
      status: "success",
      data: {
        Parent: addParent
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};





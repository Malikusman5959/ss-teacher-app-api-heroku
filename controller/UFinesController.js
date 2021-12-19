const fineModel = require("../model/Fine");


// add fine
exports.addFine = async function (req, res) {
  try {
    const fine = await fineModel.create(req.body);

    res.status(201).json({
      status: "fine Added Successfully",
      fine: fine,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed to add",
      message: e,
    });
  }
};


// get past week fines
exports.getPastWeekfines = async function (req, res) {

  try {
    var query = require("url").parse(req.url, true).query;
    var date = query.date;
    var classs = query.classs;

    var regex = new RegExp(classs);  
    var fine = await fineModel.find({date :  {$gte: date} , RegNo : {$regex : regex}}).populate('studentId')

    if (fine.length == 0)
    {
      res.status(201).json({
        status: "fines Not Found",
          fine: fine,
      });
    }

    else
    {
      res.status(201).json({
        status: "fines loaded Successfull",
          fine: fine,
      });
    }
    
    
  } catch (e) {
    res.status(400).json({
      status: " Failed",
    });
  }

};



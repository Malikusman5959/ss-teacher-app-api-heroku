const circularModel = require("../model/Circular");


// add circular
exports.addCircular = async function (req, res) {
  try {
    const circular = await circularModel.create(req.body);

    res.status(201).json({
      status: "circular Added Successfully",
      circular: circular,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed to add",
      message: e,
    });
  }
};


// get past month circulars
exports.getPastMonthcirculars = async function (req, res) {

  try {
    var query = require("url").parse(req.url, true).query;
    var date = query.date;
    var classs = query.classs;

    var circular = await circularModel.find({date :  {$gte: date} , classes : classs})

    if (circular.length == 0)
    {
      res.status(201).json({
        status: "circulars Not Found",
          circular: circular,
      });
    }

    else
    {
      res.status(201).json({
        status: "circulars loaded Successfull",
          circular: circular,
      });
    }
    
    
  } catch (e) {
    res.status(400).json({
      status: " Failed",
      error : e
    });
  }

};



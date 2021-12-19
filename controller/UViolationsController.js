const violationModel = require("../model/Violation");


// add violation
exports.addViolation = async function (req, res) {
  try {
    const violation = await violationModel.create(req.body);

    res.status(201).json({
      status: "Violation Added Successfully",
      Violation: violation,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed to add",
      message: e,
    });
  }
};


exports.getViolationById = async function (req, res) {

  try {
    var query = require("url").parse(req.url, true).query;
    var id = query.id;
  
    var violation = await violationModel.findById(id)

    if (violation)
    {
      res.status(201).json({
        status: "Violation Found",
          violation: violation,
      });
    }

    else
    {
      res.status(201).json({
        status: "Violation not found",
          violation: violation,
      });
    }
    
    
  } catch (e) {
    res.status(400).json({
      status: " Failed",
    });
  }

};


// get past week violations
exports.getPastWeekViolations = async function (req, res) {

  try {
    var query = require("url").parse(req.url, true).query;
    var date = query.date;
    var classs = query.classs;

    var regex = new RegExp(classs);  
    var violation = await violationModel.find({date :  {$gte: date} , RegNo : {$regex : regex}}).populate("studentId")

    if (violation.length == 0)
    {
      res.status(201).json({
        status: "Violations Not Found",
          violation: violation,
      });
    }

    else
    {
      res.status(201).json({
        status: "Violations loaded Successfull",
          violation: violation,
      });
    }
    
    
  } catch (e) {
    res.status(400).json({
      status: " Failed",
    });
  }

};


// get all violations
exports.getAllViolations = async function (req, res) {

  try {
  
    var violation = await violationModel.find()

    if (violation.length == 0)
    {
      res.status(201).json({
        status: "Violations Not Found",
          violation: violation,
      });
    }

    else
    {
      res.status(201).json({
        status: "Violations loaded Successfull",
          violation: violation,
      });
    }
    
    
  } catch (e) {
    res.status(400).json({
      status: " Failed",
    });
  }

};


//update violation
exports.updateViolation = async function (req, res) {
  try {

    var query = require("url").parse(req.url, true).query;
    var RegNo = query.RegNo;
    var date = query.date;

    var violation = await violationModel.findOneAndUpdate({RegNo : RegNo , date : date } , {status : 'Verified' , violations : req.body} , {new : true})

    if (violation == null)
    {
      res.status(400).json({
        status: "Unsuccessfull",
        violation: violation,
      });
    }

    else
    {
      res.status(200).json({
        status: "Violation Updated Successfull",
        violation: violation,
      });
    }
    

  } catch (e) {
    res.status(400).json({
      status: "Failed",
    });
  }
};

//delete violation by id
exports.deleteViolation = async function (req, res) {
  try {

    var query = require("url").parse(req.url, true).query;
    var id = query.id;

    var violation = await violationModel.findByIdAndDelete (id)

    if (violation == null)
    {
      res.status(400).json({
        status: "Unsuccessfull",
        violation: violation,
      });
    }

    else
    {
      res.status(200).json({
        status: "Deleted Successfully",
        violation: violation,
      });
    }
    
    

  } catch (e) {
    res.status(400).json({
      status: "Login Failed",
    });
  }
};


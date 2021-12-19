const leaveApplicationModel = require("../model/LeaveApplication");

// add leaveApplication
exports.addLeaveApplication = async function (req, res) {
  try {
    const leaveApplication = await leaveApplicationModel.create(req.body);

    res.status(201).json({
      status: "leaveApplication Added Successfully",
      leaveApplication: leaveApplication,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e,
    });
  }
};


// get todays leaveApplications
exports.getTodaysLeaveApplications = async function (req, res) {

  try {
    var query = require("url").parse(req.url, true).query;
    var date = query.date;
    var classs = query.classs;

    var regex = new RegExp(classs);  
    var leaveApplication = await leaveApplicationModel.find({date : {$gte: date} ,RegNo : {$regex : regex}}).populate('studentId')

    if (leaveApplication.length == 0)
    {
      res.status(201).json({
        status: "leaveApplications Not Found",
          leaveApplication: leaveApplication,
      });
    }

    else
    {
      res.status(201).json({
        status: "leaveApplications loaded Successfull",
          leaveApplication: leaveApplication,
      });
    }
    
    
  } catch (e) {
    res.status(400).json({
      status: " Failed",
    });
  }

};



// get all leaveApplications
exports.getAllLeaveApplications = async function (req, res) {

  try {
   
    var leaveApplication = await leaveApplicationModel.find()

    if (leaveApplication.length == 0)
    {
      res.status(201).json({
        status: "leaveApplications Not Found",
          leaveApplication: leaveApplication,
      });
    }

    else
    {
      res.status(201).json({
        status: "leaveApplications loaded Successfull",
          leaveApplication: leaveApplication,
      });
    }
    
    
  } catch (e) {
    res.status(400).json({
      status: " Failed",
    });
  }

};


//update leaveApplication
exports.updateLeaveApplication = async function (req, res) {

  try {

    var query = require("url").parse(req.url, true).query;
    var id = query.id;

    var leaveApplication = await leaveApplicationModel.findByIdAndUpdate(id , {status : 'Approved'} , {new : true})

    if (leaveApplication == null)
    {
      res.status(400).json({
        status: "Unsuccessfull",
        leaveApplication: leaveApplication,
      });
    }

    else
    {
      res.status(200).json({
        status: "leaveApplication Updated Successfull",
        leaveApplication: leaveApplication,
      });
    }
    

  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message : req.body
    });
  }
};


const complaintModel = require("../model/Complaint");

// add Complaint
exports.addComplaint = async function (req, res) {
  try {
    const complaint = await complaintModel.create(req.body);

    res.status(201).json({
      status: "Complaint Added Successfully",
      complaint: complaint,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e,
    });
  }
};


// get past month Complaints
exports.getPastMonthComplaints = async function (req, res) {

  try {
    var query = require("url").parse(req.url, true).query;
    var date = query.date;
    var classs = query.classs;

    var regex = new RegExp(classs);  
    var complaint = await complaintModel.find({date : {$gte: date} , RegNo : {$regex : regex}}).populate('studentId').populate('filedBy')

    if (complaint.length == 0)
    {
      res.status(201).json({
        status: "complaints Not Found",
          complaint: complaint,
      });
    }

    else
    {
      res.status(201).json({
        status: "complaints loaded Successfull",
          complaint: complaint,
      });
    }
    
    
  } catch (e) {
    res.status(400).json({
      status: " Failed",
    });
  }

};


// get all Complaints
exports.getAllComplaints = async function (req, res) {

  try {

    var complaint = await complaintModel.find()

    if (complaint.length == 0)
    {
      res.status(201).json({
        status: "complaints Not Found",
          complaint: complaint,
      });
    }

    else
    {
      res.status(201).json({
        status: "complaints loaded Successfull",
          complaint: complaint,
      });
    }
    
    
  } catch (e) {
    res.status(400).json({
      status: " Failed",
    });
  }

};


//update complaint
exports.updatecomplaint = async function (req, res) {

  try {

    var query = require("url").parse(req.url, true).query;
    var id = query.id;

    var complaint = await complaintModel.findByIdAndUpdate(id , {description : req.body.description} , {new : true})

    if (complaint == null)
    {
      res.status(400).json({
        status: "Unsuccessfull",
        complaint: complaint,
      });
    }

    else
    {
      res.status(200).json({
        status: "complaint Updated Successfull",
        complaint: complaint,
      });
    }
    

  } catch (e) {
    res.status(400).json({
      status: "Failedddd",
      message : req.body
    });
  }
};

//delete complaint by id
exports.deletecomplaint = async function (req, res) {
  try {

    var query = require("url").parse(req.url, true).query;
    var id = query.id;

    var complaint = await complaintModel.findByIdAndDelete (id)

    if (complaint == null)
    {
      res.status(400).json({
        status: "Unsuccessfull",
        complaint: complaint,
      });
    }

    else
    {
      res.status(200).json({
        status: "Deleted Successfully",
        complaint: complaint,
      });
    }
    
    

  } catch (e) {
    res.status(400).json({
      status: "Login Failed",
    });
  }
};


const attendanceModel = require("../model/Attendance");

// add attendance
exports.addAttendance = async function (req, res) {
  try {
    const attendance = await attendanceModel.create(req.body);

    res.status(201).json({
      status: "Attendance Added Successfully",
      attendance: attendance,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed to add",
      message: e,
    });
  }
};

// get daily attendance
exports.getDailyAttendance = async function (req, res) {

  try {
    var query = require("url").parse(req.url, true).query;
    var date = query.date;
    var classs = query.classs;

    var regex = new RegExp(classs);  
    var attendance = await attendanceModel.find({date : date , RegNo : {$regex : regex} })

    if (attendance.length == 0)
    {
      res.status(201).json({
        status: "Attendance Not Found",
          attendance: attendance,
      });
    }

    else
    {
      res.status(201).json({
        status: "Attendance loaded Successfull",
          attendance: attendance,
      });
    }
    
    
  } catch (e) {
    res.status(400).json({
      status: " Failed",
    });
  }

};


//update Attendance
exports.updateAttendance = async function (req, res) {
  try {

    var query = require("url").parse(req.url, true).query;
    var RegNo = query.RegNo;
    var status = query.status;
    var date = query.date;

    var attendance = await attendanceModel.findOneAndUpdate({RegNo : RegNo , date : date } , {status : status} , {new : true})

    if (attendance == null)
    {
      res.status(400).json({
        status: "Unsuccessfull",
        Attendance: attendance,
      });
    }

    else
    {
      res.status(200).json({
        status: "Status Changed Successfull",
        Attendance: attendance,
      });
    }
    
    

  } catch (e) {
    res.status(400).json({
      status: "Login Failed",
    });
  }
};


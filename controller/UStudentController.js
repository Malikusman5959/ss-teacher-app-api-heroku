const _Student = require("../model/Student");

// Methods


// addStudent
exports.addStudent = async function (req, res) {
  try {
    const student = await _Student.create(req.body);

    res.status(201).json({
      status: "success",
      student: student,
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};



// get students of given classes
exports.getStudentsOfClasses = async function (req, res) {

  try {
   
    var classes = req.body;

    var students = await _Student.find({class : { $in : classes}})

    if (students.length == 0)
    {
      res.status(201).json({
        status: "students Not Found",
          students: students,
      });
    }

    else
    {
      res.status(201).json({
        status: "students loaded Successfull",
          students: students,
      });
    }
    
    
  } catch (e) {
    res.status(400).json({
      status: " Failed",
    });
  }

};



// get students of a class
exports.getStudents = async function (req, res) {

  try {
    var query = require("url").parse(req.url, true).query;
    var classs = query.classs;

    var students = await _Student.find({class : classs}).populate('parentId')

    if (students.length == 0)
    {
      res.status(201).json({
        status: "students Not Found",
          students: students,
      });
    }

    else
    {
      res.status(201).json({
        status: "students loaded Successfull",
          students: students,
      });
    }
    
    
  } catch (e) {
    res.status(400).json({
      status: " Failed",
    });
  }

};

exports.getStudent = async function (req, res) {

  var query = require("url").parse(req.url, true).query;
  
  try {

    var student = await _Student.findOne({RegNo : query.sid})

    if (student)
    {
      res.status(201).json({
        status: "student Found",
        student: student,
      });
    }

    else
    {
      res.status(201).json({
        status: "Student Not Found",
          student: student,
      });
    }
    
    
  } catch (e) {
    res.status(400).json({
      status: "Faileddddd",
      error : e
    });
  }

};


exports.getStudentByRFID = async function (req, res) {

  var query = require("url").parse(req.url, true).query;
  
  try {

    var student = await _Student.findOne({rfid : query.rfid})

    if (student)
    {
      res.status(201).json({
        status: "student Found",
        student: student,
      });
    }

    else
    {
      res.status(201).json({
        status: "Student Not Found",
          student: student,
      });
    }
    
    
  } catch (e) {
    res.status(400).json({
      status: "Faileddddd",
      error : e
    });
  }

};
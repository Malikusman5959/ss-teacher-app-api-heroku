const teacherModel = require("../model/Teacher");


// Login
exports.login = async function (req, res) {
  try {

      var query = require("url").parse(req.url, true).query;
      var id = query.id;
      var password = query.password;

    var teacher = await teacherModel.findOne({employeeId : id , password : password})

    if (teacher == null)
    {
      res.status(201).json({
        status: "Invalid Login",
          Teacher: teacher,
      });
    }

    else
    {
      res.status(201).json({
        status: "Login Successfull",
          Teacher: teacher,
      });
    }
    
    

  } catch (e) {
    res.status(400).json({
      status: "Login Failed",
    });
  }
};


exports.changePassword = async function (req, res) {
  try {

    var query = require("url").parse(req.url, true).query;
    var id = query.id;
    var newPassword = query.newPassword;

    var teacher = await teacherModel.findOneAndUpdate({employeeId : id} , {password : newPassword} , {new : true})

    if (teacher == null)
    {
      res.status(400).json({
        status: "Unsuccessfull",
          Teacher: teacher,
      });
    }

    else
    {
      res.status(200).json({
        status: "Password Changed Successfull",
          Teacher: teacher,
      });
    }
    
    

  } catch (e) {
    res.status(400).json({
      status: "Login Failed",
    });
  }
};


exports.addTeacher = async function (req, res) {
  try {
    const teacher = await teacherModel.create(req.body);

    res.status(201).json({
      status: "Teacher Added Successfully",
        Teacher: teacher,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed to add",
      message: e,
    });
  }
};


exports.getAllTeachers = async function (req, res) {
  try {

    const teacher = await teacherModel.find();
    res.status(201).json({
      status: "Teachers found Successfully",
        Teacher: teacher,
    });

  } catch (e) {
    res.status(400).json({
      status: "failed to find",
      message: e,
    });
  }
};


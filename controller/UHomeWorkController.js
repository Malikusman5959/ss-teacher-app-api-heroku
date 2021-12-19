const homeWorkModel = require("../model/HomeWork");

// add homeWork
exports.addHomeWork = async function (req, res) {
  try {
    const homeWork = await homeWorkModel.create(req.body);

    res.status(201).json({
      status: "homeWork Added Successfully",
      homeWork: homeWork,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e,
    });
  }
};


// get past week homeWorks
exports.getPastWeekHomeWorks = async function (req, res) {

  try {
    var query = require("url").parse(req.url, true).query;
    var date = query.date;
    var classs = query.classs;
    var teacher = query.teacher;

    var homeWork = await homeWorkModel.find({date : {$gte: date} , class : classs , teacherId : teacher})

    if (homeWork.length == 0)
    {
      res.status(201).json({
        status: "homeWorks Not Found",
          homeWork: homeWork,
      });
    }

    else
    {
      res.status(201).json({
        status: "homeWorks loaded Successfull",
          homeWork: homeWork,
      });
    }
    
    
  } catch (e) {
    res.status(400).json({
      status: " Failed",
    });
  }

};


// get all homeWorks
exports.getAllHomeWorks = async function (req, res) {

  try{
    var homeWork = await homeWorkModel.find()

    if (homeWork.length == 0)
    {
      res.status(201).json({
        status: "homeWorks Not Found",
          homeWork: homeWork,
      });
    }

    else
    {
      res.status(201).json({
        status: "homeWorks loaded Successfull",
          homeWork: homeWork,
      });
    }
    
    
  } catch (e) {
    res.status(400).json({
      status: " Failed",
    });
  }

};


//update homeWork
exports.updateHomeWork = async function (req, res) {

  try {

    var query = require("url").parse(req.url, true).query;
    var id = query.id;

    var homeWork = await homeWorkModel.findByIdAndUpdate(id , {homeWorkDescription : req.body.homeWorkDescription} , {new : true})

    if (homeWork == null)
    {
      res.status(400).json({
        status: "Unsuccessfull",
        homeWork: homeWork,
      });
    }

    else
    {
      res.status(200).json({
        status: "homeWork Updated Successfull",
        homeWork: homeWork,
      });
    }
    

  } catch (e) {
    res.status(400).json({
      status: "Failedddd",
      message : req.body
    });
  }
};

//delete homeWork by id
exports.deleteHomeWork = async function (req, res) {
  try {

    var query = require("url").parse(req.url, true).query;
    var id = query.id;

    var homeWork = await homeWorkModel.findByIdAndDelete (id)

    if (homeWork == null)
    {
      res.status(400).json({
        status: "Unsuccessfull",
        homeWork: homeWork,
      });
    }

    else
    {
      res.status(200).json({
        status: "Deleted Successfully",
        homeWork: homeWork,
      });
    }
    
    

  } catch (e) {
    res.status(400).json({
      status: "Failed",
    });
  }
};


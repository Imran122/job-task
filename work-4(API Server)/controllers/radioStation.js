const StationUploadData = require("../models/radioStation");

exports.create = (req, res) => {
  const { stationName, stationPoint } = req.body;

  var stationData = new StationUploadData({
    stationName,
    stationPoint,
  });

  // save model to database
  stationData.save(function (err, data) {
    if (err) return console.error(err);
    else {
      console.log("Saved stationData", data);

      return res.json({
        insertedId: data._id,
      });
    }
  });
};

//read station data

exports.read = (req, res) => {
  StationUploadData.find({}, (err, station) => {
    if (err || !station) {
      return res.status(400).json({
        error: "Products not found",
      });
    }
    res.json(station);
  });
};

//update station data

exports.update = (req, res) => {
  const { stationName, stationPoint } = req.body;

  StationUploadData.findOne({ _id: req.body._id }, (err, station) => {
    console.log(req._id);
    station.stationName = stationName;
    station.stationPoint = stationPoint;
    station.save((err, updatedData) => {
      if (err) {
        console.log(" UPDATE ERROR", err);
        return res.status(400).json({
          error: " update failed",
        });
      }

      res.json(updatedData);
    });
  });
};

//delte station
exports.deleteData = (req, res) => {
  StationUploadData.deleteOne({ _id: req.body._id }, (err, station) => {
    if (err) {
      console.log(" UPDATE ERROR", err);
      return res.status(400).json({
        error: " update failed",
      });
    } else {
      console.log("successfully deleted");
    }
  });
  return res.json();
};

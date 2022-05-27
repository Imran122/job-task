const mongoose = require("mongoose");

// rent car upload model schema
const UploadStation = new mongoose.Schema(
  {
    stationName: {
      type: String,
      trim: true,
    },
    stationPoint: {
      type: Number,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UploadStation", UploadStation);

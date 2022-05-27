const express = require("express");
const { requireSignin } = require("../controllers/auth");
const router = express.Router();

// import controller
const {
  create,
  update,
  read,
  deleteData,
} = require("../controllers/radioStation");

router.post("/stationupload", create);
router.put("/updatestation", update);
router.delete("/deletestation", deleteData);
router.get("/getstation", read);
module.exports = router;

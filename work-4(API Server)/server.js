const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// connect to db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));

// import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const radioStation = require("./routes/radioStation");

// app middlewares
app.use(bodyParser.json());
app.use(cors()); // allows all origins

// middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", radioStation);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});

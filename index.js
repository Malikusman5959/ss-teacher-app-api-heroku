const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
const cors = require("cors");
const morgan = require("morgan");

// Middlwares
const app = express();
app.use(express.json());

app.use(cors());
app.use(morgan("tiny"));

// .env
const port = process.env.PORT || 8000;

// connection
mongoose
  .connect(process.env.DATABASE_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(console.log("Database connected..."))
  .catch((er) => console.log(er));

// call routers
// Smart School
app.use("/v1", require("./router/SAttendanceRouter"));
app.use("/v1", require("./router/SStudentRouter"));


//usman routers
app.use("/v2", require("./router/UTeacherLogin"));
app.use("/v2", require("./router/UTeacherRouter"));
app.use("/v2", require("./router/UChangePassword"));
app.use("/v2", require("./router/UAttendanceRouter"));
app.use("/v2", require("./router/URFIDAttendanceRouter"));
app.use("/v2", require("./router/UViolationsRouter"));
app.use("/v2", require("./router/UComplaintsRouter"));
app.use("/v2", require("./router/UHomeWorkRouter"));
app.use("/v2", require("./router/UStudentRouter"));
app.use("/v2", require("./router/UCircularsRouter"));
app.use("/v2", require("./router/ULeaveApplicationsRouter"));
app.use("/v2", require("./router/UFinesRouter"));
app.use("/v2", require("./router/extra"));


// information
app.get("/", (req, res) => {
  console.log("data");
  res.status(200).json({
    message: "Api Working",
  });
});
app.listen(port, () => {
  console.log("server Activited");
});

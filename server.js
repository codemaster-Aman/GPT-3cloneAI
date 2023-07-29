const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyparser = require("body-parser");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");

//route path
const authRoutes = require("./routes/authRoutes");

//dotenv
dotenv.config();

//mongo connection

connectDB();

//rest objecst
const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.use("/", (req, res) => {
  res.send("hwllo world ");
});
//Api routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/openai", require("./routes/openaiRoutes"));

//llisten server
app.listen(PORT, () => {
  console.log(
    `server is running in ${process.env.DEV_MODE} on ${PORT}`.bgCyan.white
  );
});

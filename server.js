const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

//import routes
const projectsRoute = require("./projects/projects-router");
//init server
const server = express();

//middleware
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(logger("dev"));

//use routes
server.use("/api/projects", projectsRoute);

const port = 5000;
//listen to server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

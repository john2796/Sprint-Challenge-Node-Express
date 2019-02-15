const express = require("express");
const server = express.Router();

// model
const Projects = require("../data/helpers/projectModel");

//helpers
const errorHelper = (status, message, res) => {
  res.status(status).json({ message });
};

// @route    GET api/projects/
// @desc     Fetch All projects
// @Access   Public
server.get("/", (req, res) => {
  Projects.find()
    .then(proj => {
      res.status(200).json(proj);
    })
    .catch(err => {
      return errorHelper(500, "Internal Server Error", res);
    });
});
// @route    GET api/projects/
// @desc     get query
// @Access   Public
server.get("/:id", (req, res) => {
  Projects.get(req.params.id)
    .then(proj => {
      res.status(200).json(proj);
    })
    .catch(err => {
      return errorHelper(500, "Internal Server Error", res);
    });
});

// @route    POST api/projects
// @desc     ADD project
// @Access   Public
server.post("/", (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  Projects.insert({ name, description })
    .then(proj => {
      res.status(200).json(proj);
    })
    .catch(err => {
      return errorHelper(500, "Server internal error", res);
    });
});

// @route    UPDATE api/posts/:id
// @desc     update
// @Access   Public
server.put("/:id", (req, res) => {
  const { name, description } = req.body;
  const { id } = req.params;
  if (!name || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  Projects.update(id, { name, description })
    .then(proj => {
      if (proj) {
        console.log(proj);
        res.status(200).json(proj);
      } else {
        res.status(404).json({ message: "project not found" });
      }
    })
    .catch(err => {
      return errorHelper(500, "Server internal error", res);
    });
});

// @route    DELETE api/projects/:id
// @desc     DELETE SINGLE projects
// @Access   Public
server.delete("/:id", (req, res) => {
  const { id } = req.params;

  Projects.remove(id)
    .then(proj => {
      if (proj) {
        console.log(proj);
        res.status(200).json({ message: "successfully deleted" });
      } else {
        res.status(404).json({ message: "project not found" });
      }
    })
    .catch(err => {
      return errorHelper(500, "Server internal error", res);
    });
});

module.exports = server;

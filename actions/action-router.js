const express = require("express");
const server = express.Router();

//model
const Actions = require("../data/helpers/actionModel");
const Projects = require("../data/helpers/projectModel");

//helpers
const errorHelper = (status, message, res) => {
  res.status(status).json({ message });
};

// @route    GET api/Actions/
// @desc     get query
// @Access   Public
server.get("/:id", (req, res) => {
  Actions.get(req.params.id)
    .then(proj => {
      if (proj) {
        res.status(200).json(proj);
      } else {
        res.status(404).json({ message: "project not found" });
      }
    })
    .catch(err => {
      return errorHelper(500, "Internal Server Error", res);
    });
});

// @route    POST api/Actions
// @desc     ADD project
// @Access   Public
server.post("/:id", (req, res) => {
  const { notes, description } = req.body;
  const { id } = req.params;
  if (!notes || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  Projects.get(id)
    .then(proj => {
      if (proj) {
        Actions.insert({ notes, description, project_id: id }).then(proj => {
          res.status(200).json(proj);
        });
      } else {
        res.status(404).json({ message: "project not found" });
      }
    })
    .catch(err => {
      return errorHelper(500, "Server internal error", res);
    });
});

// @route    UPDATE api/posts/:id
// @desc     update
// @Access   Public
server.put("/:id", (req, res) => {
  const { notes, description } = req.body;
  const { id } = req.params;
  if (!notes || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  Actions.update(id, { notes, description })
    .then(act => {
      if (act) {
        res.status(200).json(act);
      } else {
        res.status(404).json({ message: "action not found" });
      }
    })
    .catch(err => {
      return errorHelper(500, "server internal error ", res);
    });
});

// @route    DELETE api/Actions/:id
// @desc     DELETE SINGLE Actions
// @Access   Public
server.delete("/:id", (req, res) => {
  const { id } = req.params;

  Actions.remove(id)
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

const { Router } = require("express");
const Team = require("../team/model");
const db = require("../db");
const router = new Router();
router.get("/team", (req, res, next) => {
  //Team.findAll() will get all the team rows from the table
  Team.findAll()
    //sending those rows as response
    .then(rows => res.send(rows))
    .catch(error => next(error));
});
router.post("/team", (req, res, next) => {
  Team.create({ name: "A", name: "B", name: "C" })
    .then(rows => res.send(rows))
    .catch(error => next(error));
});
module.exports = router;

const { Router } = require("express");
const Team = require("../team/model");
const db = require("../db");
const router = new Router();
router.get("/team", (request, response, next) => {
  Team.findAll()
    //Team.findAll() will get all the team rows from the table
    //sending those rows as response
    .then(rows => response.send(rows))
    .catch(error => next(error));
});
module.exports = router;

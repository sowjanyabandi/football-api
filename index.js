//const Team = require("./team/model");
const express = require("express");
//const db = require("./db");
const app = express();
const port = process.env.PORT || 4000;
const teamRouter = require("./team/router");
app.listen(port, () => console.log(`Listening on port ${port}!`));
app.use(teamRouter);

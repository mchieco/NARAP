const express = require("express");
const cron = require("node-cron");
const fs = require("fs");
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 5000; //port we will listen for connections on. 
const path = require("path") // Default Node library. 
const bodyparser = require("body-parser")
app.use(bodyparser.json()); // get information from html forms
livedatajob = require("./jobs/livedatajob") //makes reference to cronjob file so it can run



const router = require("./routes/livedataRouter");
app.use("/", router);
app.listen(port, () => console.log(` Server listening on port ${port}!`));

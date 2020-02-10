const express = require("express")
const app = express()
const port = process.env.PORT || 5000; //port we will listen for connections on. 
const path = require("path") // Default Node library. 
const bodyparser = require("body-parser")
app.use(bodyparser.json()); // get information from html forms

const router = require("./routes/livedataRouter");
app.use("/", router);
app.listen(port, () => console.log(` Server listening on port ${port}!`));

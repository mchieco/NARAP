const express = require("express");
const router = express.Router();
const livedataController = require("../controllers/livedataController")

//route to get the redcap data, get request
router.route("/fetchdata")
.all((req,res,next)=>{
    next();
})
.get(livedataController) //Public

module.exports = router;
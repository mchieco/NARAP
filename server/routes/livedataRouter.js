const express = require("express");
const router = express.Router();
const livedataController = require("../controllers/livedataController")

router.route("/fetchdata")
.all((req,res,next)=>{
    next();
})
.get(livedataController) //Public

module.exports = router;
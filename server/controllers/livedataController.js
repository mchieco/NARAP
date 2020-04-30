const express = require("express");
const axios = require('axios');
const cron = require("node-cron");
const fs = require("fs");
const qs = require('query-string');

//get the live data job
const cache = require("../jobs/livedatajob");

//get cached value from cron job and send it through endpoint
module.exports = function(req,res,next) {
  try {
    let data = cache();
    res.json(data);
  }catch(err){
    res.status(400).json({message:"Data not ready. Try again later."})
  }
}
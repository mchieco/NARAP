const express = require("express");
const axios = require('axios');
const cron = require("node-cron");
const fs = require("fs");
const qs = require('query-string');

//run job on restart
setredcapData();

cron.schedule("* * * * *", async function () { //seconds,
    console.log("---------------------");
    console.log("Running Cron Job on REDCAP");
    const result = await setredcapData();
    console.log(result);
});

async function fetchredcapData() {
    const response = await axios.post('https://redcap.vanderbilt.edu/api/',
        qs.stringify({
            token: 'A4FD20E1552AD49113B0998FA226EF9E', // gave the values directly for testing
            content: 'record',
            format: 'json',
            fields: 'fake_data_flag, verbal_consent_permission, age, gender,ethnic_hisp,racial_background, education, language_preference, insurance',
        }), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    return response.data;
}
let participants = 0;
let eligible = 0;
let enrolled = 0;
let females = 0;
let males = 0;
let age18to29 = 0;
let age30to39 = 0;
let age40to49 = 0;
let age50to59 = 0;
let age60to69 = 0;
let age70to79 = 0;
let age80plus = 0;
let hispanic = 0;
let nohispanic = 0;
let african = 0;
let indian = 0;
let asian = 0;
let white = 0;
let multi = 0;
let hawaiian = 0;
let raceOther = 0;
let raceRefused = 0;
let lowerthan9th = 0;
let hsdropout = 0;
let ged = 0;
let hsdiploma = 0;
let somecollege = 0;
let collegedegree = 0;
let educationIDK = 0;
let educationRefused = 0;
let insurancePrivate = 0;
let medicare = 0;
let medicaid = 0;
let none = 0;
let insuranceOther = 0;
let insuranceIDK = 0;
let insuranceRefused = 0;
let lastUpdated = null;
async function setredcapData() {
    //vairables for all data points
    //get all of the json data from redcap
    console.log("Fetching that juice...")
    recdapData = await fetchredcapData();
    console.log("Got the juice.")
    //iterate over every object in the redcapDB
    participants = 0;
    eligible = 0;
    enrolled = 0;
    females = 0;
    males = 0;
    age18to29 = 0;
    age30to39 = 0;
    age40to49 = 0;
    age50to59 = 0;
    age60to69 = 0;
    age70to79 = 0;
    age80plus = 0;
    hispanic = 0;
    nohispanic = 0;
    african = 0;
    indian = 0;
    asian = 0;
    white = 0;
    multi = 0;
    hawaiian = 0;
    raceOther = 0;
    raceRefused = 0;
    lowerthan9th = 0;
    hsdropout = 0;
    ged = 0;
    hsdiploma = 0;
    somecollege = 0;
    collegedegree = 0;
    educationIDK = 0;
    educationRefused = 0;
    insurancePrivate = 0;
    medicare = 0;
    medicaid = 0;
    none = 0;
    insuranceOther = 0;
    insuranceIDK = 0;
    insuranceRefused = 0;
    recdapData.forEach((obj) => {
        //makes sure it isnt fake data, this is needed for all of the research points  
        if (obj.fake_data_flag === '') {
            //participants are everything that isn't
            participants += 1;
            if (obj.age >= 18) {
                eligible += 1;
                if (obj.verbal_consent_permission === '1') {
                    enrolled += 1;
                }
            }

            //demograhpics 
            if (obj.gender === '1') {
                males += 1;
            }
            if (obj.gender === '2') {
                females += 1;
            }
            if (obj.ethnic_hisp === '0') {
                nohispanic += 1;
            }
            if (obj.ethnic_hisp === '1') {
                hispanic += 1;
            }
            if (obj.racial_background === '1') {
                white += 1;
            }
            if (obj.racial_background === '2') {
                african += 1;
            }
            if (obj.racial_background === '3') {
                indian += 1;
            }
            if (obj.racial_background === '4') {
                asian += 1;
            }
            if (obj.racial_background === '5') {
                hawaiian += 1;
            }
            if (obj.racial_background === '6') {
                multi += 1;
            }
            if (obj.racial_background === '7') {
                raceOther += 1;
            }
            if (obj.racial_background === '99') {
                raceRefused += 1;
            }
            if (obj.education === '1') {
                lowerthan9th += 1;
            }
            if (obj.education === '2') {
                hsdropout += 1;
            }
            if (obj.education === '3') {
                ged += 1;
            }
            if (obj.education === '4') {
                hsdiploma += 1;
            }
            if (obj.education === '5') {
                somecollege += 1;
            }
            if (obj.education === '6') {
                collegedegree += 1;
            }
            if (obj.education === '7') {
                educationIDK += 1;
            }
            if (obj.education === '7') {
                educationRefused += 1;
            }
            if (obj.insurance___1 === '1') {
                insurancePrivate += 1;
            }
            if (obj.insurance___2 === '1') {
                medicare += 1;
            }
            if (obj.insurance___3 === '1') {
                medicaid += 1;
            }
            if (obj.insurance___4 === '1') {
                none += 1;
            }
            if (obj.insurance___5 === '1') {
                insuranceOther += 1;
            }
            if (obj.insurance___6 === '1') {
                insuranceIDK += 1;
            }
            if (obj.insurance___7 === '1') {
                insuranceRefused += 1;
            }
            if (obj.age >= 18 && obj.age <= 29) {
                age18to29 += 1;
            }
            if (obj.age >= 30 && obj.age <= 39) {
                age30to39 += 1;
            }
            if (obj.age >= 40 && obj.age <= 49) {
                age40to49 += 1;
            }
            if (obj.age >= 50 && obj.age <= 59) {
                age50to59 += 1;
            }
            if (obj.age >= 60 && obj.age <= 69) {
                age60to69 += 1;
            }
            if (obj.age >= 70 && obj.age <= 79) {
                age70to79 += 1;
            }
            if (obj.age > 80) {
                age80plus += 1;
            }
        }
    });
    lastUpdated = Date.now();
    console.log(participants);
    return indian;
}

function getData() {
    if (!lastUpdated) {
        throw new Error("Data not created yet. ")
    }
    return {
        participants,
        eligible,
        enrolled,
        females,
        males,
        age18to29,
        age30to39,
        age40to49,
        age50to59,
        age60to69,
        age70to79,
        age80plus,
        hispanic,
        nohispanic,
        african,
        indian,
        asian,
        white,
        multi,
        hawaiian,
        raceOther,
        raceRefused,
        lowerthan9th,
        hsdropout,
        ged,
        hsdiploma,
        somecollege,
        collegedegree,
        educationIDK,
        educationRefused,
        insurancePrivate,
        medicare,
        medicaid,
        none,
        insuranceOther,
        insuranceIDK,
        insuranceRefused,
    }
}

module.exports = getData;
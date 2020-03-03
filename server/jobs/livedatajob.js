const express = require("express");
const axios = require('axios');
const cron = require("node-cron");
const fs = require("fs");
const qs = require('query-string');

//run job on restart
setredcapData();

//cron.schedule("* * * * *", async function () { //seconds,
    //console.log("---------------------");
    //console.log("Running Cron Job on REDCAP");
    //const result = await setredcapData();
    //console.log(result);
//});

async function fetchredcapData() {
    const response = await axios.post('https://redcap.vanderbilt.edu/api/',
        qs.stringify({
            token: 'A4FD20E1552AD49113B0998FA226EF9E', // gave the values directly for testing
            content: 'record',
            format: 'json',
            fields: 'fake_data_flag, ' + //make sure the data is real
                'age, verbal_consent_permission, excl_criteria, gender,ethnic_hisp,racial_background, education, language_preference, insurance, patient_or_visitor, ' + //demographics
                'pcp, pcp_12months, ' + //primary care practicioner
                'tobacco_30days, quitline_enroll, cat_scan, current_smoker, quit_smoking_15, pack_years_calc, ' + //Tobacco Cessation
                'no_mammograms_anymore, mammogram_more_2, mammogram_within_2, ' + //lung cancer
                'no_cervical_screening, pap_more_3, pap_within_3, hpv_test, ' + //cervical screening
                'colonrectal_screening, colonrectal_10, colonoscopy, other_colonrectal, sigmoidoscopy', //colorectal screening 
        }), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    return response.data;
}
let lastUpdated = null;
//participants
let approached = 0;
let eligible = 0;
let enrolled = 0;
//demographics
let females = 0;
let males = 0;
let age18to19 = 0;
let age20to29 = 0;
let age30to39 = 0;
let age40to49 = 0;
let age50to59 = 0;
let age60to69 = 0;
let age70to79 = 0;
let age80to89 = 0;
let age90to99 = 0;
let age100plus = 0;
let age65plus = 0;
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
let languageEnglish = 0;
let languageSpanish = 0;
let languageFrench = 0;
let languageOther = 0;
let insurancePrivate = 0;
let medicare = 0;
let medicaid = 0;
let none = 0;
let insuranceOther = 0;
let insuranceIDK = 0;
let insuranceRefused = 0;
let patient = 0;
let visitor = 0;
//primary care practicioner
let pcpyes = 0;
let pcpno = 0;
let pcpIDK = 0;
let pcp12monthsyes = 0;
let pcp12monthsno = 0;
let pcp12monthsIDK = 0;
let pcpbothyes = 0;
let pcpyesvisitno = 0;
let pcpnovisityes = 0;
let pcpbothno = 0;
let pcpintervention = 0;
//tobacco cessation
let tobacco30plus = 0;
let tobacco30less = 0;
let Tobacco30refused = 0;
let quitlineyes = 0;
let quitlineno = 0;
//lung cancer section
let lungcancercount = 0;
let catscanyes = 0;
let catscanno = 0;
let catscanrefused = 0;
let currentlysmokeyes = 0;
let currentlysmokeno = 0;
let currentlysmokerefused = 0;
let quitsmoking15yes = 0;
let quitsmoking15no = 0;
let quitsmoking15refused = 0;
//breast cancer
let breastcancercount = 0;
let nomammogramsyes = 0;
let nomammogramsno = 0;
let nomammogramsrefused = 0;
let mammogrammore2yearsyes = 0;
let mammogrammore2yearsno = 0;
let mammogrammore2yearsrefused = 0;
let mammogramwithin2yes = 0;
let mammogramwithin2no = 0;
let mammogramwithin2refused = 0;
//cervical cancer
let cervicalcancerfullcount = 0;
let cervicalcancer21to29 = 0;
let cervicalcancer30to65 = 0;
let nocervicalscreeningyes = 0;
let nocervicalscreeningno = 0;
let nocervicalscreeningrefused = 0;
let papmorethan3yes = 0;
let papmorethan3no = 0;
let papmorethan3refused = 0;
let papwithin3yes = 0;
let papwithin3no21to29 = 0;
let papwithin3no30to65 = 0;
let papwithin3refused = 0;
let hpvtestyes = 0;
let hpvtestno = 0;
//colon-rectal cancer
let colonrectalcount = 0;
let nocolonrectalyes = 0;
let nocolonrectalno = 0;
let nocolonrectalrefused = 0;
let colonrectal10yes = 0;
let colonrectal10no = 0;
let colonrectal10refused = 0;
let colonoscopy10yes = 0;
let colonoscopy10no = 0;
let colonoscopy10refused = 0;
let otherthancolonoscopyyes = 0;
let otherthancolonoscopyno = 0;
let otherthancolonoscopyrefused = 0;
let sigmoidoscopyyes = 0;
let sigmoidoscopyno = 0;
let sigmoidoscopyrefused = 0;

async function setredcapData() {
    //vairables for all data points
    //get all of the json data from redcap
    console.log("Fetching redcap data");
    recdapData = await fetchredcapData();
    console.log("Got the data!");
    //iterate over every object in the redcapDB
    approached = 0;
    eligible = 0;
    enrolled = 0;
    females = 0;
    males = 0;
    age18to19 = 0;
    age20to29 = 0;
    age30to39 = 0;
    age40to49 = 0;
    age50to59 = 0;
    age60to69 = 0;
    age70to79 = 0;
    age80to89 = 0;
    age90to99 = 0;
    age100plus = 0;
    age65plus = 0;
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
    languageEnglish = 0;
    languageSpanish = 0;
    languageFrench = 0;
    languageOther = 0;
    insurancePrivate = 0;
    medicare = 0;
    medicaid = 0;
    none = 0;
    insuranceOther = 0;
    insuranceIDK = 0;
    insuranceRefused = 0;
    patient = 0;
    visitor = 0;
    pcpyes = 0;
    pcpno = 0;
    pcpIDK = 0;
    pcp12monthsyes = 0;
    pcp12monthsno = 0;
    pcp12monthsIDK = 0;
    pcpbothyes = 0;
    pcpyesvisitno = 0;
    pcpnovisityes = 0;
    pcpbothno = 0;
    pcpintervention = 0;
    tobacco30plus = 0;
    tobacco30less = 0;
    Tobacco30refused = 0;
    quitlineyes = 0;
    lungcancercount = 0;
    quitlineno = 0;
    catscanyes = 0;
    catscanno = 0;
    catscanrefused = 0;
    currentlysmokeyes = 0;
    currentlysmokeno = 0;
    currentlysmokerefused = 0;
    quitsmoking15yes = 0;
    quitsmoking15no = 0;
    quitsmoking15refused = 0;
    breastcancercount = 0;
    nomammogramsyes = 0;
    nomammogramsno = 0;
    nomammogramsrefused = 0;
    mammogrammore2yearsyes = 0;
    mammogrammore2yearsno = 0;
    mammogrammore2yearsrefused = 0;
    mammogramwithin2yes = 0;
    mammogramwithin2no = 0;
    mammogramwithin2refused = 0;
    cervicalcancerfullcount = 0;
    cervicalcancer21to29 = 0;
    cervicalcancer30to65 = 0;
    nocervicalscreeningyes = 0;
    nocervicalscreeningno = 0;
    nocervicalscreeningrefused = 0;
    papmorethan3yes = 0;
    papmorethan3no = 0;
    papmorethan3refused = 0;
    papwithin3yes = 0;
    papwithin3no21to29 = 0;
    papwithin3no30to65 = 0;
    papwithin3refused = 0;
    hpvtestyes = 0;
    hpvtestno = 0;
    colonrectalcount = 0;
    nocolonrectalyes = 0;
    nocolonrectalno = 0;
    nocolonrectalrefused = 0;
    colonrectal10yes = 0;
    colonrectal10no = 0;
    colonrectal10refused = 0;
    colonoscopy10yes = 0;
    colonoscopy10no = 0;
    colonoscopy10refused = 0;
    otherthancolonoscopyyes = 0;
    otherthancolonoscopyno = 0;
    otherthancolonoscopyrefused = 0;
    sigmoidoscopyyes = 0;
    sigmoidoscopyno = 0;
    sigmoidoscopyrefused = 0;

    recdapData.forEach((obj) => {
        //makes sure it isnt fake data, this is needed for all of the research points  
        if (obj.fake_data_flag === '') {
            //participants are everything that isn't
            approached += 1;
            if (obj.age >= 18 && (obj.excl_criteria__1 !== '1' 
            || obj.excl_criteria__2 !== '1' || obj.excl_criteria__3 !== '1' 
            || obj.excl_criteria__4 !== '1' || obj.excl_criteria__5 !== '1' 
            || obj.excl_criteria__6 !== '1' || obj.excl_criteria__7 !== '1' 
            || obj.excl_criteria__8 !== '1' || obj.excl_criteria__9 !== '1')) {
                eligible += 1;
                if (obj.verbal_consent_permission === '1') {
                    enrolled += 1;

                    if (obj.gender === '1') {
                        males += 1;
                    }
                    if (obj.gender === '2') {
                        females += 1;
                        //breast cancer data
                        if(obj.age >= 55 && obj.age <= 74) {
                            breastcancercount += 1;
                            if(obj.no_mammograms_anymore === '1') {
                                nomammogramsyes += 1;
                            }
                            if(obj.no_mammograms_anymore === '2' || obj.no_mammograms_anymore === '3') {
                                nomammogramsno += 1;
                                if(obj.mammogram_more_2 === '1') {
                                    mammogrammore2yearsyes += 1;
                                }
                                if(obj.mammogram_more_2 === '2' || obj.mammogram_more_2 === '3') {
                                    mammogrammore2yearsno += 1;
                                    if(obj.mammogram_within_2 === '1') {
                                        mammogramwithin2yes += 1;
                                    }
                                    if(obj.mammogram_within_2 === '2' || obj.mammogram_within_2 === '3') {
                                        mammogramwithin2no += 1;
                                    }
                                    if(obj.mammogram_within_2 === '4') {
                                        mammogramwithin2refused += 1;
                                    }
                                }
                                if(obj.mammogram_more_2 === '4') {
                                    mammogrammore2yearsrefused += 1;
                                }
                            }
                            if(obj.no_mammograms_anymore === '4') {
                                nomammogramsrefused += 1;
                            }
                        }
                        //cervical cancer data
                        if(obj.age >= 21 && obj.age <= 65) {
                            cervicalcancerfullcount += 1;
                            if(obj.age >= 21 && obj.age <= 29) {
                                cervicalcancer21to29 += 1;
                            }
                            if(obj.age >= 30 && obj.age <= 65) {
                                cervicalcancer30to65 += 1;
                            }
                            if(obj.no_cervical_screening === '1') {
                                nocervicalscreeningyes += 1;
                            }
                            if(obj.no_cervical_screening === '2' || obj.no_cervical_screening === '3') {
                                nocervicalscreeningno += 1;
                                if(obj.pap_more_3 === '1') {
                                    papmorethan3yes += 1;
                                }
                                if(obj.pap_more_3 === '2' || obj.pap_more_3 === '3') {
                                    papmorethan3no += 1;
                                    if(obj.pap_within_3 === '1') {
                                        papwithin3yes += 1;
                                    }
                                    if(obj.pap_within_3 === '2' || obj.pap_within_3 === '3') {
                                        if(obj.age >= 21 && obj.age <= 29) {
                                            papwithin3no21to29 += 1;
                                        }
                                        if(obj.age >= 30 && obj.age <= 65) {
                                            papwithin3no30to65 += 1;
                                            if(obj.hpv_test === '1') {
                                                hpvtestyes += 1;
                                            }
                                            if(obj.hpv_test === '2' || obj.hpv_test === '3') {
                                                hpvtestno += 1;
                                            }
                                        }
                                    }
                                    if(obj.pap_within_3 === '4') {
                                        papwithin3refused += 1;
                                    }
                                }
                                if(obj.pap_more_3 === '4') {
                                    papmorethan3refused += 1;
                                }
                            }
                            if(obj.no_cervical_screening === '4') {
                                nocervicalscreeningrefused += 1;
                            }
                        }
                    }
                    //demographics
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
                    if (obj.language_preference === '1') {
                        languageEnglish += 1;
                    }
                    if (obj.language_preference === '2') {
                        languageSpanish += 1;
                    }
                    if (obj.language_preference === '3') {
                        languageFrench += 1;
                    }
                    if (obj.language_preference === '4') {
                        languageOther += 1;
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
                    if (obj.age >= 18 && obj.age <= 19) {
                        age18to19 += 1;
                    }
                    if (obj.age >= 20 && obj.age <= 29) {
                        age20to29 += 1;
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
                    if (obj.age >= 80 && obj.age <= 89) {
                        age80to89 += 1;
                    }
                    if (obj.age >= 90 && obj.age <= 99) {
                        age90to99 += 1;
                    }
                    if (obj.age >= 100) {
                        age100plus += 1;
                    }
                    if (obj.age >= 65) {
                        age65plus += 1;
                    }
                    if (obj.patient_or_visitor === '1') {
                        patient += 1;
                    }
                    if (obj.patient_or_visitor === '2') {
                        visitor += 1;
                    }

                    //primary care practicioner data
                    if(obj.pcp === '1') {
                        pcpyes += 1;
                        if(obj.pcp_12months === '1') {
                            pcpbothyes += 1;
                        }
                    }
                    if(obj.pcp === '2' || obj.pcp === '3') {
                        pcpno += 1;
                        if(obj.pcp_12months === '1') {
                            pcpnovisityes += 1;
                            pcpintervention += 1;
                        }
                        if(obj.pcp_12months === '2' || obj.pcp_12months === '3') {
                            pcpbothno += 1;
                            pcpintervention += 1;
                        }
                    }
                    if(obj.pcp === '4') {
                        pcpIDK += 1;
                    }
                    if(obj.pcp_12months === '1') {
                        pcp12monthsyes += 1;
                    }
                    if(obj.pcp_12months === '2' || obj.pcp_12months === '3') {
                        pcp12monthsno += 1;
                        if(obj.pcp === '1') {
                            pcpyesvisitno += 1;
                            pcpintervention += 1;
                        }
                    }
                    if(obj.pcp_12months === '4') {
                        pcp12monthsIDK += 1;
                    }

                    //tobbacco cessation data
                    if(obj.tobacco_30days === '1') {
                        tobacco30plus += 1;
                        if(obj.quitline_enroll === '1') {
                            quitlineyes += 1;
                        }
                        if(obj.quitline_enroll === '2') {
                            quitlineno += 1;
                        }
                        if(obj.age >= 55 && obj.age <= 80) {
                            lungcancercount += 1;
                            if(obj.cat_scan === '1') {
                                catscanyes += 1;
                            }
                            if(obj.cat_scan === '2' || obj.cat_scan === '3') {
                                catscanno += 1;
                                if(obj.current_smoker === '1') {
                                    currentlysmokeyes += 1;
                                    //obj.pack_years_calc
                                }
                                if(obj.current_smoker === '2' || obj.current_smoker === '3') {
                                    currentlysmokeno += 1;
                                }
                                if(obj.current_smoker === '4') {
                                    currentlysmokerefused += 1;
                                }
                                if(obj.quit_smoking_15 === '1') {
                                    quitsmoking15yes += 1;
                                    //obj.pack_years_calc
                                }
                                if(obj.quit_smoking_15 === '2' || obj.quit_smoking_15 === '3') {
                                    quitsmoking15no += 1;
                                }
                                if(obj.quit_smoking_15 === '4') {
                                    quitsmoking15refused += 1;
                                }
                            }
                            if(obj.cat_scan === '4') {
                                catscanrefused += 1;
                            }
                        }
                    }
                    if(obj.tobacco_30days === '2' || obj.tobacco_30days === '3') {
                        tobacco30less += 1;
                    }
                    if(obj.tobacco_30days === '4') {
                        Tobacco30refused += 1;
                    }

                    //colon-rectal cancer data
                    if(obj.age >= 50 && obj.age <= 75) {
                        colonrectalcount += 1;
                        if(obj.colonrectal_screening === '1') {
                            nocolonrectalyes += 1;
                        }
                        if(obj.colonrectal_screening === '2' || obj.colonrectal_screening === '3') {
                            nocolonrectalno += 1;
                            if(obj.colonrectal_10 === '1') {
                                colonrectal10yes += 1;
                            }
                            if(obj.colonrectal_10 === '2' || obj.colonrectal_10 === '3') {
                                colonrectal10no += 1;
                                if(obj.colonoscopy === '1') {
                                    colonoscopy10yes += 1;
                                }
                                if(obj.colonoscopy === '2' || obj.colonoscopy === '3') {
                                    colonoscopy10no += 1;
                                    if(obj.other_colonrectal === '1') {
                                        otherthancolonoscopyyes += 1;
                                        if(obj.sigmoidoscopy === '1') {
                                            sigmoidoscopyyes += 1;
                                        }
                                        if(obj.sigmoidoscopy === '2') {
                                            sigmoidoscopyno += 1;
                                        }
                                        if(obj.sigmoidoscopy === '1') {
                                            sigmoidoscopyrefused += 1;
                                        }
                                    }
                                    if(obj.other_colonrectal === '2' || obj.other_colonrectal === '3') {
                                        otherthancolonoscopyno += 1;
                                        if(obj.other_colonrectal === '3') {
                                            if(obj.sigmoidoscopy === '1') {
                                                sigmoidoscopyyes += 1;
                                            }
                                            if(obj.sigmoidoscopy === '2') {
                                                sigmoidoscopyno += 1;
                                            }
                                            if(obj.sigmoidoscopy === '1') {
                                                sigmoidoscopyrefused += 1;
                                            }
                                        }
                                    }
                                    if(obj.other_colonrectal === '3') {
                                        otherthancolonoscopyrefused += 1;
                                    }
                                }
                                if(obj.colonoscopy === '4') {
                                    colonoscopy10refused += 1;
                                }
                            }
                            if(obj.colonrectal_10 === '4') {
                                colonrectal10refused += 1;
                            }
                        }
                        if(obj.colonrectal_screening === '4') {
                            nocolonrectalrefused += 1;
                        }
                    }
                }
            }
        }
    });
    lastUpdated = Date.now();
    console.log(approached);
}

function getData() {
    if (!lastUpdated) {
        throw new Error("Data not created yet. ")
    }
    return {
        approached,
        eligible,
        enrolled,
        females,
        males,
        age18to19,
        age20to29,
        age30to39,
        age40to49,
        age50to59,
        age60to69,
        age70to79,
        age80to89,
        age90to99,
        age100plus,
        age65plus,
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
        languageEnglish,
        languageSpanish,
        languageFrench,
        languageOther,
        insurancePrivate,
        medicare,
        medicaid,
        none,
        insuranceOther,
        insuranceIDK,
        insuranceRefused,
        patient,
        visitor,
        pcpyes,
        pcpno,
        pcpIDK,
        pcp12monthsyes,
        pcp12monthsno,
        pcp12monthsIDK,
        pcpbothyes,
        pcpyesvisitno,
        pcpnovisityes,
        pcpbothno,
        pcpintervention,
        tobacco30plus,
        tobacco30less,
        Tobacco30refused,
        quitlineyes,
        quitlineno,
        lungcancercount,
        catscanyes,
        catscanno,
        catscanrefused,
        currentlysmokeyes,
        currentlysmokeno,
        currentlysmokerefused,
        quitsmoking15yes,
        quitsmoking15no,
        quitsmoking15refused,
        breastcancercount,
        nomammogramsyes,
        nomammogramsno,
        nomammogramsrefused,
        mammogrammore2yearsyes,
        mammogrammore2yearsno,
        mammogrammore2yearsrefused,
        mammogramwithin2yes,
        mammogramwithin2no,
        mammogramwithin2refused,
        cervicalcancerfullcount,
        cervicalcancer21to29,
        cervicalcancer30to65,
        nocervicalscreeningyes,
        nocervicalscreeningno,
        nocervicalscreeningrefused,
        papmorethan3yes,
        papmorethan3no,
        papmorethan3refused,
        papwithin3yes,
        papwithin3no21to29,
        papwithin3no30to65,
        papwithin3refused,
        hpvtestyes,
        hpvtestno,
        colonrectalcount,
        nocolonrectalyes,
        nocolonrectalno,
        nocolonrectalrefused,
        colonrectal10yes,
        colonrectal10no,
        colonrectal10refused,
        colonoscopy10yes,
        colonoscopy10no,
        colonoscopy10refused,
        otherthancolonoscopyyes,
        otherthancolonoscopyno,
        otherthancolonoscopyrefused,
        sigmoidoscopyyes,
        sigmoidoscopyno,
        sigmoidoscopyrefused,
    }
}

module.exports = getData;
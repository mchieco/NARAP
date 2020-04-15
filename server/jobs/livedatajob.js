const express = require("express");
const axios = require('axios');
const cron = require("node-cron");
const fs = require("fs");
const qs = require('query-string');

//run job on restart
setredcapData();

cron.schedule("30 * * * *", async function () { //seconds,
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
            fields: 'record_id, fake_data_flag, ' + //make sure the data is real
                'age, verbal_consent_permission, excl_criteria, gender,ethnic_hisp,racial_background, education, language_preference, insurance, patient_or_visitor, ' + //demographics
                'pcp, pcp_12months, ' + //primary care practicioner
                'tobacco_30days, quitline_enroll, cat_scan, current_smoker, quit_smoking_15, pack_years_calc, ' + //Tobacco Cessation
                'no_mammograms_anymore, mammogram_more_2, mammogram_within_2, ' + //lung cancer
                'no_cervical_screening, pap_more_3, pap_within_3, hpv_test, ' + //cervical screening
                'colonrectal_screening, colonrectal_10, colonoscopy, other_colonrectal, sigmoidoscopy, ' + //colorectal screening
                'liklihood_pcp, liklihood_quitline, liklihood_lung, liklihood_breast, liklihood_cervical, liklihood_colorectal, liklihood_why_not_pcp, liklihood_help_pcp, liklihood_why_not_quitline, liklihood_help_quitline, liklihood_why_not_cat, liklihood_help_cat, liklihood_why_not_mam, liklihood_help_mam, liklihood_why_not_pap, liklihood_help_pap, liklihood_why_not_crc, liklihood_help_crc', //barriers to screening
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
let tobacco30refused = 0;
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
//barriers to screening
let liklihoodpcpvu = 0;
let liklihoodpcpu = 0;
let liklihoodpcpns = 0;
let liklihoodpcpl = 0;
let liklihoodpcpvl = 0;
let liklihoodquitlinevu = 0;
let liklihoodquitlineu = 0;
let liklihoodquitlinens = 0;
let liklihoodquitlinel = 0;
let liklihoodquitlinevl = 0;
let liklihoodcatvu = 0;
let liklihoodcatu = 0;
let liklihoodcatns = 0;
let liklihoodcatl = 0;
let liklihoodcatvl = 0;
let liklihoodbreastvu = 0;
let liklihoodbreastu = 0;
let liklihoodbreastns = 0;
let liklihoodbreastl = 0;
let liklihoodbreastvl = 0;
let liklihoodcervicalvu = 0;
let liklihoodcervicalu = 0;
let liklihoodcervicalns = 0;
let liklihoodcervicall = 0;
let liklihoodcervicalvl = 0;
let liklihoodcolonrectalvu = 0;
let liklihoodcolonrectalu = 0;
let liklihoodcolonrectalns = 0;
let liklihoodcolonrectall = 0;
let liklihoodcolonrectalvl = 0;
let liklihoodwhynotpcp1 = 0;
let liklihoodwhynotpcp2 = 0;
let liklihoodwhynotpcp3 = 0;
let liklihoodwhynotpcp4 = 0;
let liklihoodwhynotpcp5 = 0;
let liklihoodwhynotpcp6 = 0;
let liklihoodwhynotpcp7 = 0;
let liklihoodwhynotpcp8 = 0;
let liklihoodwhynotquitline1 = 0;
let liklihoodwhynotquitline2 = 0;
let liklihoodwhynotquitline3 = 0;
let liklihoodwhynotquitline4 = 0;
let liklihoodwhynotquitline5 = 0;
let liklihoodwhynotquitline6 = 0;
let liklihoodwhynotquitline7 = 0;
let liklihoodwhynotquitline8 = 0;
let liklihoodwhynotcat1 = 0;
let liklihoodwhynotcat2 = 0;
let liklihoodwhynotcat3 = 0;
let liklihoodwhynotcat4 = 0;
let liklihoodwhynotcat5 = 0;
let liklihoodwhynotcat6 = 0;
let liklihoodwhynotcat7 = 0;
let liklihoodwhynotcat8 = 0;
let liklihoodwhynotbreast1 = 0;
let liklihoodwhynotbreast2 = 0;
let liklihoodwhynotbreast3 = 0;
let liklihoodwhynotbreast4 = 0;
let liklihoodwhynotbreast5 = 0;
let liklihoodwhynotbreast6 = 0;
let liklihoodwhynotbreast7 = 0;
let liklihoodwhynotbreast8 = 0;
let liklihoodwhynotcervical1 = 0;
let liklihoodwhynotcervical2 = 0;
let liklihoodwhynotcervical3 = 0;
let liklihoodwhynotcervical4 = 0;
let liklihoodwhynotcervical5 = 0;
let liklihoodwhynotcervical6 = 0;
let liklihoodwhynotcervical7 = 0;
let liklihoodwhynotcervical8 = 0;
let liklihoodwhynotcolonrectal1 = 0;
let liklihoodwhynotcolonrectal2 = 0;
let liklihoodwhynotcolonrectal3 = 0;
let liklihoodwhynotcolonrectal4 = 0;
let liklihoodwhynotcolonrectal5 = 0;
let liklihoodwhynotcolonrectal6 = 0;
let liklihoodwhynotcolonrectal7 = 0;
let liklihoodwhynotcolonrectal8 = 0;
let liklihoodhelppcpvu = 0;
let liklihoodhelppcpu = 0;
let liklihoodhelppcpns = 0;
let liklihoodhelppcpl = 0;
let liklihoodhelppcpvl = 0;
let liklihoodhelpquitlinevu = 0;
let liklihoodhelpquitlineu = 0;
let liklihoodhelpquitlinens = 0;
let liklihoodhelpquitlinel = 0;
let liklihoodhelpquitlinevl = 0;
let liklihoodhelpcatvu = 0;
let liklihoodhelpcatu = 0;
let liklihoodhelpcatns = 0;
let liklihoodhelpcatl = 0;
let liklihoodhelpcatvl = 0;
let liklihoodhelpbreastvu = 0;
let liklihoodhelpbreastu = 0;
let liklihoodhelpbreastns = 0;
let liklihoodhelpbreastl = 0;
let liklihoodhelpbreastvl = 0;
let liklihoodhelpcervicalvu = 0;
let liklihoodhelpcervicalu = 0;
let liklihoodhelpcervicalns = 0;
let liklihoodhelpcervicall = 0;
let liklihoodhelpcervicalvl = 0;
let liklihoodhelpcolonrectalvu = 0;
let liklihoodhelpcolonrectalu = 0;
let liklihoodhelpcolonrectalns = 0;
let liklihoodhelpcolonrectall = 0;
let liklihoodhelpcolonrectalvl = 0;


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
    tobacco30refused = 0;
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
    liklihoodpcpvu = 0;
    liklihoodpcpu = 0;
    liklihoodpcpns = 0;
    liklihoodpcpl = 0;
    liklihoodpcpvl = 0;
    liklihoodquitlinevu = 0;
    liklihoodquitlineu = 0;
    liklihoodquitlinens = 0;
    liklihoodquitlinel = 0;
    liklihoodquitlinevl = 0;
    liklihoodcatvu = 0;
    liklihoodcatu = 0;
    liklihoodcatns = 0;
    liklihoodcatl = 0;
    liklihoodcatvl = 0;
    liklihoodbreastvu = 0;
    liklihoodbreastu = 0;
    liklihoodbreastns = 0;
    liklihoodbreastl = 0;
    liklihoodbreastvl = 0;
    liklihoodcervicalvu = 0;
    liklihoodcervicalu = 0;
    liklihoodcervicalns = 0;
    liklihoodcervicall = 0;
    liklihoodcervicalvl = 0;
    liklihoodcolonrectalvu = 0;
    liklihoodcolonrectalu = 0;
    liklihoodcolonrectalns = 0;
    liklihoodcolonrectall = 0;
    liklihoodcolonrectalvl = 0;
    liklihoodwhynotpcp1 = 0;
    liklihoodwhynotpcp2 = 0;
    liklihoodwhynotpcp3 = 0;
    liklihoodwhynotpcp4 = 0;
    liklihoodwhynotpcp5 = 0;
    liklihoodwhynotpcp6 = 0;
    liklihoodwhynotpcp7 = 0;
    liklihoodwhynotpcp8 = 0;
    liklihoodwhynotquitline1 = 0;
    liklihoodwhynotquitline2 = 0;
    liklihoodwhynotquitline3 = 0;
    liklihoodwhynotquitline4 = 0;
    liklihoodwhynotquitline5 = 0;
    liklihoodwhynotquitline6 = 0;
    liklihoodwhynotquitline7 = 0;
    liklihoodwhynotquitline8 = 0;
    liklihoodwhynotcat1 = 0;
    liklihoodwhynotcat2 = 0;
    liklihoodwhynotcat3 = 0;
    liklihoodwhynotcat4 = 0;
    liklihoodwhynotcat5 = 0;
    liklihoodwhynotcat6 = 0;
    liklihoodwhynotcat7 = 0;
    liklihoodwhynotcat8 = 0;
    liklihoodwhynotbreast1 = 0;
    liklihoodwhynotbreast2 = 0;
    liklihoodwhynotbreast3 = 0;
    liklihoodwhynotbreast4 = 0;
    liklihoodwhynotbreast5 = 0;
    liklihoodwhynotbreast6 = 0;
    liklihoodwhynotbreast7 = 0;
    liklihoodwhynotbreast8 = 0;
    liklihoodwhynotcervical1 = 0;
    liklihoodwhynotcervical2 = 0;
    liklihoodwhynotcervical3 = 0;
    liklihoodwhynotcervical4 = 0;
    liklihoodwhynotcervical5 = 0;
    liklihoodwhynotcervical6 = 0;
    liklihoodwhynotcervical7 = 0;
    liklihoodwhynotcervical8 = 0;
    liklihoodwhynotcolonrectal1 = 0;
    liklihoodwhynotcolonrectal2 = 0;
    liklihoodwhynotcolonrectal3 = 0;
    liklihoodwhynotcolonrectal4 = 0;
    liklihoodwhynotcolonrectal5 = 0;
    liklihoodwhynotcolonrectal6 = 0;
    liklihoodwhynotcolonrectal7 = 0;
    liklihoodwhynotcolonrectal8 = 0;
    liklihoodhelppcpvu = 0;
    liklihoodhelppcpu = 0;
    liklihoodhelppcpns = 0;
    liklihoodhelppcpl = 0;
    liklihoodhelppcpvl = 0;
    liklihoodhelpquitlinevu = 0;
    liklihoodhelpquitlineu = 0;
    liklihoodhelpquitlinens = 0;
    liklihoodhelpquitlinel = 0;
    liklihoodhelpquitlinevl = 0;
    liklihoodhelpcatvu = 0;
    liklihoodhelpcatu = 0;
    liklihoodhelpcatns = 0;
    liklihoodhelpcatl = 0;
    liklihoodhelpcatvl = 0;
    liklihoodhelpbreastvu = 0;
    liklihoodhelpbreastu = 0;
    liklihoodhelpbreastns = 0;
    liklihoodhelpbreastl = 0;
    liklihoodhelpbreastvl = 0;
    liklihoodhelpcervicalvu = 0;
    liklihoodhelpcervicalu = 0;
    liklihoodhelpcervicalns = 0;
    liklihoodhelpcervicall = 0;
    liklihoodhelpcervicalvl = 0;
    liklihoodhelpcolonrectalvu = 0;
    liklihoodhelpcolonrectalu = 0;
    liklihoodhelpcolonrectalns = 0;
    liklihoodhelpcolonrectall = 0;
    liklihoodhelpcolonrectalvl = 0;

    recdapData.forEach((obj) => {
        //makes sure it isnt fake data, this is needed for all of the research points  
        if (obj.fake_data_flag === '') {
            //participants are everything that isn't
            approached += 1;
            if (obj.age >= 18 && (obj.excl_criteria___1 !== '1' 
            || obj.excl_criteria___2 !== '1' || obj.excl_criteria___3 !== '1' 
            || obj.excl_criteria___4 !== '1' || obj.excl_criteria___5 !== '1' 
            || obj.excl_criteria___6 !== '1' || obj.excl_criteria___7 !== '1' 
            || obj.excl_criteria___8 !== '1' || obj.excl_criteria___9 !== '1')) {
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
                        tobacco30refused += 1;
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
                                            if(obj.sigmoidoscopy === '3') {
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
                    //barriers to screening
                    if(obj.liklihood_pcp === '1') {
                        liklihoodpcpvu += 1;
                    }
                    if(obj.liklihood_pcp === '2') {
                        liklihoodpcpu += 1;
                    }
                    if(obj.liklihood_pcp === '3') {
                        liklihoodpcpns += 1;
                    }
                    if(obj.liklihood_pcp === '4') {
                        liklihoodpcpl += 1;
                    }
                    if(obj.liklihood_pcp === '5') {
                        liklihoodpcpvl += 1;
                    }
                    if(obj.liklihood_quitline === '1') {
                        liklihoodquitlinevu += 1;
                    }
                    if(obj.liklihood_quitline === '2') {
                        liklihoodquitlineu += 1;
                    }
                    if(obj.liklihood_quitline === '3') {
                        liklihoodquitlinens += 1;
                    }
                    if(obj.liklihood_quitline === '4') {
                        liklihoodquitlinel += 1;
                    }
                    if(obj.liklihood_quitline === '5') {
                        liklihoodquitlinevl += 1;
                    }
                    if(obj.liklihood_lung === '1') {
                        liklihoodcatvu += 1;
                    }
                    if(obj.liklihood_lung === '2') {
                        liklihoodcatu += 1;
                    }
                    if(obj.liklihood_lung === '3') {
                        liklihoodcatns += 1;
                    }
                    if(obj.liklihood_lung === '4') {
                        liklihoodcatl += 1;
                    }
                    if(obj.liklihood_lung === '5') {
                        liklihoodcatvl += 1;
                    }
                    if(obj.liklihood_breast === '1') {
                        liklihoodbreastvu += 1;
                    }
                    if(obj.liklihood_breast === '2') {
                        liklihoodbreastu += 1;
                    }
                    if(obj.liklihood_breast === '3') {
                        liklihoodbreastns += 1;
                    }
                    if(obj.liklihood_breast === '4') {
                        liklihoodbreastl += 1;
                    }
                    if(obj.liklihood_breast === '5') {
                        liklihoodbreastvl += 1;
                    }
                    if(obj.liklihood_cervical === '1') {
                        liklihoodcervicalvu += 1;
                    }
                    if(obj.liklihood_cervical === '2') {
                        liklihoodcervicalu += 1;
                    }
                    if(obj.liklihood_cervical === '3') {
                        liklihoodcervicalns += 1;
                    }
                    if(obj.liklihood_cervical === '4') {
                        liklihoodcervicall += 1;
                    }
                    if(obj.liklihood_cervical === '5') {
                        liklihoodcervicalvl += 1;
                    }
                    if(obj.liklihood_colorectal === '1') {
                        liklihoodcolonrectalvu += 1;
                    }
                    if(obj.liklihood_colorectal === '2') {
                        liklihoodcolonrectalu += 1;
                    }
                    if(obj.liklihood_colorectal === '3') {
                        liklihoodcolonrectalns += 1;
                    }
                    if(obj.liklihood_colorectal === '4') {
                        liklihoodcolonrectall += 1;
                    }
                    if(obj.liklihood_colorectal === '5') {
                        liklihoodcolonrectalvl += 1;
                    }
                    if(obj.liklihood_why_not_pcp___1 === '1'){
                        liklihoodwhynotpcp1 += 1;
                    }
                    if(obj.liklihood_why_not_pcp___2 === '1'){
                        liklihoodwhynotpcp2 += 1;
                    }
                    if(obj.liklihood_why_not_pcp___3 === '1'){
                        liklihoodwhynotpcp3 += 1;
                    }
                    if(obj.liklihood_why_not_pcp___4 === '1'){
                        liklihoodwhynotpcp4 += 1;
                    }
                    if(obj.liklihood_why_not_pcp___5 === '1'){
                        liklihoodwhynotpcp5 += 1;
                    }
                    if(obj.liklihood_why_not_pcp___6 === '1'){
                        liklihoodwhynotpcp6 += 1;
                    }
                    if(obj.liklihood_why_not_pcp___7 === '1'){
                        liklihoodwhynotpcp7 += 1;
                    }
                    if(obj.liklihood_why_not_pcp___8 === '1'){
                        liklihoodwhynotpcp8 += 1;
                    }
                    if(obj.liklihood_why_not_quitline___1 === '1'){
                        liklihoodwhynotquitline1 += 1;
                    }
                    if(obj.liklihood_why_not_quitline___2 === '1'){
                        liklihoodwhynotquitline2 += 1;
                    }
                    if(obj.liklihood_why_not_quitline___3 === '1'){
                        liklihoodwhynotquitline3 += 1;
                    }
                    if(obj.liklihood_why_not_quitline___4 === '1'){
                        liklihoodwhynotquitline4 += 1;
                    }
                    if(obj.liklihood_why_not_quitline___5 === '1'){
                        liklihoodwhynotquitline5 += 1;
                    }
                    if(obj.liklihood_why_not_quitline___6 === '1'){
                        liklihoodwhynotquitline6 += 1;
                    }
                    if(obj.liklihood_why_not_quitline___7 === '1'){
                        liklihoodwhynotquitline7 += 1;
                    }
                    if(obj.liklihood_why_not_quitline___8 === '1'){
                        liklihoodwhynotquitline8 += 1;
                    }
                    if(obj.liklihood_why_not_cat___1 === '1'){
                        liklihoodwhynotcat1 += 1;
                    }
                    if(obj.liklihood_why_not_cat___2 === '1'){
                        liklihoodwhynotcat2 += 1;
                    }
                    if(obj.liklihood_why_not_cat___3 === '1'){
                        liklihoodwhynotcat3 += 1;
                    }
                    if(obj.liklihood_why_not_cat___4 === '1'){
                        liklihoodwhynotcat4 += 1;
                    }
                    if(obj.liklihood_why_not_cat___5 === '1'){
                        liklihoodwhynotcat5 += 1;
                    }
                    if(obj.liklihood_why_not_cat___6 === '1'){
                        liklihoodwhynotcat6 += 1;
                    }
                    if(obj.liklihood_why_not_cat___7 === '1'){
                        liklihoodwhynotcat7 += 1;
                    }
                    if(obj.liklihood_why_not_cat___8 === '1'){
                        liklihoodwhynotcat8 += 1;
                    }
                    if(obj.liklihood_why_not_mam___1 === '1'){
                        liklihoodwhynotbreast1 += 1;
                    }
                    if(obj.liklihood_why_not_mam___2 === '1'){
                        liklihoodwhynotbreast2 += 1;
                    }
                    if(obj.liklihood_why_not_mam___3 === '1'){
                        liklihoodwhynotbreast3 += 1;
                    }
                    if(obj.liklihood_why_not_mam___4 === '1'){
                        liklihoodwhynotbreast4 += 1;
                    }
                    if(obj.liklihood_why_not_mam___5 === '1'){
                        liklihoodwhynotbreast5 += 1;
                    }
                    if(obj.liklihood_why_not_mam___6 === '1'){
                        liklihoodwhynotbreast6 += 1;
                    }
                    if(obj.liklihood_why_not_mam___7 === '1'){
                        liklihoodwhynotbreast7 += 1;
                    }
                    if(obj.liklihood_why_not_mam___8 === '1'){
                        liklihoodwhynotbreast8 += 1;
                    }
                    if(obj.liklihood_why_not_pap___1 === '1'){
                        liklihoodwhynotcervical1 += 1;
                    }
                    if(obj.liklihood_why_not_pap___2 === '1'){
                        liklihoodwhynotcervical2 += 1;
                    }
                    if(obj.liklihood_why_not_pap___3 === '1'){
                        liklihoodwhynotcervical3 += 1;
                    }
                    if(obj.liklihood_why_not_pap___4 === '1'){
                        liklihoodwhynotcervical4 += 1;
                    }
                    if(obj.liklihood_why_not_pap___5 === '1'){
                        liklihoodwhynotcervical5 += 1;
                    }
                    if(obj.liklihood_why_not_pap___6 === '1'){
                        liklihoodwhynotcervical6 += 1;
                    }
                    if(obj.liklihood_why_not_pap___7 === '1'){
                        liklihoodwhynotcervical7 += 1;
                    }
                    if(obj.liklihood_why_not_pap___8 === '1'){
                        liklihoodwhynotcervical8 += 1;
                    }
                    if(obj.liklihood_why_not_crc___1 === '1'){
                        liklihoodwhynotcolonrectal1 += 1;
                    }
                    if(obj.liklihood_why_not_crc___2 === '1'){
                        liklihoodwhynotcolonrectal2 += 1;
                    }
                    if(obj.liklihood_why_not_crc___3 === '1'){
                        liklihoodwhynotcolonrectal3 += 1;
                    }
                    if(obj.liklihood_why_not_crc___4 === '1'){
                        liklihoodwhynotcolonrectal4 += 1;
                    }
                    if(obj.liklihood_why_not_crc___5 === '1'){
                        liklihoodwhynotcolonrectal5 += 1;
                    }
                    if(obj.liklihood_why_not_crc___6 === '1'){
                        liklihoodwhynotcolonrectal6 += 1;
                    }
                    if(obj.liklihood_why_not_crc___7 === '1'){
                        liklihoodwhynotcolonrectal7 += 1;
                    }
                    if(obj.liklihood_why_not_crc___8 === '1'){
                        liklihoodwhynotcolonrectal8 += 1;
                    }
                    if(obj.liklihood_help_pcp === '1') {
                        liklihoodhelppcpvu += 1;
                    }
                    if(obj.liklihood_help_pcp === '2') {
                        liklihoodhelppcpu += 1;
                    }
                    if(obj.liklihood_help_pcp === '3') {
                        liklihoodhelppcpns += 1;
                    }
                    if(obj.liklihood_help_pcp === '4') {
                        liklihoodhelppcpl += 1;
                    }
                    if(obj.liklihood_help_pcp === '5') {
                        liklihoodhelppcpvl += 1;
                    }
                    if(obj.liklihood_help_pcp === '1') {
                        liklihoodhelppcpvu += 1;
                    }
                    if(obj.liklihood_help_quitline === '1') {
                        liklihoodhelpquitlinevu += 1;
                    }
                    if(obj.liklihood_help_quitline === '2') {
                        liklihoodhelpquitlineu += 1;
                    }
                    if(obj.liklihood_help_quitline === '3') {
                        liklihoodhelpquitlinens += 1;
                    }
                    if(obj.liklihood_help_quitline === '4') {
                        liklihoodhelpquitlinel += 1;
                    }
                    if(obj.liklihood_help_quitline === '5') {
                        liklihoodhelpquitlinevl += 1;
                    }
                    if(obj.liklihood_help_cat === '1') {
                        liklihoodhelpcatvu += 1;
                    }
                    if(obj.liklihood_help_cat === '2') {
                        liklihoodhelpcatu += 1;
                    }
                    if(obj.liklihood_help_cat === '3') {
                        liklihoodhelpcatns += 1;
                    }
                    if(obj.liklihood_help_cat === '4') {
                        liklihoodhelpcatl += 1;
                    }
                    if(obj.liklihood_help_cat === '5') {
                        liklihoodhelpcatvl += 1;
                    }
                    if(obj.liklihood_help_mam === '1') {
                        liklihoodhelpbreastvu += 1;
                    }
                    if(obj.liklihood_help_mam === '2') {
                        liklihoodhelpbreastu += 1;
                    }
                    if(obj.liklihood_help_mam === '3') {
                        liklihoodhelpbreastns += 1;
                    }
                    if(obj.liklihood_help_mam === '4') {
                        liklihoodhelpbreastl += 1;
                    }
                    if(obj.liklihood_help_mam === '5') {
                        liklihoodhelpbreastvl += 1;
                    }
                    if(obj.liklihood_help_pap === '1') {
                        liklihoodhelpcervicalvu += 1;
                    }
                    if(obj.liklihood_help_pap === '2') {
                        liklihoodhelpcervicalu += 1;
                    }
                    if(obj.liklihood_help_pap === '3') {
                        liklihoodhelpcervicalns += 1;
                    }
                    if(obj.liklihood_help_pap === '4') {
                        liklihoodhelpcervicall += 1;
                    }
                    if(obj.liklihood_help_pap === '5') {
                        liklihoodhelpcervicalvl += 1;
                    }
                    if(obj.liklihood_help_crc === '1') {
                        liklihoodhelpcolonrectalvu += 1;
                    }
                    if(obj.liklihood_help_crc === '2') {
                        liklihoodhelpcolonrectalu += 1;
                    }
                    if(obj.liklihood_help_crc === '3') {
                        liklihoodhelpcolonrectalns += 1;
                    }
                    if(obj.liklihood_help_crc === '4') {
                        liklihoodhelpcolonrectall += 1;
                    }
                    if(obj.liklihood_help_crc === '5') {
                        liklihoodhelpcolonrectalvl += 1;
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
        tobacco30refused,
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
        liklihoodpcpvu,
        liklihoodpcpu,
        liklihoodpcpns,
        liklihoodpcpl,
        liklihoodpcpvl,
        liklihoodquitlinevu,
        liklihoodquitlineu,
        liklihoodquitlinens,
        liklihoodquitlinel,
        liklihoodquitlinevl,
        liklihoodcatvu,
        liklihoodcatu,
        liklihoodcatns,
        liklihoodcatl,
        liklihoodcatvl,
        liklihoodbreastvu,
        liklihoodbreastu,
        liklihoodbreastns,
        liklihoodbreastl,
        liklihoodbreastvl,
        liklihoodcervicalvu,
        liklihoodcervicalu,
        liklihoodcervicalns,
        liklihoodcervicall,
        liklihoodcervicalvl,
        liklihoodcolonrectalvu,
        liklihoodcolonrectalu, 
        liklihoodcolonrectalns,
        liklihoodcolonrectall,
        liklihoodcolonrectalvl,
        liklihoodwhynotpcp1,
        liklihoodwhynotpcp2,
        liklihoodwhynotpcp3,
        liklihoodwhynotpcp4,
        liklihoodwhynotpcp5,
        liklihoodwhynotpcp6,
        liklihoodwhynotpcp7,
        liklihoodwhynotpcp8,
        liklihoodwhynotquitline1,
        liklihoodwhynotquitline2,
        liklihoodwhynotquitline3,
        liklihoodwhynotquitline4,
        liklihoodwhynotquitline5,
        liklihoodwhynotquitline6,
        liklihoodwhynotquitline7,
        liklihoodwhynotquitline8,
        liklihoodwhynotcat1,
        liklihoodwhynotcat2,
        liklihoodwhynotcat3,
        liklihoodwhynotcat4,
        liklihoodwhynotcat5,
        liklihoodwhynotcat6,
        liklihoodwhynotcat7,
        liklihoodwhynotcat8,
        liklihoodwhynotbreast1,
        liklihoodwhynotbreast2,
        liklihoodwhynotbreast3,
        liklihoodwhynotbreast4,
        liklihoodwhynotbreast5,
        liklihoodwhynotbreast6,
        liklihoodwhynotbreast7,
        liklihoodwhynotbreast8,
        liklihoodwhynotcervical1,
        liklihoodwhynotcervical2,
        liklihoodwhynotcervical3,
        liklihoodwhynotcervical4,
        liklihoodwhynotcervical5,
        liklihoodwhynotcervical6,
        liklihoodwhynotcervical7,
        liklihoodwhynotcervical8,
        liklihoodwhynotcolonrectal1,
        liklihoodwhynotcolonrectal2,
        liklihoodwhynotcolonrectal3,
        liklihoodwhynotcolonrectal4,
        liklihoodwhynotcolonrectal5,
        liklihoodwhynotcolonrectal6,
        liklihoodwhynotcolonrectal7,
        liklihoodwhynotcolonrectal8,
        liklihoodhelppcpvu,
        liklihoodhelppcpu,
        liklihoodhelppcpns,
        liklihoodhelppcpl,
        liklihoodhelppcpvl,
        liklihoodhelpquitlinevu,
        liklihoodhelpquitlineu,
        liklihoodhelpquitlinens,
        liklihoodhelpquitlinel,
        liklihoodhelpquitlinevl,
        liklihoodhelpcatvu,
        liklihoodhelpcatu,
        liklihoodhelpcatns,
        liklihoodhelpcatl,
        liklihoodhelpcatvl,
        liklihoodhelpbreastvu,
        liklihoodhelpbreastu,
        liklihoodhelpbreastns,
        liklihoodhelpbreastl,
        liklihoodhelpbreastvl,
        liklihoodhelpcervicalvu,
        liklihoodhelpcervicalu,
        liklihoodhelpcervicalns,
        liklihoodhelpcervicall,
        liklihoodhelpcervicalvl,
        liklihoodhelpcolonrectalvu,
        liklihoodhelpcolonrectalu,
        liklihoodhelpcolonrectalns,
        liklihoodhelpcolonrectall,
        liklihoodhelpcolonrectalvl,
    }
}

module.exports = getData;
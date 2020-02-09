<template>
    <div>
    <div style="padding-bottom: 15px;" class="row">
      <div class="col-md-4 col-sm-12 col-lg-4">
        <apexchart type=pie height=350 width=500 :options="chartOptionsGender" :series="seriesGender" />
      </div>
      <div class="col-md-4 col-sm-12 col-lg-4">
        <apexchart type=pie height=350 width=500 :options="chartOptionsHispanic" :series="seriesHispanic" />
      </div>
    <div class="col-md-6 col-sm-12 col-lg-4">
        <apexchart type=pie height=350 width=500 :options="chartOptionsEducation" :series="seriesEducation" />
    </div>
    </div>
    <div class="row">
    <div class="col-md-4 col-sm-12 col-lg-4">
        <apexchart type=pie height=350 width=500 :options="chartOptionsAge" :series="seriesAge"/>
    </div>
    <div class="col-md-4 col-sm-12 col-lg-4">
        <apexchart type=pie height=350 width=500 :options="chartOptionsRace" :series="seriesRace"/>
    </div>
    <div class="col-md-4 col-sm-12 col-lg-4">
        <apexchart type=pie height=350 width=500 :options="chartOptionsInsurance" :series="seriesInsurance" />
    </div>
    </div>
    <v-overlay :value="isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    </div>
</template>

<script>
import liveDataService from '@/services/livedata/demographics';

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

export default {
  data() {
    return {
      isLoading: false,
      seriesGender: [],
      chartOptionsGender: {
        title: {
          text: 'Gender',
          align: 'left',
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: '20px',
            color: 'black',
          },
        },
        labels: ['Male', 'Female'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 350,
            },
            legend: {
              position: 'bottom',
            },
          },
        }],
      },
      seriesHispanic: [],
      chartOptionsHispanic: {
        title: {
          text: 'Hispanic/Latino',
          align: 'left',
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: '20px',
            color: 'black',
          },
        },
        labels: ['Hispanic', 'Non-Hispanic'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 350,
            },
            legend: {
              position: 'bottom',
            },
          },
        }],
      },
      seriesRace: [],
      chartOptionsRace: {
        title: {
          text: 'Race',
          align: 'left',
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: '20px',
            color: 'black',
          },
        },
        labels: ['African American/Black', 'American Indian', 'Asian', 'Caucasiian/White', 'Multi-Racial', 'Native Hawaiian', 'Other', 'Refused to Respond'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 350,
            },
            legend: {
              position: 'bottom',
            },
          },
        }],
      },
      seriesEducation: [],
      chartOptionsEducation: {
        title: {
          text: 'Education',
          align: 'left',
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: '20px',
            color: 'black',
          },
        },
        labels: ['Below 9th Grade', 'Grades 9-11 no HS Diploma', 'GED', 'HS Diploma', 'Some College', 'College Degree', 'Does Not Know', 'Refused to Respond'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 350,
            },
            legend: {
              position: 'bottom',
            },
          },
        }],
      },
      seriesInsurance: [],
      chartOptionsInsurance: {
        title: {
          text: 'Insurance',
          align: 'left',
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: '20px',
            color: 'black',
          },
        },
        labels: ['Private', 'Medicare', 'Medicaid', 'None', 'Other', 'Does Not Know', 'Refused to Respond'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 350,
            },
            legend: {
              position: 'bottom',
            },
          },
        }],
      },
      seriesAge: [],
      chartOptionsAge: {
        title: {
          text: 'Age',
          align: 'left',
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: '20px',
            color: 'black',
          },
        },
        labels: ['18-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80+'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 350,
            },
            legend: {
              position: 'bottom',
            },
          },
        }],
      },
    };
  },
  methods: {
    async load() {
      this.isLoading = true;
      const x = await liveDataService();
      x.forEach((obj) => {
        if (obj.fake_data_flag === '') {
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
      console.log(hawaiian);
      console.log(raceRefused);
      this.seriesGender = [
        males,
        females,
      ];
      this.seriesHispanic = [
        hispanic,
        nohispanic,
      ];
      this.seriesRace = [
        african,
        indian,
        asian,
        white,
        multi,
        hawaiian,
        raceOther,
        raceRefused,
      ];
      this.seriesEducation = [
        lowerthan9th,
        hsdropout,
        ged,
        hsdiploma,
        somecollege,
        collegedegree,
        educationIDK,
        educationRefused,
      ];
      this.seriesInsurance = [
        insurancePrivate,
        medicare,
        medicaid,
        none,
        insuranceOther,
        insuranceIDK,
        insuranceRefused,
      ];
      this.seriesAge = [
        age18to29,
        age30to39,
        age40to49,
        age50to59,
        age60to69,
        age70to79,
        age80plus,
      ];
      this.isLoading = false;
    },
  },
  mounted() {
    this.load();
  },

};
</script>

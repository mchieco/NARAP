<template>
  <div>
    <div style="padding-bottom: 15px;" class="row">
      <div class="col-md-4 col-sm-12 col-lg-4">
        <apexchart
          type="pie"
          height="350"
          width="500"
          :options="chartOptionsGender"
          :series="seriesGender"
        />
      </div>
      <div class="col-md-4 col-sm-12 col-lg-4">
        <apexchart
          type="pie"
          height="350"
          width="500"
          :options="chartOptionsHispanic"
          :series="seriesHispanic"
        />
      </div>
      <div class="col-md-6 col-sm-12 col-lg-4">
        <apexchart
          type="pie"
          height="350"
          width="500"
          :options="chartOptionsEducation"
          :series="seriesEducation"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-sm-12 col-lg-4">
        <apexchart
          type="pie"
          height="350"
          width="500"
          :options="chartOptionsAge"
          :series="seriesAge"
        />
      </div>
      <div class="col-md-4 col-sm-12 col-lg-4">
        <apexchart
          type="pie"
          height="350"
          width="500"
          :options="chartOptionsRace"
          :series="seriesRace"
        />
      </div>
      <div class="col-md-4 col-sm-12 col-lg-4">
        <apexchart
          type="pie"
          height="350"
          width="500"
          :options="chartOptionsInsurance"
          :series="seriesInsurance"
        />
      </div>
    </div>
    <v-overlay :value="isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import liveDataService from '@/services/livedata';

export default {
  data() {
    return {
      isLoading: false,
      females: 0,
      males: 0,
      age18to29: 0,
      age30to39: 0,
      age40to49: 0,
      age50to59: 0,
      age60to69: 0,
      age70to79: 0,
      age80plus: 0,
      hispanic: 0,
      nohispanic: 0,
      african: 0,
      indian: 0,
      asian: 0,
      white: 0,
      multi: 0,
      hawaiian: 0,
      raceOther: 0,
      raceRefuseed: 0,
      lowerthan9th: 0,
      hsdropout: 0,
      ged: 0,
      hsdiploma: 0,
      somecollege: 0,
      collegedegree: 0,
      educationIDK: 0,
      educationRefused: 0,
      insurancePrivate: 0,
      medicare: 0,
      medicaid: 0,
      none: 0,
      insuranceOther: 0,
      insuranceIDK: 0,
      insuranceRefused: 0,
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
      this.females = x.females;
      this.males = x.males;
      this.age18to29 = x.age18to29;
      this.age30to39 = x.age30to39;
      this.age40to49 = x.age40to49;
      this.age50to59 = x.age50to59;
      this.age60to69 = x.age60to69;
      this.age70to79 = x.age70to79;
      this.age80plus = x.age80plus;
      this.hispanic = x.hispanic;
      this.nohispanic = x.nohispanic;
      this.african = x.african;
      this.indian = x.indian;
      this.asian = x.asian;
      this.white = x.white;
      this.multi = x.multi;
      this.hawaiian = x.hawaiian;
      this.raceOther = x.raceOther;
      this.raceRefused = x.raceRefused;
      this.lowerthan9th = x.lowerthan9th;
      this.hsdropout = x.hsdropout;
      this.ged = x.ged;
      this.hsdiploma = x.hsdiploma;
      this.somecollege = x.somecollege;
      this.collegedegree = x.collegedegree;
      this.educationIDK = x.educationIDK;
      this.educationRefused = x.educationRefused;
      this.insurancePrivate = x.insurancePrivate;
      this.medicare = x.medicare;
      this.medicaid = x.medicaid;
      this.none = x.none;
      this.insuranceOther = x.insuranceOther;
      this.insuranceIDK = x.insuranceIDK;
      this.insuranceRefused = x.insuranceRefused;
      this.seriesGender = [
        this.males,
        this.females,
      ];
      this.seriesHispanic = [
        this.hispanic,
        this.nohispanic,
      ];
      this.seriesRace = [
        this.african,
        this.indian,
        this.asian,
        this.white,
        this.multi,
        this.hawaiian,
        this.raceOther,
        this.raceRefused,
      ];
      this.seriesEducation = [
        this.lowerthan9th,
        this.hsdropout,
        this.ged,
        this.hsdiploma,
        this.somecollege,
        this.collegedegree,
        this.educationIDK,
        this.educationRefused,
      ];
      this.seriesInsurance = [
        this.insurancePrivate,
        this.medicare,
        this.medicaid,
        this.none,
        this.insuranceOther,
        this.insuranceIDK,
        this.insuranceRefused,
      ];
      this.seriesAge = [
        this.age18to29,
        this.age30to39,
        this.age40to49,
        this.age50to59,
        this.age60to69,
        this.age70to79,
        this.age80plus,
      ];
      this.isLoading = false;
    },
  },
  mounted() {
    this.load();
  },

};
</script>

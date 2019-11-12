<template>
    <div class="pa-8">
      <p>Research Study - Primary Care Tabacco</p>
      <p>Number of Participants: {{ participants }}</p>
      <div class="row">
      <div class="col">
      <apexchart type=pie width=500 :options="chartOptionsGender" :series="seriesGender" />
      </div>
      <div class="col">
      <apexchart type=bar height=350 width=500 :options="chartOptionsAge" :series="seriesAge"/>
      </div>
      </div>
    </div>
</template>

<script>
import liveDataService from '@/services/livedata';

let females = 0;
let males = 0;
let age18to22 = 0;
let age23to25 = 0;
let age25to30 = 0;
let age30to40 = 0;
let age40plus = 0;

export default {
  data() {
    return {
      participants: 0,
      seriesGender: [],
      chartOptionsGender: {
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
      seriesAge: [{
        data: [],
      }],
      chartOptionsAge: {
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 350,
            },
          },
        }],
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        title: {
          text: 'Participants Vs Age',
          align: 'center',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: '16px',
            color: '#263238',
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['18-22', '23-25', '25-30', '30-40', '40+',
          ],
        },
      },
    };
  },
  methods: {
    async load() {
      const x = await liveDataService();
      x.forEach((obj) => {
        if (obj.fake_data_flag === '') {
          this.participants += 1;
          if (obj.gender === '1') {
            males += 1;
          }
          if (obj.gender === '2') {
            females += 1;
          }
          if (obj.age >= 18 && obj.age <= 22) {
            age18to22 += 1;
          }
          if (obj.age >= 23 && obj.age <= 25) {
            age23to25 += 1;
          }
          if (obj.age >= 26 && obj.age <= 30) {
            age25to30 += 1;
          }
          if (obj.age >= 31 && obj.age <= 40) {
            age30to40 += 1;
          }
          if (obj.age > 40) {
            age40plus += 1;
          }
        }
      });
      console.log(females);
      console.log(males);
      console.log(age30to40);
      this.seriesGender = [
        males,
        females,
      ];
      this.seriesAge = [{
        data: [
          age18to22,
          age23to25,
          age25to30,
          age30to40,
          age40plus,
        ],
      }];
    },
  },
  mounted() {
    this.load();
  },

};
</script>

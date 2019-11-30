<template>
    <div class="pa-8">
      <p>Implementation Study</p>
      <p>Number of Participants: {{ participants }}</p>
      <div class="row justify-content-md-center">
      <div class="col-4 align-self-center">
      <v-select
        :v-model="selectedValue"
        :items="items"
        label="Research Components"
        dense
        outlined
      ></v-select>
      </div>
      </div>
      <div class="row">
      <div class="col">
      <component
        :is="loadComponent"
      ></component>
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
import hello from '@/components/HelloWorld.vue';

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
      selectedValue: null,
      items: ['Demographics', 'Primary Care Practitioner', 'Tabacco Cessation',
        'Breast Cancer Screening', 'Cervical Cancer Screening',
        'Colon-Rectal Screening', 'Barriers to Screening'],
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
  computed: {
    loadComponent() {
      switch (this.selectedValue) {
        default:
          break;
        case 'Demographics':
          return hello;
      }
      return console.log('nope');
    },
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

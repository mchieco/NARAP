<template>
    <div id="chart">
      <apexchart type=pie width=380 :options="chartOptions" :series="series" />
    </div>
</template>

<script>
import liveDataService from '@/services/livedata';

let females = 0;
let males = 0;
export default {
  data() {
    return {
      series: [10, 10],
      chartOptions: {
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
    };
  },
  methods: {
    async load() {
      const x = await liveDataService();
      x.forEach((obj) => {
        if (obj.gender === '1' && obj.fake_data_flag === '') {
          males += 1;
        }
        if (obj.gender === '2' && obj.fake_data_flag === '') {
          females += 1;
        }
      });
      console.log(females);
      console.log(males);
      this.series = [
        males,
        females,
      ];
    },
  },
  mounted() {
    this.load();
  },

};
</script>

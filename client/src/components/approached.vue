<template>
    <div>
      <div>
        <div class="row justify-content-center">
        <h1>
          Approached: <b> {{ approached }} </b>
        </h1>
        </div>
        <div class="row justify-content-center">
        <h1>
          Eligible: <b> {{ eligible }} ({{ eligiblePercent }}% of Approached) </b>
        </h1>
        </div>
        <div class="row justify-content-center">
        <h1>
          Enrolled: <b> {{ enrolled }} ({{ enrolledPercent }}% of Approached) </b>
        </h1>
        </div>
    </div>
          <div class="row justify-content-center">
    <apexchart type=bar width=900 :options="chartOptions" :series="series" />
          </div>
    <v-overlay :value="isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    </div>
    
</template>
<style scoped>
h1 {
  font-size: 25px;
  padding-bottom: 10px;
  font-weight: 500;
  font-family: 'Times New Roman';
}
</style>
<script>
import liveDataService from '@/services/livedata';

export default {
  data() {
    return {
      isLoading: false,
      series: [{
        data: [],
      }],
      approached: 0,
      eligible: 0,
      enrolled: 0,
      eligiblePercent: 0,
      enrolledPercent: 0,
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            distributed: true,
          },
        },
        colors: ['#000080', '#546E7A', '#d4526e'],
        legend: {
          fontSize: '16px',
          fontFamily: 'Helvetica, Arial',
        },
        tooltip: {
          theme: 'light',
          x: {
            show: false,
          },
          y: {
            title: {
              formatter() {
                return '';
              },
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['Approached', 'Eligible', 'Enrolled'],
          labels: {
            style: {
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 'bold',
            },
          },
        },
      },
    };
  },
  methods: {
    async load() {
      this.isLoading = true;
      const x = await liveDataService();
      this.approached = x.approached;
      this.eligible = x.eligible;
      this.enrolled = x.enrolled;
      this.eligiblePercent = (this.eligible / this.approached * 100).toFixed(2);
      this.enrolledPercent = (this.enrolled / this.approached * 100).toFixed(2);
      this.series = [
        {
          data: [this.approached, this.eligible, this.enrolled],
        },
      ];
      this.isLoading = false;
    },
  },
  mounted() {
    this.load();
  },
};
</script>

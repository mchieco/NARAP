<template>
    <div class="row justify-content-md-center">
    <p> {{ enrolled }} </p>
    <apexchart type=pie width=650 :options="chartOptions" :series="series" />
    <v-overlay :value="isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    </div>
    
</template>

<script>
import liveDataService from '@/services/livedata/approached';

export default {
  data() {
    return {
      isLoading: false,
      series: [],
      eligible: 0,
      enrolled: 0,
      chartOptions: {
        labels: ['Eligible', 'Enrolled'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
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
          if (obj.age >= 18) {
            this.eligible += 1;
            if (obj.verbal_consent_permission === '1') {
              this.enrolled += 1;
            }
          }
        }
      });
      this.series = [
        this.eligible,
        this.enrolled,
      ];
      this.isLoading = false;
    },
  },
  mounted() {
    this.load();
  },
};
</script>

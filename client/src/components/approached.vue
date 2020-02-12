<template>
    <div class="row justify-content-md-center">
    <apexchart type=pie width=650 :options="chartOptions" :series="series" />
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
      this.eligible = x.eligible;
      this.enrolled = x.enrolled;
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

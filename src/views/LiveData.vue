<template>
    <div id="chart">
      <apexchart type=pie width=380 :options="chartOptions" :series="series" />
    </div>
</template>

<script>
export default {
  data() {
    return {
      series: [45, 55],
      chartOptions: {
        labels: ['Male', 'Female'],
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

};
</script>

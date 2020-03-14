<template>
  <v-row justify="center">
    <v-dialog max-width="600" max-height="300" v-model="dialog">
      <v-card>
        <v-card-title style="font-size: 32px" v-if="title">{{title}}</v-card-title>
        <v-btn style="position: absolute; right: 0; top: 0;" @click="dialog = false" icon color="black"><v-icon>mdi-close</v-icon></v-btn>
        <div class="row justify-center">
        <apexchart
          type="pie"
          :options="chartOptions"
          :series="chartSeries"
        />
        </div>
        <div class="row justify-center">
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<style scoped>
.chart-holder {
    padding: 0;
}
</style>
<script>
export default {
  props: ['dialog', 'series', 'title'],
  computed: {
    chartSeries() {
      if (!this.series) {
        return [];
      }
      const tempSeries = [];
      const tempLabels = [];
      Object.keys(this.series).forEach((key) => {
        tempSeries.push(this.series[key]);
        tempLabels.push(key);
      });
      return tempSeries;
    },
    chartOptions() {
      const dd = {
        labels: [],
        legend: {
          position: 'right',
        },
      };
      if (this.series) {
        const tempSeries = [];
        const tempLabels = [];
        Object.keys(this.series).forEach((key) => {
          tempSeries.push(this.series[key]);
          tempLabels.push(key);
        });
        dd.labels = tempLabels;
      }
      return dd;
    },
  },
};
</script>

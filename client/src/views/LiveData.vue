<template>
    <div class="pa-8">
      <h1>Implementation Study - Patients and their visitors in the emergency department</h1>
      <div class="row justify-content-md-center">
      <div class="col-12 col-md-4 col-lg-4 align-self-center">
      <v-select
        v-model="selectedValue"
        :items="items"
        label="Research Components"
        dense
        outlined
      ></v-select>
      </div>
      </div>
      <component
        :is="loadComponent"
      ></component>
    </div>
</template>
<style scoped>
h1{
  font-size: 22px;
  text-decoration: underline;
  font-weight: bold;
}
</style>
<script>
import Demographics from '@/components/demographics.vue';
import Approached from '@/components/approached.vue';

export default {
  data() {
    return {
      seriesGender: [],
      selectedValue: 'Approached',
      items: ['Approached', 'Demographics', 'Primary Care Practitioner', 'Tobacco Cessation',
        'Breast Cancer Screening', 'Cervical Cancer Screening',
        'Colon-Rectal Screening', 'Barriers to Screening'],
    };
  },
  computed: {
    loadComponent() {
      switch (this.selectedValue) {
        default:
          break;
        case 'Demographics':
          return Demographics;
        case 'Appraoched':
          return Approached;
      }
      return Approached;
    },
  },
};
</script>

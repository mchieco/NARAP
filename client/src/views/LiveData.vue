<template>
    <div class="pa-8">
      <p style="font-size: 22px;"><b>Implementation Study</b></p>
      <p style="font-size: 22px;"><b>Number of Participants: {{ participants }}</b></p>
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

<script>
import liveDataService from '@/services/livedata';
import Demographics from '@/components/demographics.vue';
import Approached from '@/components/approached.vue';

export default {
  data() {
    return {
      participants: 0,
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
  methods: {
    async load() {
      const x = await liveDataService();
      this.participants = x.participants;
    },
  },
  mounted() {
    this.load();
  },

};
</script>

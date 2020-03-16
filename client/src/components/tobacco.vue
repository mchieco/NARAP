<template>
  <div>
    <div class="row justify-content-center">
      <h1>Enrolled: <b> {{ enrolled }} </b></h1>
    </div>
    <div style="padding-bottom: 15px; padding-left: 20px;" class="row">
      <div class="col-md-6 col-sm-12 col-lg-6">
        <div class="row">
          <h2>Has patient used tobacco products for more than 30 days in a row?</h2>
          <v-btn @click="showModal(tobacco30DaysObject,'Tobacco products for more than 30 days?')" small rounded color="success">View Graph</v-btn>
        </div>
      <div class ="row leftpad" v-for="(value, name) in tobacco30DaysObject" :key="value.id">
          <ul>{{ name }}: <b> {{ value }} ({{ (value /enrolled * 100).toFixed(2) }} % of Enrolled)</b></ul>
      </div>
      </div>
      <div class="col-md-6 col-sm-12 col-lg-6">
        <div class="row">
            <h2>Did the patient request a quitline referral?</h2>
            <v-btn @click="showModal(quitlineReferralObject, 'Did the patient request a quitline referral?')" small rounded color="success">View Graph</v-btn>
            </div>
        <div class ="row leftpad" v-for="(value, name) in quitlineReferralObject" :key="value.id">
            <ul>{{ name }}: <b> {{ value }} ({{ (value /enrolled * 100).toFixed(2) }} % of Enrolled)</b></ul>
        </div>
      </div>
    </div>
    <div class="row">
      <p style="font-weight: bold;">**Disclaimer** Participants may not have answered all questions, so the percentages may not add up to 100%</p>
    </div>
    <v-overlay :value="isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <dataModal :dialog="isOpen" :series="modalseries" :title="title"></dataModal>
  </div>
</template>

<style scoped>
h2 {
  font-weight: bold;
  padding-right: 10px;
  font-size: 20px;
}
.leftpad {
  padding-left: 0px;
}
</style>

<script>
import liveDataService from '@/services/livedata';
import dataModal from '@/components/dataModal.vue';

export default {
  data() {
    return {
      modalseries: null,
      isOpen: false,
      isLoading: false,
      title: null,
      enrolled: 0,
      tobacco30plus: 0,
      tobacco30less: 0,
      tobacco30refused: 0,
      quitlineyes: 0,
      quitlineno: 0,
      tobacco30DaysObject: {

      },
      quitlineReferralObject: {

      },
    };
  },
  methods: {
    async load() {
      this.isLoading = true;
      const x = await liveDataService();
      this.enrolled = x.enrolled;
      this.tobacco30plus = x.tobacco30plus;
      this.tobacco30less = x.tobacco30less;
      this.tobacco30refused = x.tobacco30refused;
      this.quitlineyes = x.quitlineyes;
      this.quitlineno = x.quitlineno;
      this.tobacco30DaysObject = {
        Yes: this.tobacco30plus,
        'No or Does not know': this.tobacco30less,
        'Did not answer': this.tobacco30refused,
      };
      this.quitlineReferralObject = {
        Yes: this.quitlineyes,
        No: this.quitlineno,
      };
      this.isLoading = false;
    },
    showModal(data, title) {
      this.modalseries = data;
      this.title = title;
      this.isOpen = true;
    },
    hideModal() {
      this.modalseries = null;
      this.isOpen = false;
    },
  },
  components: {
    dataModal,
  },
  mounted() {
    this.load();
  },

};
</script>

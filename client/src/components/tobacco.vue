<template>
  <div>
    <div class="row justify-content-center">
      <h1>Enrolled: <b> {{ numberWithCommas(enrolled) }} </b></h1>
    </div>
    <div style="padding-bottom: 15px; padding-left: 20px;" class="row">
      <div class="col-md-6 col-sm-12 col-lg-6">
        <div class="row">
          <h2>Has the participant used tobacco products for more than 30 days in a row?</h2>
        </div>
          <div style="margin-bottom: 10px;" class="row">
                <v-btn @click="showModal(tobacco30DaysObject,'Tobacco products for more than 30 days?')" small rounded color="success">View Graph</v-btn>
          </div>
      <div class ="row leftpad" v-for="(value, name) in tobacco30DaysObject" :key="value.id">
          <ul>{{ name }}: <b> {{ numberWithCommas(value) }} ({{ (value /enrolled * 100).toFixed(2) }} % of Enrolled)</b></ul>
      </div>
      </div>
      <div class="col-md-6 col-sm-12 col-lg-6">
        <div class="row">
            <h2>Did the participant request a quitline referral?</h2>
            </div>
          <div style="margin-bottom: 10px;" class="row">
          <v-btn @click="showModal(quitlineReferralObject, 'Did the patient request a quitline referral?')" small rounded color="success">View Graph</v-btn>
          </div>
        <div class ="row leftpad" v-for="(value, name) in quitlineReferralObject" :key="value.id">
            <ul>{{ name }}: <b> {{ numberWithCommas(value) }} ({{ (value /tobacco30plus * 100).toFixed(2) }} % of tobacco users for longer than 30 days)</b></ul>
        </div>
      </div>
    </div>
    <div class="row justify-content-center" style="padding-left: 20px;">
      <h1 style="font-size: 40px; text-decoration: underline;">Lung Cancer Screening</h1>
    </div>
    <div class="row justify-content-center" style="padding-left: 20px;">
      <p>All participants that have smoked for longer than 30 days and are between the ages of 55 and 80 years old.</p>
    </div>
    <div class="row justify-content-center">
      <h1 style="font-size: 30px;">Total Participants: <b> {{ lungcancercount }} </b></h1>
    </div>
    <div style="padding-bottom: 15px; padding-left: 20px;" class="row">
      <div class="col-md-6 col-sm-12 col-lg-6">
        <div class="row">
          <h2>Have you ever had a low-dose CAT scan to look for early lung cancer?</h2>
        </div>
          <div style="margin-bottom: 10px;" class="row">
          <v-btn @click="showModal(earlyLungCancerObject,'Tobacco products for more than 30 days?')" small rounded color="success">View Graph</v-btn>
          </div>
      <div class ="row leftpad" v-for="(value, name) in earlyLungCancerObject" :key="value.id">
          <ul>{{ name }}: <b> {{ numberWithCommas(value) }} ({{ (value /lungcancercount * 100).toFixed(2) }} % of Total Participants)</b></ul>
      </div>
      </div>
      <div class="col-md-6 col-sm-12 col-lg-6">
        <div class="row">
            <h2>Do you currently smoke cigarettes?</h2>
            </div>
          <div style="margin-bottom: 10px;" class="row">
          <v-btn @click="showModal(currentlySmokeObject, 'Did the patient request a quitline referral?')" small rounded color="success">View Graph</v-btn>
          </div>
        <div class ="row leftpad" v-for="(value, name) in currentlySmokeObject" :key="value.id">
            <ul>{{ name }}: <b> {{ numberWithCommas(value) }} ({{ (value /lungcancercount * 100).toFixed(2) }} % of Total Participants)</b></ul>
        </div>
      </div>
    </div>
    <div style="padding-bottom: 15px; padding-left: 20px;" class="row">
      <div class="col-md-6 col-sm-12 col-lg-6">
        <div class="row">
          <h2>Have you quit smoking cigarettes within the last 15 years?</h2>
        </div>
          <div style="margin-bottom: 10px;" class="row">
                <v-btn @click="showModal(quitSmokingObject,'Tobacco products for more than 30 days?')" small rounded color="success">View Graph</v-btn>
          </div>
      <div class ="row leftpad" v-for="(value, name) in quitSmokingObject" :key="value.id">
          <ul>{{ name }}: <b> {{ numberWithCommas(value) }} ({{ (value /lungcancercount * 100).toFixed(2) }} % of Total Participants)</b></ul>
      </div>
      </div>
    </div>
    <div class="row">
      <p style="font-weight: bold;">Disclaimer: Participants may not have answered all questions, so the percentages may not add up to 100%</p>
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
import '@/mixins/helperMixins';

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
      lungcancercount: 0,
      catscanyes: 0,
      catscanno: 0,
      catscanrefused: 0,
      currentlysmokeyes: 0,
      currentlysmokeno: 0,
      currentlysmokerefused: 0,
      quitsmoking15yes: 0,
      quitsmoking15no: 0,
      quitsmoking15refused: 0,
      tobacco30DaysObject: {

      },
      quitlineReferralObject: {

      },
      earlyLungCancerObject: {

      },
      currentlySmokeObject: {

      },
      quitSmokingObject: {

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
      this.lungcancercount = x.lungcancercount;
      this.catscanyes = x.catscanyes;
      this.catscanno = x.catscanno;
      this.catscanrefused = x.catscanrefused;
      this.currentlysmokeyes = x.currentlysmokeyes;
      this.currentlysmokeno = x.currentlysmokeno;
      this.currentlysmokerefused = x.currentlysmokerefused;
      this.quitsmoking15yes = x.quitsmoking15yes;
      this.quitsmoking15no = x.quitsmoking15no;
      this.quitsmoking15refused = x.quitsmoking15refused;
      this.tobacco30DaysObject = {
        Yes: this.tobacco30plus,
        'No or does not know': this.tobacco30less,
        'Did not answer': this.tobacco30refused,
      };
      this.quitlineReferralObject = {
        Yes: this.quitlineyes,
        No: this.quitlineno,
      };
      this.earlyLungCancerObject = {
        Yes: this.catscanyes,
        'No or does not know': this.catscanno,
        'Did not answer': this.catscanrefused,
      };
      this.currentlySmokeObject = {
        Yes: this.currentlysmokeyes,
        'No or does not know': this.currentlysmokeno,
        'Did not answer': this.currentlysmokerefused,
      };
      this.quitSmokingObject = {
        Yes: this.quitsmoking15yes,
        'No or does not know': this.quitsmoking15no,
        'Did not answer': this.quitsmoking15refused,
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

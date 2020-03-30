<template>
  <div>
    <div class="row justify-content-center">
      <h1>Enrolled: <b> {{ enrolled }} </b></h1>
    </div>
    <div class="row justify-content-center" style="padding-left: 20px;">
      <p style="font-size: 20px">All participants are females between the ages of 55 and 74 years old.</p>
    </div>
    <div class="row justify-content-center">
      <h1 style="font-size: 30px;">Total Participants: <b> {{ breastcancercount }} </b></h1>
    </div>
    <div style="padding-bottom: 15px; padding-left: 20px;" class="row">
      <div class="col-md-6 col-sm-12 col-lg-6">
        <div class="row">
          <h2>Have you been told by a health professional that you no longer need to have mammograms for breast cancer screenings?</h2>
          <v-btn @click="showModal(mammogramObject1,'No longer need to have mammograms for breast cancer screenings?')" small rounded color="success">View Graph</v-btn>
        </div>
      <div class ="row leftpad" v-for="(value, name) in mammogramObject1" :key="value.id">
          <ul>{{ name }}: <b> {{ value }} ({{ (value /breastcancercount * 100).toFixed(2) }} % of Total Participants)</b></ul>
      </div>
      </div>
      <div class="col-md-6 col-sm-12 col-lg-6">
        <div class="row">
            <h2>Have you been told by a health professional that you need a mammogram more often than every two years?</h2>
            <v-btn @click="showModal(mammogramObject2, 'Need a mammogram more often than every two years?')" small rounded color="success">View Graph</v-btn>
            </div>
        <div class ="row leftpad" v-for="(value, name) in mammogramObject2" :key="value.id">
            <ul>{{ name }}: <b> {{ value }} ({{ (value /nomammogramsno * 100).toFixed(2) }} % of Qualifying Participants*)</b></ul>
        </div>
      </div>
    </div>
    <div style="padding-bottom: 15px; padding-left: 20px;" class="row">
      <div class="col-md-6 col-sm-12 col-lg-6">
        <div class="row">
          <h2>Have you  had a mammogram within the last two years?</h2>
          <v-btn @click="showModal(mammogramObject3,'Had a mammogram within the last two years?')" small rounded color="success">View Graph</v-btn>
        </div>
      <div class ="row leftpad" v-for="(value, name) in mammogramObject3" :key="value.id">
          <ul>{{ name }}: <b> {{ value }} ({{ (value /mammogrammore2yearsno * 100).toFixed(2) }} % of Qualifying Participants**)</b></ul>
      </div>
      </div>
    </div>
    <div class="row">
      <p style="font-weight: bold;">* = Qualifying participants are participants who answered 'No' to "Have you been told by a health professional
        that you no longer need to have mammograms for breast cancer screenings?"</p>
      <p style="font-weight: bold;">** = Qualifying participants are participants who answered 'No' to "Have you been told by a health professional
        that you need a mammogram more often than every 2 years?"</p>
    </div>
    <div class="row">
      <p style="font-weight: bold;">Disclaimer: Participants may not have answered all questions, so the percentages may not add up to 100%.</p>
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
      breastcancercount: 0,
      nomammogramsyes: 0,
      nomammogramsno: 0,
      nomammogramsrefused: 0,
      mammogrammore2yearsyes: 0,
      mammogrammore2yearsno: 0,
      mammogrammore2yearsrefused: 0,
      mammogramwithin2yes: 0,
      mammogramwithin2no: 0,
      mammogramwithin2refused: 0,
      mammogramObject1: {

      },
      mammogramObject2: {

      },
      mammogramObject3: {

      },
    };
  },
  methods: {
    async load() {
      this.isLoading = true;
      const x = await liveDataService();
      this.enrolled = x.enrolled;
      this.breastcancercount = x.breastcancercount;
      this.nomammogramsyes = x.nomammogramsyes;
      this.nomammogramsno = x.nomammogramsno;
      this.nomammogramsrefused = x.nomammogramsrefused;
      this.mammogrammore2yearsyes = x.mammogrammore2yearsyes;
      this.mammogrammore2yearsno = x.mammogrammore2yearsno;
      this.mammogrammore2yearsrefused = x.mammogrammore2yearsrefused;
      this.mammogramwithin2yes = x.mammogramwithin2yes;
      this.mammogramwithin2no = x.mammogramwithin2no;
      this.mammogramwithin2refused = x.mammogramwithin2refused;
      this.mammogramObject1 = {
        Yes: this.nomammogramsyes,
        'No or does not know': this.nomammogramsno,
        'Did not answer': this.nomammogramsrefused,
      };
      this.mammogramObject2 = {
        Yes: this.mammogrammore2yearsyes,
        No: this.mammogrammore2yearsno,
        'Did not answer': this.mammogrammore2yearsrefused,
      };
      this.mammogramObject3 = {
        Yes: this.mammogramwithin2yes,
        'No or does not know': this.mammogramwithin2no,
        'Did not answer': this.mammogramwithin2refused,
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

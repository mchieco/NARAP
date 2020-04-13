<!-- this file serves as the code for the cervical cancer screening view of the live data page -->
<template>
  <div>
    <div class="row justify-content-center">
      <h1>Enrolled: <b> {{ numberWithCommas(enrolled) }} </b></h1>
    </div>
    <div style="padding-bottom: 15px;" class="row">
      <div class="col-md-4 col-sm-12 col-lg-4">
        <div class="row">
          <h2>Do you have a Primary Care Practitioner?</h2>
        </div>
        <div class ="row leftpad" v-for="(value, name) in primaryObject" :key="value.id">
          <ul>{{ name }}: <b> {{ numberWithCommas(value) }} ({{ (value /enrolled * 100).toFixed(2) }} % of Enrolled)</b></ul>
      </div>
      <v-btn @click="showModal(primaryObject,'Do you have a primary care practitioner')" small rounded color="success">View Graph</v-btn>
      </div>
      <div class="col-md-4 col-sm-12 col-lg-4">
        <div class="row">
          <h2>Have you had a primary practitioner visit within the preceding 12 months?</h2>
        </div>
        <div class ="row leftpad" v-for="(value, name) in visitObject" :key="value.id">
          <ul>{{ name }}: <b> {{ numberWithCommas(value) }} ({{ (value /enrolled * 100).toFixed(2) }} % of Enrolled)</b></ul>
      </div>
      <v-btn @click="showModal(visitObject,'Primary practitioner visit within preceding 12 months')" small rounded color="success">View Graph</v-btn>
      </div>
    <div class="col-md-4 col-sm-12 col-lg-4">
        <div class="row">
          <h2>Primary Care Practitioner, need intervention?</h2>
        </div>
        <div class ="row leftpad" v-for="(value, name) in pcpVisitObject" :key="value.id">
          <ul>{{ name }}: <b> {{ numberWithCommas(value) }} ({{ (value /enrolled * 100).toFixed(2) }} % of Enrolled)</b></ul>
      </div>
      <v-btn @click="showModal(pcpVisitObject,'Primary practitioner, need intervention')" small rounded color="success">View Graph</v-btn>
      </div>
    </div>
        <v-overlay :value="isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <dataModal :dialog="isOpen" :series="modalseries" :title="title"></dataModal>
    </div>
    
</template>
<!-- the styling for the page -->
<style>
h2 {
  font-weight: bold;
  padding-right: 10px;
  font-size: 20px;
}
.leftpad {
  padding-left: 0px;
}
</style>

<!-- the JavaScript code that grabs the data, puts them in the proper set, and stores them as graphs  -->
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
    };
  },
  methods: {
    async load() {
      this.isLoading = true;
      const x = await liveDataService();
      this.pcpyes = x.pcpyes;
      this.pcpno = x.pcpno;
      this.pcpIDK = x.pcpIDK;
      this.pcp12monthsno = x.pcp12monthsno;
      this.pcp12monthsIDK = x.pcp12monthsIDK;
      this.pcpbothyes = x.pcpbothyes;
      this.pcpyesvisitno = x.pcpyesvisitno;
      this.pcpnovisityes = x.pcpnovisityes;
      this.pcpbothno = x.pcpbothno;
      this.pcpintervention = x.pcpintervention;
      this.enrolled = x.enrolled;
      this.primaryObject = {
        Yes: this.pcpyes,
        No: this.pcpno = x.pcpno,
        'Does not know': this.pcpIDK,
      };
      this.visitObject = {
        Yes: this.pcpbothyes,
        No: this.pcp12monthsno,
        'Does not know': this.pcp12monthsIDK,
      };
      this.pcpVisitObject = {
        'Has PCP and is not up to date': this.pcpyesvisitno,
        'No PCP and is up to date': this.pcpnovisityes,
        'No PCP, is not up to date with visits': this.pcpbothno,
        'Has PCP and is up to date with visits': this.pcpintervention,
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

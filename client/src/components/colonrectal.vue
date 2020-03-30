<template>
  <div>
    <div class="row justify-content-center">
      <h1>Enrolled: <b> {{ enrolled }} </b></h1>
    </div>
    <div class="row justify-content-center" style="padding-left: 20px;">
      <p style="font-size: 20px">All participants are between the ages of 55 and 75 years old.</p>
    </div>
    <div class="row justify-content-center">
      <h1 style="font-size: 30px;">Total Participants: <b> {{ colonrectalcount }} </b></h1>
    </div>
    <div style="padding-bottom: 15px; padding-left: 20px;" class="row">
      <div class="col-md-6 col-sm-12 col-lg-6">
        <div class="row">
          <h2>Have you been told by a health professional that you no longer need to have a colon-rectal cancer screening?</h2>
          <v-btn @click="showModal(noColonObject,'No longer need to have a colon-rectal cancer screenings?')" small rounded color="success">View Graph</v-btn>
        </div>
      <div class ="row leftpad" v-for="(value, name) in noColonObject" :key="value.id">
          <ul>{{ name }}: <b> {{ value }} ({{ (value /colonrectalcount * 100).toFixed(2) }} % of Total Participants)</b></ul>
      </div>
      </div>
      <div class="col-md-6 col-sm-12 col-lg-6">
        <div class="row">
            <h2>Have you been told by a health professional that you need to have a colon-rectal cancer screening more often than every 10 years?</h2>
            <v-btn @click="showModal(colon10Object, 'Colon-rectal cancer screening more often than every 10 years?')" small rounded color="success">View Graph</v-btn>
            </div>
        <div class ="row leftpad" v-for="(value, name) in colon10Object" :key="value.id">
            <ul>{{ name }}: <b> {{ value }} ({{ (value /colonrectalcount * 100).toFixed(2) }} % of Total Participants)</b></ul>
        </div>
      </div>
    </div>
    <div style="padding-bottom: 15px; padding-left: 20px;" class="row">
      <div class="col-md-6 col-sm-12 col-lg-6">
        <div class="row">
          <h2>Have you had a colonoscopy within the last 10 years?</h2>
          <v-btn @click="showModal(colonscopyObject,'Colonoscopy within the last 10 years?')" small rounded color="success">View Graph</v-btn>
        </div>
      <div class ="row leftpad" v-for="(value, name) in colonscopyObject" :key="value.id">
          <ul>{{ name }}: <b> {{ value }} ({{ (value /colonrectal10no * 100).toFixed(2) }} % of Qualifying Participants*)</b></ul>
      </div>
      </div>
      <div class="col-md-6 col-sm-12 col-lg-6">
        <div class="row">
          <h2>Have you had another form of colon-rectal cancer screening instead of a colonoscopy?</h2>
          <v-btn @click="showModal(otherColonObject,'Colon-rectal cancer screening instead of a colonoscopy?')" small rounded color="success">View Graph</v-btn>
        </div>
      <div class ="row leftpad" v-for="(value, name) in otherColonObject" :key="value.id">
          <ul>{{ name }}: <b> {{ value }} ({{ (value /colonrectal10no * 100).toFixed(2) }} % of Qualifying Participants*)</b></ul>
      </div>
      </div>
    </div>
        <div style="padding-bottom: 15px; padding-left: 20px;" class="row">
      <div class="col-md-6 col-sm-12 col-lg-6">
        <div class="row">
          <h2>Have you  had a Sigmoidoscopy?</h2>
          <v-btn @click="showModal(sigmoidObject,'Sigmoidoscopy??')" small rounded color="success">View Graph</v-btn>
        </div>
      <div class ="row leftpad" v-for="(value, name) in sigmoidObject" :key="value.id">
          <ul>{{ name }}: <b> {{ value }} ({{ (value /colonrectal10no * 100).toFixed(2) }} % of Qualifying Participants*)</b></ul>
      </div>
      </div>
    </div>
    <div class="row">
      <p style="font-weight: bold;">* = Qualifying participants are participants who answered 'No' to "Have you been told by a health professional
        that you need to have colon-rectal cancer screening more often than every 10 years?"</p>
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

export default {
  data() {
    return {
      modalseries: null,
      isOpen: false,
      isLoading: false,
      title: null,
      enrolled: 0,
      colonrectalcount: 0,
      nocolonrectalyes: 0,
      nocolonrectalno: 0,
      nocolonrectalrefused: 0,
      colonrectal10yes: 0,
      colonrectal10no: 0,
      colonrectal10refused: 0,
      colonoscopy10yes: 0,
      colonoscopy10no: 0,
      colonoscopy10refused: 0,
      otherthancolonoscopyyes: 0,
      otherthancolonoscopyno: 0,
      otherthancolonoscopyrefused: 0,
      sigmoidoscopyyes: 0,
      sigmoidoscopyno: 0,
      sigmoidoscopyrefused: 0,
      noColonObject: {

      },
      colon10Object: {

      },
      colonscopyObject: {

      },
      otherColonObject: {

      },
      sigmoidObject: {

      },
    };
  },
  methods: {
    async load() {
      this.isLoading = true;
      const x = await liveDataService();
      this.enrolled = x.enrolled;
      this.colonrectalcount = x.colonrectalcount;
      this.nocolonrectalyes = x.nocolonrectalyes;
      this.nocolonrectalno = x.nocolonrectalno;
      this.nocolonrectalrefused = x.nocolonrectalrefused;
      this.colonrectal10yes = x.colonrectal10yes;
      this.colonrectal10no = x.colonrectal10no;
      this.colonrectal10refused = x.colonrectal10refused;
      this.colonoscopy10yes = x.colonoscopy10yes;
      this.colonoscopy10no = x.colonoscopy10no;
      this.colonoscopy10refused = x.colonoscopy10refused;
      this.otherthancolonoscopyyes = x.otherthancolonoscopyyes;
      this.otherthancolonoscopyno = x.otherthancolonoscopyno;
      this.otherthancolonoscopyrefused = x.otherthancolonoscopyrefused;
      this.sigmoidoscopyyes = x.sigmoidoscopyyes;
      this.sigmoidoscopyno = x.sigmoidoscopyno;
      this.sigmoidoscopyrefused = x.sigmoidoscopyrefused;
      this.noColonObject = {
        Yes: this.nocolonrectalyes,
        'No or does not know': this.nocolonrectalno,
        'Did not answer': this.nocolonrectalrefused,
      };
      this.colon10Object = {
        Yes: this.colonrectal10yes,
        No: this.colonrectal10no,
        'Did not answer': this.colonrectal10refused,
      };
      this.colonscopyObject = {
        Yes: this.colonoscopy10yes,
        No: this.colonoscopy10no,
        'Did not answer': this.colonoscopy10refused,
      };
      this.otherColonObject = {
        Yes: this.otherthancolonoscopyyes,
        'No or does not know': this.otherthancolonoscopyno,
        'Did not answer': this.otherthancolonoscopyrefused,
      };
      this.sigmoidObject = {
        Yes: this.sigmoidoscopyyes,
        'No or does not know': this.sigmoidoscopyno,
        'Did not answer': this.sigmoidoscopyrefused,
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

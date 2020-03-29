<template>
  <div>
    <div class="row justify-content-center">
      <h1>Enrolled: <b> {{ enrolled }} </b></h1>
    </div>
    <div style="padding-bottom: 15px;" class="row">
      <div class="col-md-4 col-sm-12 col-lg-4">
        <div class="row">
          <h2>Age</h2>
          <v-btn scoped @click="showModal(ageobject,'Age')" small rounded color="success">View Graph</v-btn>
        </div>
      <div class ="row leftpad" v-for="(value, name) in ageobject" :key="value.id">
          <ul>{{ name }}: <b> {{ value }} ({{ (value /enrolled * 100).toFixed(2) }} % of Enrolled)</b></ul>
      </div>
      <div class="row">
          <h2>Gender</h2>
          <v-btn @click="showModal(genderobject, 'Gender')" small rounded color="success">View Graph</v-btn>
      </div>
      <div class ="row leftpad" v-for="(value, name) in genderobject" :key="value.id">
          <ul>{{ name }}: <b> {{ value }} ({{ (value /enrolled * 100).toFixed(2) }} % of Enrolled)</b></ul>
      </div>
      <div class="row">
          <h2>Hispanic/Latino</h2>
          <v-btn @click="showModal(hispanicobject, 'Hispanic/Latino')" small rounded color="success">View Graph</v-btn>
        </div>
      <div class ="row leftpad" v-for="(value, name) in hispanicobject" :key="value.id">
          <ul>{{ name }}: <b> {{ value }} ({{ (value /enrolled * 100).toFixed(2) }} % of Enrolled)</b></ul>
      </div>
      </div>
      <div class="col-md-4 col-sm-12 col-lg-4">
      <div class="row">
          <h2>Racial Background</h2>
          <v-btn @click="showModal(racialbackgroundobject, 'Racial Background')" small rounded color="success">View Graph</v-btn>
        </div>
      <div class ="row leftpad" v-for="(value, name) in racialbackgroundobject" :key="value.id">
          <ul>{{ name }}: <b> {{ value }} ({{ (value /enrolled * 100).toFixed(2) }} % of Enrolled)</b></ul>
      </div>
      <div class="row">
          <h2>Language Preference</h2>
          <v-btn @click="showModal(languageobject, 'Language Preference')" small rounded color="success">View Graph</v-btn>
        </div>
      <div class ="row leftpad" v-for="(value, name) in languageobject" :key="value.id">
          <ul>{{ name }}: <b> {{ value }} ({{ (value /enrolled * 100).toFixed(2) }} % of Enrolled)</b></ul>
      </div>
      <div class="row">
          <h2>Patient/Visitor</h2>
          <v-btn @click="showModal(patientobject, 'Patient/Visitor')" small rounded color="success">View Graph</v-btn>
      </div>
      <div class ="row leftpad" v-for="(value, name) in patientobject" :key="value.id">
          <ul>{{ name }}: <b> {{ value }} ({{ (value /enrolled * 100).toFixed(2) }} % of Enrolled)</b></ul>
      </div>
      </div>
      <div class="col-md-4 col-sm-12 col-lg-4">
        <div class="row">
          <h2>Education</h2>
          <v-btn @click="showModal(educationobject, 'Education')" small rounded color="success">View Graph</v-btn>
        </div>
      <div class ="row leftpad" v-for="(value, name) in educationobject" :key="value.id">
          <ul>{{ name }}: <b> {{ value }} ({{ (value /enrolled * 100).toFixed(2) }} % of Enrolled)</b></ul>
      </div>
      <div class="row">
          <h2>Insurance</h2>
          <v-btn @click="showModal(insuranceobject, 'Insurance')" small rounded color="success">View Graph</v-btn>
        </div>
      <div class ="row leftpad" v-for="(value, name) in insuranceobject" :key="value.id">
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
  font-size: 22px;
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
      females: 0,
      males: 0,
      age18to19: 0,
      age20to29: 0,
      age30to39: 0,
      age40to49: 0,
      age50to59: 0,
      age60to69: 0,
      age70to79: 0,
      age80to89: 0,
      age90to99: 0,
      age100plus: 0,
      age65plus: 0,
      hispanic: 0,
      nohispanic: 0,
      african: 0,
      indian: 0,
      asian: 0,
      white: 0,
      multi: 0,
      hawaiian: 0,
      raceOther: 0,
      raceRefuseed: 0,
      lowerthan9th: 0,
      hsdropout: 0,
      ged: 0,
      hsdiploma: 0,
      somecollege: 0,
      collegedegree: 0,
      educationIDK: 0,
      educationRefused: 0,
      languageEnglish: 0,
      languageSpanish: 0,
      languageFrench: 0,
      languageOther: 0,
      insurancePrivate: 0,
      medicare: 0,
      medicaid: 0,
      none: 0,
      insuranceOther: 0,
      insuranceIDK: 0,
      insuranceRefused: 0,
      patient: 0,
      visitor: 0,
      ageobject: {
      },
      genderobject: {
      },
      hispanicobject: {
      },
      racialbackgroundobject: {
      },
      educationobject: {
      },
      languageobject: {
      },
      insuranceobject: {
      },
      patientobject: {
      },
    };
  },
  methods: {
    async load() {
      this.isLoading = true;
      const x = await liveDataService();
      this.enrolled = x.enrolled;
      this.females = x.females;
      this.males = x.males;
      this.age18to19 = x.age18to19;
      this.age20to29 = x.age20to29;
      this.age30to39 = x.age30to39;
      this.age40to49 = x.age40to49;
      this.age50to59 = x.age50to59;
      this.age60to69 = x.age60to69;
      this.age70to79 = x.age70to79;
      this.age80to89 = x.age80to89;
      this.age90to99 = x.age90to99;
      this.age100plus = x.age100plus;
      this.age65plus = x.age65plus;
      this.hispanic = x.hispanic;
      this.nohispanic = x.nohispanic;
      this.african = x.african;
      this.indian = x.indian;
      this.asian = x.asian;
      this.white = x.white;
      this.multi = x.multi;
      this.hawaiian = x.hawaiian;
      this.raceOther = x.raceOther;
      this.raceRefused = x.raceRefused;
      this.lowerthan9th = x.lowerthan9th;
      this.hsdropout = x.hsdropout;
      this.ged = x.ged;
      this.hsdiploma = x.hsdiploma;
      this.somecollege = x.somecollege;
      this.collegedegree = x.collegedegree;
      this.educationIDK = x.educationIDK;
      this.educationRefused = x.educationRefused;
      this.languageEnglish = x.languageEnglish;
      this.languageSpanish = x.languageSpanish;
      this.languageFrench = x.languageFrench;
      this.languageOther = x.languageOther;
      this.insurancePrivate = x.insurancePrivate;
      this.medicare = x.medicare;
      this.medicaid = x.medicaid;
      this.none = x.none;
      this.insuranceOther = x.insuranceOther;
      this.insuranceIDK = x.insuranceIDK;
      this.insuranceRefused = x.insuranceRefused;
      this.patient = x.patient;
      this.visitor = x.visitor;
      this.ageobject = {
        '18-19': this.age18to19,
        '20-29': this.age20to29,
        '30-39': this.age30to39,
        '40-49': this.age40to49,
        '50-59': this.age50to59,
        '60-69': this.age60to69,
        '70-79': this.age70to79,
        '80-89': this.age80to89,
        '90-99': this.age90to99,
        '100+': this.age100plus,
      };
      this.genderobject = {
        Male: this.males,
        Female: this.females,
      };
      this.hispanicobject = {
        Hispanic: this.hispanic,
        'Not Hispanic': this.nohispanic,
      };
      this.racialbackgroundobject = {
        'African American/Black': this.african,
        'American Indian': this.indian,
        Asian: this.asian,
        'Caucasian/White': this.white,
        'Multi-Racial': this.multi,
        'Native Hawaiian': this.hawaiian,
        Other: this.raceOther,
        'Refused to Respond': this.raceRefuseed,
      };
      this.educationobject = {
        'Lower than 9th Grade': this.lowerthan9th,
        'Grade 9-11 (No Diploma)': this.hsdropout,
        GED: this.ged,
        'High School Diploma': this.hsdiploma,
        'Some College/University': this.somecollege,
        'College/University Degree': this.collegedegree,
        'Does Not Know': this.educationIDK,
        'Refused to Respond': this.educationRefused,
      };
      this.languageobject = {
        English: this.languageEnglish,
        Spanish: this.languageSpanish,
        French: this.languageFrench,
        Other: this.languageOther,
      };
      this.insuranceobject = {
        Private: this.insurancePrivate,
        Medicare: this.medicare,
        Medicaid: this.medicaid,
        None: this.none,
        Other: this.insuranceOther,
      };
      this.patientobject = {
        Patient: this.patient,
        Visitor: this.visitor,
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

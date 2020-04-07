<template>
  <div>
    <div class="row justify-content-center">
      <h1>Enrolled: <b> {{ numberWithCommas(enrolled) }} </b></h1>
    </div>
        <div class="row justify-content-center">
      <h1 style="font-size: 30px;">Participants Eligible for Cervical Cancer Screening: <b> {{ numberWithCommas(cervicalcancerfullcount) }} </b></h1>
    </div>
    <div class="row justify-content-center">
      <h1 style="font-size: 30px;">Participants Ages 21 to 29: <b> {{ numberWithCommas(cervicalcancer21to29) }} </b></h1>
    </div>
    <div class="row justify-content-center">
      <h1 style="font-size: 30px;">Participants Ages 30 to 65: <b> {{ numberWithCommas(cervicalcancer30to65) }} </b></h1>
    </div>
    <div style="padding-bottom: 15px;" class="row">
      <div class="col-md-6 col-sm-12 col-lg-6">
        <div class="row">
          <h2>Have you been told by a health care professional that you no longer need to have Cervical Cancer Screening</h2>
          <v-btn @click="showModal(screeningObject,'Primary practitioner visit within preceding 12 months')" small rounded color="success">View Graph</v-btn>
        </div>
        <div class ="row leftpad" v-for="(value, name) in screeningObject" :key="value.id">
          <ul>{{ name }}: <b> {{ numberWithCommas(value) }} ({{ (value /cervicalcancerfullcount * 100).toFixed(2) }} % of Total Participants)</b></ul>
      </div>
      </div>
    <div class="col-md-6 col-sm-12 col-lg-6">
        <div class="row">
          <h2>Have you been told by a professional that you need a pap test more often than 3 years</h2>
          <v-btn @click="showModal(papObject,'Primary practitioner, need intervention')" small rounded color="success">View Graph</v-btn>
        </div>
        <div class ="row leftpad" v-for="(value, name) in papObject" :key="value.id">
          <ul>{{ name }}: <b> {{ numberWithCommas(value) }} ({{ (value /nocervicalscreeningno * 100).toFixed(2) }} % of Qualifying Participants)</b></ul>
      </div>
      </div>
      <div class="col-md-6 col-sm-12 col-lg-6">
        <div class="row">
          <h2>Have you had a pap test within the last 3 years</h2>
          <v-btn @click="showModal(papTestObject,'Cervical Cancer')" small rounded color="success">View Graph</v-btn>
        </div>
        <div class ="row leftpad" v-for="(value, name) in papTestObject" :key="value.id">
          <ul>{{ name }}: <b> {{ numberWithCommas(value) }} ({{ (value /papmorethan3no * 100).toFixed(2) }} % of Qualifying Participants)</b></ul>
      </div>
      <div class ="row leftpad" v-for="(value, name) in papTestObject2129" :key="value.id">
          <ul>{{ name }}: <b> {{ numberWithCommas(value) }} ({{ (value /cervicalcancer21to29 * 100).toFixed(2) }} % of Qualifying Participants)</b></ul>
      </div>
            <div class ="row leftpad" v-for="(value, name) in papTestObject3065" :key="value.id">
          <ul>{{ name }}: <b> {{ numberWithCommas(value) }} ({{ (value /cervicalcancer30to65 * 100).toFixed(2) }} % of Qualifying Participants)</b></ul>
      </div>
      </div>
      <div class="col-md-6 col-sm-12 col-lg-6">
        <div class="row">
          <h2>Have you had a test for human papilloma virus, that is an HPV test, and a Pap test within the last 5 years?</h2>
          <v-btn @click="showModal(hpvObject,'Primary practitioner visit within preceding 12 months')" small rounded color="success">View Graph</v-btn>
        </div>
        <div class ="row leftpad" v-for="(value, name) in hpvObject" :key="value.id">
          <ul>{{ name }}: <b> {{ numberWithCommas(value) }} ({{ (value /cervicalcancer30to65 * 100).toFixed(2) }} % of Qualifying Participants)</b></ul>
      </div>
        <div class ="row leftpad" v-for="(value, name) in hpvObjectDoesNotKnow" :key="value.id">
          <ul>{{ name }}: <b> {{ numberWithCommas(value) }} ({{ (value /papmorethan3no * 100).toFixed(2) }} % of Qualifying Participants)</b></ul>
      </div>
      </div>
    </div>
        <v-overlay :value="isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <dataModal :dialog="isOpen" :series="modalseries" :title="title"></dataModal>
    </div>
    
</template>


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
      cervicalcancerfullcount: 0,
      cervicalcancer21to29: 0,
      cervicalcancer30to65: 0,
      nocervicalscreeningyes: 0,
      nocervicalscreeningno: 0,
      nocervicalscreeningrefused: 0,
      papmorethan3yes: 0,
      papmorethan3no: 0,
      papmorethan3refused: 0,
      papwithin3yes: 0,
      papwithin3no21to29: 0,
      papwithin3no30to65: 0,
      papwithin3refused: 0,
      hpvtestyes: 0,
      hpvtestno: 0,
      screeningObject: {

      },
      papObject: {

      },
      papTestObject: {

      },
      papTestObject2129: {

      },
      papTestObject3065: {

      },
      hpvObject: {

      },
      hpvObjectDoesNotKnow: {

      },
    };
  },
  methods: {
    async load() {
      this.isLoading = true;
      const x = await liveDataService();
      this.cervicalcancerfullcount = x.cervicalcancerfullcount;
      this.cervicalcancer21to29 = x.cervicalcancer21to29;
      this.cervicalcancer30to65 = x.cervicalcancer30to65;
      this.nocervicalscreeningyes = x.nocervicalscreeningyes;
      this.nocervicalscreeningno = x.nocervicalscreeningno;
      this.nocervicalscreeningrefused = x.nocervicalscreeningrefused;
      this.papmorethan3yes = x.papmorethan3yes;
      this.papmorethan3no = x.papmorethan3no;
      this.papmorethan3refused = x.papmorethan3refused;
      this.papwithin3yes = x.papwithin3yes;
      this.papwithin3no21to29 = x.papwithin3no21to29;
      this.papwithin3no30to65 = x.papwithin3no30to65;
      this.papwithin3refused = x.papwithin3refused;
      this.hpvtestyes = x.hpvtestyes;
      this.hpvtestno = x.hpvtestno;
      this.enrolled = x.enrolled;
      this.screeningObject = {
        Yes: this.nocervicalscreeningyes,
        No: this.nocervicalscreeningno,
        'Did not answer': this.nocervicalscreeningrefused,

      };
      this.papObject = {
        Yes: this.papmorethan3yes,
        No: this.papmorethan3no,
        'Did not answer': this.papmorethan3refused,

      };
      this.papTestObject = {
        Yes: this.papwithin3yes,
        'Did not answer': this.papwithin3refused,

      };
      this.papTestObject2129 = {
        'No: ages 21 to 29': this.papwithin3no21to29,

      };
      this.papTestObject3065 = {
        'No: ages 30 to 65': this.papwithin3no30to65,

      };
      this.hpvObject = {
        Yes: this.hpvtestyes,
        No: this.hpvtestno,
      };
      this.hpvObjectDoesNotKnow = {
        'Did not answer': this.papwithin3refused,

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

<style scoped>
#Smaller{
  max-width: 350px;
}
</style>
